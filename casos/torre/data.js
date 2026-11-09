/* Datos para la Torre de control.
   PRODUCTOS: reales, del catálogo publicado en alicoempaques.com (shared/catalogo.js), con su precio de lista.
   CLIENTES, VOLÚMENES, DESPACHOS, INVENTARIO y CIFRAS: EJEMPLO sintético y determinista (no son cifras de Alico).
   En producción se reemplazan por la conexión a Epicor / Sheets / Drive. */
(function () {
  const r = AL.rng(20261108), CAT = window.ALICO_CAT || [];
  const now = new Date(), cur = new Date(now.getFullYear(), now.getMonth() - 1, 1);   // último mes cerrado
  const M = [], MN = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
  for (let i = 11; i >= 0; i--) { const d = new Date(cur.getFullYear(), cur.getMonth() - i, 1); M.push({ k: d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0'), l: MN[d.getMonth()] + (d.getMonth() === 0 || i === 11 ? ' ' + String(d.getFullYear()).slice(2) : ''), i: 11 - i }); }
  const tri = i => 'T' + Math.min(3, Math.floor((11 - i) / 3));
  const sku = s => CAT.find(p => p[0] === s);
  /* portafolio real que más rota (selección de SKUs del catálogo), con margen típico de su familia */
  const PORT = [
    ['TZ00562', .31, 900], ['TZ00565', .31, 620], ['TZ00560', .30, 380], ['TZ00570', .33, 700],      // Línea Nativa
    ['T00031', .27, 520], ['T00091', .27, 640], ['T00026', .29, 210], ['T01218', .26, 760], ['T05698', .28, 180], // termoformados AL
    ['MUZ00168', .25, 60], ['MUZ00170', .25, 45],                                                     // clamshell fruver
    ['MUZ00227', .34, 260], ['MUZ00221', .34, 310], ['D59859', .36, 190],                              // quadseal / 4 selles
    ['D48999', .33, 140], ['C26309', .31, 170], ['C68701', .35, 120], ['C54951', .32, 150],             // flex up
    ['D09817', .24, 420], ['NTC445', .23, 520], ['C56894', .26, 90]                                     // vacío y termoencogibles
  ].map(([s, mg, packs]) => { const p = sku(s) || [s, s, 'Otros', 50000, '']; return { sku: s, n: p[1], fam: p[2], precio: p[3], handle: p[4], mg, packs }; });
  const FAM_IND = {
    'Línea Nativa (termoformado)': ['Restaurantes y domicilios', 'Comidas preparadas'], 'Termoformados AL': ['Panadería y pastelería', 'Comidas preparadas', 'Restaurantes y domicilios'],
    'Clamshell Fruver': ['Frutas y hortalizas'], 'Bolsas Quadseal / Flow pack': ['Café'], 'Bolsas Flex Up (doypack)': ['Café', 'Snacks y confitería', 'Mascotas'],
    'Vacío y termoencogibles (carnes)': ['Cárnicos', 'Lácteos y quesos']
  };
  const CL = [
    ['Café Origen del Huila', 'Café', 'Colombia', 1.3], ['Tostadora Montaña Azul', 'Café', 'Colombia', 1], ['Café Cordillera SpA', 'Café', 'Chile', .9],
    ['Frigorífico La Pradera', 'Cárnicos', 'Colombia', 1.5], ['Carnes del Chaco', 'Cárnicos', 'Paraguay', .9], ['Quesos del Valle', 'Lácteos y quesos', 'Colombia', .7],
    ['Domicilios Sabor Paisa', 'Restaurantes y domicilios', 'Colombia', 1.2], ['Cocina Express Bogotá', 'Restaurantes y domicilios', 'Colombia', .9], ['Comidas Listas del Sur', 'Comidas preparadas', 'Chile', .8],
    ['Panadería La Espiga', 'Panadería y pastelería', 'Colombia', 1], ['Pastelería Dulce Hogar', 'Panadería y pastelería', 'Colombia', .6],
    ['Fruver del Oriente', 'Frutas y hortalizas', 'Colombia', .8], ['Agroexport Los Andes', 'Frutas y hortalizas', 'Chile', .9],
    ['Snacks Atacama', 'Snacks y confitería', 'Chile', .9], ['Confites Guaraní', 'Snacks y confitería', 'Paraguay', .6], ['NutriPet Colombia', 'Mascotas', 'Colombia', .5]
  ].map(([c, ind, pais, w]) => ({ c, ind, pais, w, canal: ind === 'Restaurantes y domicilios' || ind === 'Panadería y pastelería' ? 'Tienda en línea + distribuidores' : 'Venta directa B2B' }));
  const ventas = [];
  CL.forEach(cli => PORT.forEach(p => {
    if (!(FAM_IND[p.fam] || []).includes(cli.ind)) return;
    if (r() < .3) return;
    M.forEach(m => {
      const xmas = /-(10|11|12)$/.test(m.k) ? 1.18 : 1, season = 1 + .08 * Math.sin((m.i + p.mg * 10) / 12 * 6.28), trend = 1 + m.i * .009;
      let packs = p.packs * cli.w / 3 * season * trend * xmas * (.82 + r() * .36);
      if (cli.c === 'Snacks Atacama' && m.i >= 9) packs *= m.i === 9 ? .78 : m.i === 10 ? .6 : .48;       // cliente en caída
      if (cli.ind === 'Café' && m.i >= 8) packs *= 1.14;                                                   // café crece (exportación)
      if (p.fam === 'Línea Nativa (termoformado)') packs *= 1 + m.i * .025;                                 // línea nueva en crecimiento
      const venta = packs * p.precio / 1e6;
      let g = p.mg + (r() - .5) * .02; if (/Vacío|Termoform|Nativa|Clamshell/.test(p.fam) && m.i >= 9) g -= (m.i - 8) * .011;  // resina presiona margen
      ventas.push({ mes: m.k, tri: tri(m.i), pais: cli.pais, cliente: cli.c, industria: cli.ind, canal: cli.canal, familia: p.fam, sku: p.sku, producto: p.n, paquetes: Math.round(packs), venta: +venta.toFixed(3), margen: +(venta * g).toFixed(3) });
    });
  }));
  const META = {}; M.forEach(m => { META[m.k] = ventas.filter(v => v.mes === m.k).reduce((a, b) => a + b.venta, 0) * (m.i >= 9 ? 1.06 : .98); });
  const TR = [['TransAndes', ['Colombia']], ['Rápido Sur', ['Chile']], ['LogiCaribe', ['Colombia']], ['Ruta Guaraní', ['Paraguay']], ['Cordillera Cargo', ['Chile', 'Paraguay']]];
  const despachos = [];
  TR.forEach(([t, ps]) => ps.forEach(p => M.forEach(m => {
    const n = Math.round((p === 'Colombia' ? 120 : p === 'Chile' ? 70 : 38) * (.9 + r() * .2) / (ps.length > 1 || t === 'LogiCaribe' ? 2 : 1));
    let ot = .955 - (r() * .03), cp = .975 - r() * .02;
    if (p === 'Paraguay' && m.i >= 8) ot -= .11;
    if (t === 'LogiCaribe' && m.i >= 9) ot -= .06;
    const a = Math.round(n * ot), c = Math.round(n * cp), ok = Math.round(Math.min(a, c) * (.97 + r() * .03));
    despachos.push({ mes: m.k, tri: tri(m.i), pais: p, transportista: t, pedidos: n, a_tiempo: a, completos: c, otif_ok: ok });
  })));
  const inventario = [
    ['Resina PP (termoformado)', 'Materia prima', 'kg', 70000, 3100, 18, 'Polímeros del Caribe', 3.4],
    ['Lámina PET para termoformado', 'Materia prima', 'kg', 46000, 1600, 24, 'Film Asia Trading (importado)', 4.1],
    ['Resina PE baja densidad', 'Materia prima', 'kg', 38000, 4200, 21, 'Petroquímica Andina', 3.6],
    ['Película PET 12 µm', 'Materia prima', 'kg', 33000, 900, 30, 'Film Asia Trading (importado)', 2.9],
    ['Válvula desgasificadora (café)', 'Insumo', 'uds', 180000, 9500, 35, 'Valvulas Europa (importado)', .09],
    ['Zipper para doypack', 'Insumo', 'm', 90000, 3800, 20, 'Cierres Industriales', .05],
    ['Tinta flexo base solvente', 'Insumo', 'kg', 2100, 120, 14, 'Colores Industriales', 9.8],
    ['Adhesivo de laminación', 'Insumo', 'kg', 2600, 95, 25, 'Adhesivos del Pacífico (importado)', 7.2],
    ['Contenedor Línea Nativa (producto terminado)', 'Producto terminado', 'paq', 5200, 610, 4, 'Producción propia', 20359],
    ['Bolsa QUADSEAL (producto terminado)', 'Producto terminado', 'paq', 2400, 180, 5, 'Producción propia', 51050]
  ].map(([item, tipo, u, stock, cons, lead, prov, cost]) => ({ item, tipo, unidad: u, stock, consumo_dia: cons, lead_dias: lead, proveedor: prov, costo_unit: cost, cobertura_dias: +(stock / cons).toFixed(1) }));
  const resina = M.map((m, i) => ({ mes: m.k, tri: tri(m.i), precio_usd_ton: Math.round(1180 + i * 2 + (i >= 9 ? (i - 8) * 32 : 0) + (r() - .5) * 18), tc: Math.round(3900 + (r() - .5) * 120) }));
  const proveedores = [{ proveedor: 'Petroquímica Andina', cumplimiento: .93, lead: 21, riesgo: 'Medio' }, { proveedor: 'Polímeros del Caribe', cumplimiento: .96, lead: 18, riesgo: 'Bajo' }, { proveedor: 'Colores Industriales', cumplimiento: .98, lead: 14, riesgo: 'Bajo' }, { proveedor: 'Adhesivos del Pacífico (importado)', cumplimiento: .81, lead: 25, riesgo: 'Alto' }, { proveedor: 'Film Asia Trading (importado)', cumplimiento: .78, lead: 30, riesgo: 'Alto' }, { proveedor: 'Valvulas Europa (importado)', cumplimiento: .88, lead: 35, riesgo: 'Medio' }];
  /* finanzas, personas y producción (indicadores mensuales de ejemplo) */
  const fin = M.map((m, i) => ({ mes: m.k, tri: tri(m.i), cartera_vencida_pct: +(.07 + (i >= 8 ? (i - 7) * .006 : 0) + (r() - .5) * .01).toFixed(3), dso: Math.round(46 + (i >= 8 ? (i - 7) * 1.6 : 0) + (r() - .5) * 3), ebitda_pct: +(.142 - (i >= 9 ? (i - 8) * .006 : 0) + (r() - .5) * .006).toFixed(3) }));
  const personas = M.map((m, i) => ({ mes: m.k, tri: tri(m.i), ausentismo_pct: +(.031 + (r() - .5) * .008 + (i === 11 ? .006 : 0)).toFixed(3), rotacion_pct: +(.012 + (r() - .5) * .004).toFixed(3), horas_capacitacion: Math.round(240 + i * 12 + r() * 40), accidentes: i === 6 ? 1 : 0 }));
  const produccion = M.map((m, i) => ({ mes: m.k, tri: tri(m.i), oee: +(.71 + i * .004 + (r() - .5) * .02 - (i === 10 ? .03 : 0)).toFixed(3), min_paro: Math.round(5200 - i * 120 + (r() - .5) * 600), toneladas: Math.round(1450 + i * 18 + (r() - .5) * 90), scrap_pct: +(.034 - i * .0006 + (r() - .5) * .003).toFixed(3) }));
  const reciclables = CAT.filter(p => /recicl|reciplus|eco|kraft|papel/i.test(p[1])).length;
  window.TD = { M, ventas, despachos, inventario, resina, proveedores, fin, personas, produccion, CL, PORT, META, reciclables, catalogo: CAT.length };
})();
