/* Contexto de planta compartido por los 5 casos (líneas, máquinas, personas, defectos).
   Líneas y personas son EJEMPLO (nombres ficticios). La taxonomía de defectos es referencia de la
   industria de empaques flexibles y termoformados; se valida con Calidad de Alico. */
(function () {
'use strict';
const P = window.PLANTA = {};

P.LINEAS = [
  { id: 'TER-1', n: 'Termoformado 1', area: 'Termoformado', maq: 'Termoformadora de bandejas TF-01', fams: ['Línea Nativa (termoformado)', 'Termoformados AL', 'Clamshell Fruver'], color: '#00BED6' },
  { id: 'SEL-3', n: 'Conversión y sellado 3', area: 'Conversión', maq: 'Selladora-cortadora de bolsas SC-03', fams: ['Bolsas Flex Up (doypack)', 'Bolsas Quadseal / Flow pack'], color: '#EE7623' },
  { id: 'IMP-2', n: 'Impresión flexo 2', area: 'Impresión', maq: 'Impresora flexográfica 8 colores FX-02', fams: ['Bolsas Flex Up (doypack)', 'Bolsas Quadseal / Flow pack'], color: '#E99B35' },
  { id: 'LAM-1', n: 'Laminación 1', area: 'Laminación', maq: 'Laminadora sin solvente LM-01', fams: ['Bolsas Flex Up (doypack)', 'Bolsas planas y laminadas'], color: '#008AAB' },
  { id: 'EXT-1', n: 'Extrusión soplado 1', area: 'Extrusión', maq: 'Extrusora coextrusión 3 capas EX-01', fams: ['Vacío y termoencogibles (carnes)', 'Bolsas planas y laminadas'], color: '#B15E14' }
];
P.OPERARIOS = ['Carlos Restrepo', 'Marta Giraldo', 'Jhon Arango', 'Luz Cardona', 'Andrés Ospina', 'Paola Zapata', 'Diego Muñoz', 'Natalia Henao'];
P.TURNOS = { A: '6:00–14:00', B: '14:00–22:00', C: '22:00–6:00' };
P.turno = (d = new Date()) => { const h = d.getHours(); return h >= 6 && h < 14 ? 'A' : h >= 14 && h < 22 ? 'B' : 'C'; };

/* 6M de Ishikawa: dónde nace la falla */
P.CAUSAS = {
  materia: { n: 'Materia prima', i: '🧪', c: '#8E5BD6', d: 'Resina, película, tinta o adhesivo fuera de especificación' },
  proceso: { n: 'Proceso', i: '⚙️', c: '#EE7623', d: 'Parámetros de temperatura, tiempo, presión, velocidad o curado' },
  maquina: { n: 'Máquina', i: '🛠️', c: '#d6403a', d: 'Desgaste, desajuste o falla de un componente' },
  humano: { n: 'Humano / método', i: '🧍', c: '#008AAB', d: 'Montaje, receta, manipulación o procedimiento no seguido' },
  medicion: { n: 'Medición', i: '📏', c: '#53575A', d: 'Instrumento descalibrado o muestreo insuficiente' },
  ambiente: { n: 'Ambiente', i: '🌡️', c: '#1c9a5b', d: 'Humedad, temperatura, polvo o estática en la nave' }
};

/* Defectos típicos por proceso, con sus causas probables (peso relativo) y acción inmediata */
P.DEFECTOS = [
  { id: 'sello', n: 'Sello abierto o débil', proc: ['Conversión'], sev: 1, causas: [['proceso', 'Temperatura o tiempo de mordaza bajos', 45], ['maquina', 'Mordaza con teflón gastado o contaminado', 25], ['materia', 'Capa sellante (PE) fuera de calibre', 20], ['humano', 'Receta de sellado equivocada al cambiar referencia', 10]], acc: 'Retirar, medir resistencia de sello (ASTM F88) y revisar temperatura real de mordaza' },
  { id: 'arruga', n: 'Arrugas en el sello', proc: ['Conversión'], sev: 2, causas: [['maquina', 'Tensión desbalanceada o rodillo desalineado', 40], ['proceso', 'Presión de mordaza excesiva', 30], ['materia', 'Película con curvatura (curl)', 30]], acc: 'Ajustar tensión y paralelismo de rodillos; verificar presión' },
  { id: 'zipper', n: 'Zipper o válvula mal ubicados', proc: ['Conversión'], sev: 2, causas: [['maquina', 'Fotocelda fuera de registro', 45], ['humano', 'Montaje del aplicador sin verificar', 35], ['proceso', 'Velocidad alta para el aplicador', 20]], acc: 'Recalibrar fotocelda y validar 5 bolsas antes de seguir' },
  { id: 'corte', n: 'Corte descentrado o con rebaba', proc: ['Conversión', 'Termoformado'], sev: 3, causas: [['maquina', 'Cuchilla o troquel desgastado', 55], ['maquina', 'Registro de corte desajustado', 30], ['humano', 'Ajuste de guía al cambiar rollo', 15]], acc: 'Cambiar o afilar cuchilla; registrar horas de uso' },
  { id: 'registro', n: 'Registro de impresión desfasado', proc: ['Impresión'], sev: 2, causas: [['maquina', 'Desgaste de engranajes o cilindros', 35], ['proceso', 'Tensión de banda inestable', 35], ['humano', 'Montaje de clichés fuera de marca', 30]], acc: 'Revisar tensión y montaje de clichés' },
  { id: 'tono', n: 'Color fuera de estándar', proc: ['Impresión'], sev: 2, causas: [['proceso', 'Viscosidad de tinta fuera de rango', 40], ['materia', 'Lote de tinta o pigmento distinto', 30], ['maquina', 'Anilox gastado o sucio', 20], ['medicion', 'Espectrofotómetro sin calibrar', 10]], acc: 'Medir ΔE contra el patrón aprobado y ajustar viscosidad' },
  { id: 'mancha', n: 'Mancha, velo o tinta corrida', proc: ['Impresión'], sev: 2, causas: [['maquina', 'Cuchilla rasqueta desgastada', 40], ['proceso', 'Secado insuficiente', 30], ['ambiente', 'Estática o polvo en la nave', 15], ['humano', 'Limpieza de anilox no realizada', 15]], acc: 'Cambiar rasqueta, limpiar anilox y verificar secadores' },
  { id: 'adherencia', n: 'Tinta que se desprende', proc: ['Impresión'], sev: 2, causas: [['proceso', 'Tratamiento corona bajo (dinas)', 55], ['materia', 'Película con exceso de deslizante', 30], ['medicion', 'Plumas de dinas vencidas', 15]], acc: 'Medir dinas (≥ 38 para PE) y subir tratamiento' },
  { id: 'delam', n: 'Delaminación', proc: ['Laminación'], sev: 1, causas: [['proceso', 'Curado incompleto antes de convertir', 40], ['materia', 'Adhesivo fuera de mezcla o vencido', 30], ['proceso', 'Gramaje de adhesivo bajo', 20], ['ambiente', 'Humedad alta en la sala de curado', 10]], acc: 'Retener lote, medir fuerza de laminación y tiempo de curado' },
  { id: 'burbuja', n: 'Burbujas o túneles en el laminado', proc: ['Laminación'], sev: 2, causas: [['proceso', 'Presión de nip baja', 40], ['materia', 'Solvente o humedad atrapados', 35], ['maquina', 'Rodillo de laminación marcado', 25]], acc: 'Revisar presión de nip y estado del rodillo' },
  { id: 'gel', n: 'Geles u ojos de pez', proc: ['Extrusión'], sev: 3, causas: [['materia', 'Resina contaminada o de alto peso molecular', 50], ['proceso', 'Material degradado en el dado', 30], ['maquina', 'Malla del cambiador rota', 20]], acc: 'Purgar, cambiar malla y separar el lote de resina' },
  { id: 'calibre', n: 'Calibre irregular', proc: ['Extrusión'], sev: 2, causas: [['maquina', 'Labio del dado sucio o dañado', 40], ['proceso', 'Anillo de aire descentrado', 35], ['ambiente', 'Corrientes de aire en la nave', 25]], acc: 'Centrar anillo, limpiar labio y revisar perfil de calibre' },
  { id: 'pared', n: 'Pared delgada o llenado incompleto', proc: ['Termoformado'], sev: 2, causas: [['proceso', 'Temperatura de calentamiento no uniforme', 45], ['maquina', 'Vacío insuficiente o molde obstruido', 35], ['materia', 'Lámina con calibre variable', 20]], acc: 'Revisar perfil de resistencias y líneas de vacío del molde' },
  { id: 'fisura', n: 'Fisura o esquina blanca', proc: ['Termoformado'], sev: 2, causas: [['proceso', 'Lámina fría al formar', 40], ['maquina', 'Molde con arista viva o dañada', 35], ['materia', 'Lámina con humedad o reciclado alto', 25]], acc: 'Subir temperatura de lámina y revisar aristas del molde' },
  { id: 'deforme', n: 'Pieza deformada o tapa que no cierra', proc: ['Termoformado'], sev: 2, causas: [['proceso', 'Enfriamiento corto en el molde', 45], ['maquina', 'Desalineación del molde macho/hembra', 35], ['humano', 'Apilado en caliente', 20]], acc: 'Aumentar tiempo de enfriamiento y verificar cierre tapa-base' },
  { id: 'contam', n: 'Contaminación o punto negro', proc: ['Extrusión', 'Termoformado', 'Conversión'], sev: 1, causas: [['materia', 'Resina o lámina contaminada', 45], ['ambiente', 'Polvo en la zona de proceso', 30], ['humano', 'Manipulación sin guantes', 25]], acc: 'Retener lote y revisar inocuidad (contacto con alimentos)' },
  { id: 'anom', n: 'Anomalía no catalogada', proc: ['Termoformado', 'Conversión', 'Impresión', 'Laminación', 'Extrusión'], sev: 3, causas: [['proceso', 'Por confirmar con Calidad', 40], ['maquina', 'Por confirmar con Mantenimiento', 30], ['materia', 'Por confirmar con el proveedor', 30]], acc: 'Retirar y llevar a Calidad para análisis' }
];
P.defecto = id => P.DEFECTOS.find(d => d.id === id) || P.DEFECTOS[P.DEFECTOS.length - 1];
P.linea = id => P.LINEAS.find(l => l.id === id) || P.LINEAS[0];
P.defectosDe = area => P.DEFECTOS.filter(d => d.proc.includes(area));
/* productos reales del catálogo de Alico que corren en una línea */
P.productosDe = lineaId => { const l = P.linea(lineaId), C = window.ALICO_CAT || []; return C.filter(p => l.fams.includes(p[2])); };
})();

