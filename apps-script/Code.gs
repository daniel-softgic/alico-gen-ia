/**
 * Taller de IA · Alico — backend en Google Apps Script (Sheets + Drive)
 * Un solo script atiende los 5 casos:
 *   Eventos, Turnos, Casos  → Maestro
 *   Reclamos                → Centro de inteligencia del cliente
 *   Preguntas, Inspecciones → Agente técnico y Visión artificial
 *   Drive/Alico-Taller-IA/Modelos      → modelo de visión (archivo)
 *   Drive/Alico-Taller-IA/Conocimiento → documentos que alimentan al agente técnico (txt, md, Google Docs)
 *
 * INSTALACIÓN
 * 1) Crea una Hoja de cálculo de Google (vacía) y abre Extensiones > Apps Script.
 * 2) Pega este código y cambia SECRET por una clave tuya.
 * 3) Ejecuta una vez la función «autorizar» (concede permisos de Hojas y Drive).
 * 4) Implementar > Nueva implementación > Aplicación web: Ejecutar como «Yo», acceso «Cualquier usuario».
 * 5) Copia la URL (termina en /exec) en Ajustes del taller > «URL de la nube».
 */
const SECRET = 'CAMBIA_ESTA_CLAVE';
const CARPETA = 'Alico-Taller-IA';

const COLS = {
  Eventos: ['id', 'ts', 'sesion', 'tipo', 'caso_id', 'area', 'via', 'ok', 'ms', 'min', 'operario', 'turno', 'detalle', 'ejemplo'],
  Casos:   ['id', 'estado', 'autor', 'area', 'titulo', 'ts', 'json'],
  Turnos:  ['id', 'ts', 'sesion', 'operario', 'turno', 'maquina', 'paros_min', 'resumen_audio', 'alertas', 'pendientes', 'texto_original']
};
const GENERICA = ['id', 'ts', 'sesion', 'titulo', 'estado', 'json'];

function out_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
function cap_(s) { s = String(s || '').replace(/[^A-Za-z0-9_]/g, ''); return s.charAt(0).toUpperCase() + s.slice(1); }

function sheet_(name, cols) {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  let sh = ss.getSheetByName(name);
  if (!sh) {
    sh = ss.insertSheet(name);
    sh.appendRow(cols); sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, cols.length).setFontWeight('bold').setBackground('#FDE9CF');
  }
  return sh;
}
function rowFrom_(cols, d) {
  return cols.map(function (c) {
    const v = d[c];
    if (v === undefined || v === null) return '';
    const s = (typeof v === 'object') ? JSON.stringify(v) : v;
    return (typeof s === 'string' && s.length > 45000) ? s.slice(0, 45000) : s;
  });
}
function upsert_(sh, cols, d) {
  const last = sh.getLastRow();
  const ids = last > 1 ? sh.getRange(2, 1, last - 1, 1).getValues().map(function (r) { return String(r[0]); }) : [];
  const idx = ids.indexOf(String(d.id));
  const row = rowFrom_(cols, d);
  if (idx >= 0) sh.getRange(idx + 2, 1, 1, row.length).setValues([row]); else sh.appendRow(row);
}
function carpeta_(sub) {
  let it = DriveApp.getFoldersByName(CARPETA);
  const raiz = it.hasNext() ? it.next() : DriveApp.createFolder(CARPETA);
  if (!sub) return raiz;
  it = raiz.getFoldersByName(sub);
  return it.hasNext() ? it.next() : raiz.createFolder(sub);
}

function doPost(e) {
  let body;
  try { body = JSON.parse(e.postData.contents); } catch (err) { return out_({ ok: false, error: 'json' }); }
  const portal = !!body.portal && body.portal === portalKey_();   // celular del cliente (QR): solo puede crear reclamos y su foto
  if (body.secret !== SECRET && !portal) return out_({ ok: false, error: 'auth' });
  if (portal) body.items = (body.items || []).filter(function (it) { return it.kind === 'reclamo' || (it.kind === 'archivo' && /^reclamo-[\w-]+\.foto$/.test((it.data || {}).name || '')); }).slice(0, 2);
  const lock = LockService.getScriptLock();
  lock.waitLock(25000);
  try {
    let n = 0;
    (body.items || []).forEach(function (it) {
      const d = it.data || {};
      if (it.kind === 'evento') { sheet_('Eventos', COLS.Eventos).appendRow(rowFrom_(COLS.Eventos, d)); n++; }
      else if (it.kind === 'turno') { sheet_('Turnos', COLS.Turnos).appendRow(rowFrom_(COLS.Turnos, d)); n++; }
      else if (it.kind === 'caso') { upsert_(sheet_('Casos', COLS.Casos), COLS.Casos, Object.assign({}, d, { json: JSON.stringify(d), ts: d.ts || new Date().toISOString() })); n++; }
      else if (it.kind === 'archivo') {
        const f = carpeta_('Modelos'), files = f.getFilesByName(d.name);
        if (files.hasNext()) files.next().setContent(d.content); else f.createFile(d.name, d.content, d.mime || 'application/json');
        n++;
      } else if (/^[a-z_]{3,24}$/.test(it.kind)) {
        const nombre = cap_(it.kind) + 's';
        upsert_(sheet_(nombre, GENERICA), GENERICA, Object.assign({ ts: new Date().toISOString() }, d, { json: JSON.stringify(d) })); n++;
      }
    });
    return out_({ ok: true, guardados: n });
  } finally { lock.releaseLock(); }
}

function doGet(e) {
  const p = (e && e.parameter) || {};
  if (p.action === 'estado' && p.portal && p.portal === portalKey_()) {   // el cliente consulta SU reclamo por código
    const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Reclamos');
    if (!sh || sh.getLastRow() < 2) return out_({ ok: true, reclamo: null });
    const rows = sh.getRange(2, 1, sh.getLastRow() - 1, GENERICA.length).getValues();
    for (let i = rows.length - 1; i >= 0; i--) if (String(rows[i][0]) === String(p.id)) { try { const r = JSON.parse(rows[i][5]); return out_({ ok: true, reclamo: { id: r.id, tipo: r.tipo, producto: r.producto, estado: r.estado } }); } catch (err) {} }
    return out_({ ok: true, reclamo: null });
  }
  if (p.secret !== SECRET) return out_({ ok: false, error: 'auth' });
  if (p.action === 'ping') return out_({ ok: true, ts: new Date().toISOString() });

  if (p.action === 'casos') {                       // fichas de Maestro
    const sh = sheet_('Casos', COLS.Casos), last = sh.getLastRow();
    if (last < 2) return out_({ ok: true, casos: [] });
    const rows = sh.getRange(2, 1, last - 1, COLS.Casos.length).getValues();
    const casos = rows.map(function (r) { try { const c = JSON.parse(r[6]); c.estado = r[1] || c.estado; return c; } catch (err) { return null; } }).filter(Boolean);
    return out_({ ok: true, casos: casos });
  }
  if (p.action === 'rows') {                        // cualquier hoja genérica (Reclamos, Preguntas…)
    const nombre = cap_(p.sheet) + (/s$/.test(p.sheet) ? '' : 's');
    const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(nombre);
    if (!sh || sh.getLastRow() < 2) return out_({ ok: true, rows: [] });
    const last = sh.getLastRow(), n = Math.min(parseInt(p.n || '500', 10), last - 1);
    const rows = sh.getRange(last - n + 1, 1, n, GENERICA.length).getValues().map(function (r) { try { return JSON.parse(r[5]); } catch (err) { return null; } }).filter(Boolean);
    return out_({ ok: true, rows: rows });
  }
  if (p.action === 'eventos') {
    const sh = sheet_('Eventos', COLS.Eventos), last = sh.getLastRow();
    if (last < 2) return out_({ ok: true, eventos: [] });
    const n = Math.min(parseInt(p.n || '500', 10), last - 1);
    const rows = sh.getRange(last - n + 1, 1, n, COLS.Eventos.length).getValues();
    return out_({ ok: true, eventos: rows.map(function (r) { const o = {}; COLS.Eventos.forEach(function (c, i) { o[c] = r[i]; }); return o; }) });
  }
  if (p.action === 'archivo') {                     // modelo de visión u otros archivos
    const files = carpeta_('Modelos').getFilesByName(p.name);
    if (!files.hasNext()) return out_({ ok: false, error: 'no_existe' });
    return out_({ ok: true, content: files.next().getBlob().getDataAsString() });
  }
  if (p.action === 'docs') {                        // conocimiento técnico desde Drive
    const docs = [], it = carpeta_('Conocimiento').getFiles();
    while (it.hasNext()) {
      const f = it.next(), mt = f.getMimeType();
      try {
        if (mt === 'application/vnd.google-apps.document') docs.push({ name: f.getName(), text: DocumentApp.openById(f.getId()).getBody().getText() });
        else if (mt.indexOf('text/') === 0) docs.push({ name: f.getName(), text: f.getBlob().getDataAsString() });
      } catch (err) {}
    }
    return out_({ ok: true, docs: docs });
  }
  return out_({ ok: false, error: 'accion' });
}

/** Clave del portal del cliente: se deriva del SECRET (el PC la calcula igual) y solo permite crear reclamos. */
function portalKey_() {
  const d = Utilities.computeDigest(Utilities.DigestAlgorithm.SHA_256, 'portal:' + SECRET, Utilities.Charset.UTF_8);
  return d.slice(0, 8).map(function (b) { return ('0' + (b & 255).toString(16)).slice(-2); }).join('');
}

/** Ejecuta esta función una vez para autorizar Hojas y Drive. */
function autorizar() {
  SpreadsheetApp.getActiveSpreadsheet().getName();
  carpeta_('Conocimiento'); carpeta_('Modelos');
}