/* ---------- historial de inspección (EJEMPLO, determinista): alimenta Visión › Informes y la Torre › Calidad ---------- */
(function () {
'use strict';
const P = window.PLANTA;
let cache = null;
P.historial = function () {
  if (cache) return cache;
  const r = window.AL ? AL.rng(4242) : Math.random, rows = [], piezas = [], hoy = new Date(); hoy.setHours(0, 0, 0, 0);
  const pick = a => a[Math.floor(r() * a.length)];
  const BASE = { 'TER-1': 5200, 'SEL-3': 7800, 'IMP-2': 6100, 'LAM-1': 3900, 'EXT-1': 4300 };   // piezas inspeccionadas por turno
  const TASA = { 'TER-1': .011, 'SEL-3': .016, 'IMP-2': .012, 'LAM-1': .008, 'EXT-1': .009 };
  for (let d = 29; d >= 0; d--) {
    const dia = new Date(hoy - d * 864e5), dk = dia.toISOString().slice(0, 10), dow = dia.getDay();
    P.LINEAS.forEach((L, li) => ['A', 'B', 'C'].forEach((t, ti) => {
      const prods = P.productosDe(L.id); if (!prods.length) return;
      const ini = [6, 14, 22][ti]; if (d === 0 && new Date().getHours() < ini) return;          // hoy: solo turnos ya iniciados
      const prod = prods[(d * 7 + li * 3 + ti * 5) % prods.length];
      const op = P.OPERARIOS[(li * 3 + ti + Math.floor(d / 7)) % P.OPERARIOS.length];
      const n = Math.round(BASE[L.id] * (dow === 0 ? .35 : 1) * (.88 + r() * .24));
      let tasa = TASA[L.id] * (.75 + r() * .5);
      const defs = P.defectosDe(L.area).filter(x => x.id !== 'anom'), w = {};
      defs.forEach(x => w[x.id] = .5 + r());
      /* patrones que la IA debe encontrar */
      if (L.id === 'SEL-3' && t === 'C' && d < 12) { tasa *= 2.1; w.sello = (w.sello || 1) * 4; }          // mordaza que se degrada en el turno de noche
      if (L.id === 'TER-1' && d >= 6 && d <= 9) { tasa *= 2.4; w.pared = (w.pared || 1) * 5; }             // lote de lámina con calibre variable
      if (L.id === 'IMP-2' && dow === 1) { tasa *= 1.6; w.tono = (w.tono || 1) * 3; }                     // arranque de los lunes sin estandarizar viscosidad
      if (L.id === 'EXT-1' && d < 4) { w.gel = (w.gel || 1) * 3; }
      const rej = Math.round(n * tasa), tot = Object.values(w).reduce((a, b) => a + b, 0), por = {};
      let left = rej; defs.forEach((x, i) => { const k = i === defs.length - 1 ? left : Math.round(rej * w[x.id] / tot); por[x.id] = Math.max(0, Math.min(left, k)); left -= por[x.id]; });
      const lote = 'L' + dk.slice(2).replace(/-/g, '') + '-' + L.id.slice(0, 3) + t;
      rows.push({ dia: dk, linea: L.id, turno: t, operario: op, sku: prod[0], producto: prod[1], lote, n, rej, por });
      const fin = d === 0 ? Math.max(.1, Math.min(8, new Date().getHours() + new Date().getMinutes() / 60 - ini)) : 7.5;
      if (d < 3) Object.entries(por).forEach(([id, k]) => { for (let j = 0; j < Math.min(k, 3); j++) {
        const df = P.defecto(id), c = df.causas[0];
        piezas.push({ id: 'H' + rows.length + id + j, ts: new Date(dia.getTime() + (ini + r() * fin) * 36e5).toISOString(), linea: L.id, maquina: L.maq, turno: t, operario: op, sku: prod[0], producto: prod[1], lote, serie: lote + '-' + String(Math.floor(r() * 9000) + 100).padStart(4, '0'), def: id, defecto: df.n, causa: c[0], causa_txt: c[1], estado: 'Retirada', ejemplo: true });
      } });
    }));
  }
  piezas.sort((a, b) => b.ts.localeCompare(a.ts));
  cache = { rows, piezas };
  return cache;
};
/* precio unitario real: precio del paquete ÷ unidades del paquete (50 por defecto en la tienda) */
P.precioUnit = sku => { const p = (window.ALICO_CAT || []).find(x => x[0] === sku); return p ? p[3] / (/vac|termoflex|termoenc|plana/i.test(p[1]) ? 100 : 50) : 400; };
})();
