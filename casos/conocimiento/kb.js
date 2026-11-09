/* Base de conocimiento de EJEMPLO para el Agente técnico.
   Contenido de referencia general de la industria de empaques flexibles (valores típicos, NO especificaciones de Alico).
   Para producción: reemplazar/ampliar con los manuales, fichas y procedimientos reales de Alico (subir a Drive > Conocimiento). */
window.KB = [
{id:'ext-01', cat:'Extrusión', titulo:'Extrusión de película soplada: defectos y causas frecuentes', ref:'Referencia general de la industria', url:'https://www.plasticstoday.com',
texto:`## Burbuja inestable
La burbuja oscila o "respira" cuando el flujo de aire del anillo de enfriamiento es irregular, hay corrientes de aire en la nave o la presión interna de la burbuja varía. Revisar: filtros y compuertas del anillo de aire, estabilizador de burbuja (IBC), fugas en la línea de aire interno y corrientes externas. Una relación de soplado (BUR) muy alta también reduce la estabilidad.
## Geles u ojos de pez
Puntos transparentes o abultados en la película. Causas: polímero de alto peso molecular mal fundido, contaminación cruzada entre resinas, degradación térmica (material estancado en el dado o el husillo), mezcla de grados con distinto índice de fluidez. Acciones: purgar con compuesto de purga, revisar mallas y temperaturas de la zona de fusión, limpiar el dado y verificar que las resinas sean compatibles.
## Espesor irregular (variación de calibre)
Rayas o bandas gruesas y delgadas. Causas: labio del dado dañado o sucio, temperatura despareja en el dado, anillo de aire descentrado, rotación del cabezal defectuosa. Acciones: centrar el labio, limpiar, ajustar los tornillos de calibre, verificar el sistema de calibre automático.
## Línea de dado (rayas longitudinales)
Depósitos de material degradado (die lines) en el labio. Limpiar con herramientas de latón o cobre (nunca acero), bajar temperatura si hay degradación, revisar aditivos que migren.
## Arrugas en el plegado o en el bobinado
Tensión despareja, rodillos desalineados o película con curvatura (aplicación irregular de enfriamiento). Verificar paralelismo de rodillos, tensión del tiro y la torre de plegado.
## Bloqueo (la película se pega sobre sí misma)
Poco antibloqueo o deslizante, bobinado a demasiada tensión/temperatura, o almacenamiento caliente. Ajustar masterbatch de aditivos y enfriar mejor antes del bobinado.`},
{id:'flx-01', cat:'Impresión', titulo:'Impresión flexográfica: defectos de calidad y cómo corregirlos', ref:'Referencia general de la industria', url:'https://www.flexography.org',
texto:`## Mancha o suciedad de tinta (scumming / hazing)
Tinta en zonas que no deben imprimirse. Causas: tinta con viscosidad baja, cuchilla rasqueta desgastada o con presión baja, anilox sucio, exceso de presión de impresión, estática. Acciones: cambiar o ajustar la cuchilla, limpiar el anilox, subir viscosidad, bajar la presión de impresión a "kiss".
## Fantasma (ghosting) y banda sin imprimir
Zona con falta de tinta o imagen débil. Causas: celdas del anilox obstruidas, cuchilla con mala presión, tinta seca en el cliché, tensión irregular, o tratamiento corona insuficiente. Acciones: limpiar el anilox con ultrasonido o solución específica, revisar la tinta y el cliché.
## Ganancia de punto (dot gain) alta
Los puntos se ven más grandes y la imagen más oscura. Causas: presión excesiva, anilox con volumen alto, tinta muy diluida o cliché blando. Corregir presión y volumen del anilox.
## Falta de registro
Los colores no coinciden. Causas: tensión variable, dilatación del material, cliché mal montado, engranajes con holgura. Estabilizar tensión y verificar el montaje.
## Pinholes (puntos sin imprimir)
Burbujas, polvo o tratamiento corona bajo. Medir dinas (ASTM D2578) y limpiar el cliché; pasar la película por eliminador de estática.
## Mala adhesión de tinta
Prueba de cinta (ASTM D3359) falla. Revisar corona (≥ 38 dinas en PE para tintas base solvente, valores típicos), tinta/solvente, secado y envejecimiento de la película.
## Olor o solvente residual
Secado insuficiente. Subir temperatura/caudal del túnel de secado sin pasar el límite del material.`},
{id:'lam-01', cat:'Laminación', titulo:'Laminación de películas: delaminación, túneles y adhesivos', ref:'Referencia general de la industria', url:'https://www.flexpack.org',
texto:`## Delaminación (baja fuerza de unión)
Causas: peso de adhesivo insuficiente, relación de mezcla incorrecta (sistemas de 2 componentes), película con tratamiento corona bajo, curado incompleto, contaminación de superficie (antideslizante o tinta que migra). Acciones: verificar gramaje (típico 1,5–3,5 g/m² según sistema), mezcla y tiempo de curado (24–72 h en sistemas con isocianato). Medir fuerza de unión T-peel (ASTM F904).
## Túneles y arrugas
Película con tensión diferente entre las dos capas o con ondulación. Igualar tensión y revisar el rodillo de presión y la temperatura del nip.
## Burbujas
Aire atrapado por alimentación acelerada, rodillo de presión con bajo contacto o adhesivo con demasiada viscosidad. Reducir velocidad y revisar presión.
## Olor / solvente residual
En laminación con solvente: secado insuficiente o curado a temperatura baja. En solventless: migración de aminas aromáticas primarias; respetar tiempo de curado y verificar migración para alimentos.
## Curado
Almacenar las bobinas en cuarto de curado (temperatura 35–45 °C típica) y respetar el tiempo antes de refilar o despachar. No usar el producto antes de verificar la unión.`},
{id:'sel-01', cat:'Sellado', titulo:'Sellado térmico: parámetros, sello abierto o débil, fugas', ref:'Referencia general de la industria', url:'https://www.astm.org/f0088_f0088m-15.html',
texto:`## Variables del sellado
Tres variables controlan el sello: temperatura de las mordazas, presión y tiempo de contacto (dwell). La "ventana de sellado" depende de la capa sellante (PE, PP, EVA, ionómero). A mayor temperatura se pierde la capa sellante o se deforma el material; a menor temperatura el sello no se funde.
## Sello abierto o débil
Causas frecuentes: temperatura baja, mordaza sin paralelismo o con presión despareja, tiempo de contacto corto, cuchilla/teflón desgastado, contaminación en el sello (polvo, producto, grasa, antideslizante), película con tratamiento insuficiente o capa sellante mal coextruida. Acciones: subir temperatura en pasos de 5 °C, revisar paralelismo con papel sensible a presión, cambiar el teflón, limpiar mordazas, comprobar polvo o producto en zona de sello.
## Sello quemado, arrugado o con canales
Temperatura excesiva, tiempo largo, arrugas previas al sello o mordaza con arista. Bajar temperatura y mejorar el guiado de la película.
## Fugas en bolsas llenas
Probar con prueba de burbuja en cámara de vacío (ASTM D3078) o con colorante. Revisar esquinas y cruces de sello.
## Medición
Resistencia del sello: ASTM F88 (tracción, valores típicos 1–4 N/15 mm para sellos pelables y > 20 N/15 mm para sellos permanentes en películas de 60–100 µm; confirmar con la ficha del producto). Integridad: ASTM F2054 (estallido) y F1140.
## Registro
Cada cambio de parámetros debe quedar registrado con fecha, turno y operario.`},
{id:'ter-01', cat:'Termoformado', titulo:'Termoformado: adelgazamiento, deformaciones y pegado de lámina', ref:'Referencia general de la industria', url:'https://www.plasticstoday.com',
texto:`## Espesor irregular o adelgazamiento en esquinas
La lámina se estira más donde la relación de profundidad (draw ratio) es alta. Acciones: pre-estirado con tapón (plug assist), ajustar temperatura de la lámina de forma homogénea y revisar el diseño del molde.
## Bridging (puentes o telas)
Lámina que forma pliegues entre cavidades. Reducir la separación entre cavidades y controlar el calentamiento.
## Alabeo (warping) de la pieza
Enfriamiento desigual o tensiones residuales. Ajustar tiempo de enfriamiento y temperatura del molde.
## Lámina que se pega al molde (sticking)
Temperatura del molde muy alta o falta de desmoldeo. Revisar el enfriamiento y los respiraderos.
## Fugas en sellado de tapa
Defectos de brida (pliegues, contaminación). Verificar planitud y limpieza.
## Calidad
Medir espesor en puntos críticos (esquina, pared, fondo) y comparar con el plano.`},
{id:'sle-01', cat:'Fundas', titulo:'Fundas termoencogibles (sleeves): encogimiento y distorsión', ref:'Referencia general de la industria', url:'https://www.tlmi.com',
texto:`## Principio
Una funda termoencogible (PVC, PETG, OPS o PLA) se orienta durante la fabricación y encoge al calentarse. El encogimiento principal es en la dirección circunferencial (típico 50–70 % según la película).
## Distorsión del diseño
Si la impresión se ve torcida o estirada tras el túnel de vapor/aire caliente: temperatura/tiempo de exposición desbalanceados, mala posición de la funda en el envase o diseño sin compensación de encogimiento. Ajustar el túnel, la velocidad y la compensación (distorsión previa en el arte).
## Arrugas o pliegues
Desajuste entre diámetro de la funda y del envase (relación recomendada 1,3–1,6), temperatura despareja. Verificar tamaño de la funda.
## Costura abierta
Solvente o adhesivo insuficiente, tiempo de sellado corto. Revisar la aplicación de solvente.
## Almacenamiento
Evitar temperaturas >30 °C: la película puede encoger sola o "blocking".`},
{id:'bar-01', cat:'Barrera', titulo:'Películas barrera: oxígeno, vapor de agua y selección de estructura', ref:'Referencia general de la industria', url:'https://www.astm.org/d3985-17.html',
texto:`## Conceptos
OTR (tasa de transmisión de oxígeno) y WVTR (vapor de agua) miden qué tanto gas atraviesa la película. A menor valor, mayor protección del producto.
## Materiales típicos
- PE/PP: buena barrera a vapor de agua, pobre a oxígeno.
- EVOH: excelente barrera a oxígeno, sensible a la humedad (debe ir protegida entre capas).
- PA (nailon): buena barrera media, resistente a perforación.
- PET metalizado y aluminio: barrera alta a oxígeno, luz y vapor.
- PET/PVDC: alta barrera, usado en alimentos.
## Cómo elegir
Definir vida útil objetivo del producto, sensibilidad a oxígeno/humedad/luz y el proceso de llenado. Estructuras típicas: PET/PE, PET/AL/PE, PA/EVOH/PE, BOPP/BOPP metalizado.
## Medición
OTR: ASTM D3985 (coulométrico). WVTR: ASTM F1249. Los valores se informan a 23 °C y 0 % HR (oxígeno) o 38 °C y 90 % HR (vapor), salvo otra indicación.
## Efecto de arrugas y perforaciones
Los microdefectos (flex cracking) pueden aumentar fuertemente la transmisión; evitar plegados excesivos en el proceso.`},
{id:'qa-01', cat:'Ensayos', titulo:'Ensayos de calidad para películas y empaques', ref:'Referencia general de la industria', url:'https://www.astm.org',
texto:`## Ensayos más usados
- Espesor (ASTM D6988) con micrómetro; verificar variación ±10 % típico.
- Tracción y elongación (ASTM D882): carga y deformación en dirección máquina (MD) y transversal (TD).
- Coeficiente de fricción COF (ASTM D1894): estático y dinámico; típico 0,15–0,40 para películas deslizantes.
- Resistencia al sello (ASTM F88) y estallido (ASTM F2054).
- Tratamiento corona (ASTM D2578): tinta de dinas; ≥ 38 dinas típico para impresión en PE.
- Adhesión de tinta (ASTM D3359): cinta adhesiva.
- Fuerza de unión T-peel (ASTM F904) en laminados.
- Impacto de dardo (ASTM D1709) y resistencia al desgarro Elmendorf (ASTM D1922).
- Opacidad y brillo (ASTM D1003 / D2457).
## Frecuencia sugerida (ejemplo)
Inicio de turno, cambio de orden de producción y cada 2 horas en procesos críticos. Registrar en la hoja de control y escalar desviaciones.
## Muestreo
Tomar muestras a lo ancho de la bobina (borde, centro, borde) para detectar variaciones.`},
{id:'cor-01', cat:'Impresión', titulo:'Tratamiento corona: qué es y cómo verificarlo', ref:'Referencia general de la industria', url:'https://www.astm.org/d2578-17r23.html',
texto:`## ¿Qué hace?
Aumenta la energía superficial de películas como PE y PP para que acepten tinta, adhesivo y recubrimientos. Se mide en dinas/cm.
## Valores típicos de referencia
PE para impresión flexo: 38–42 dinas. PP/BOPP: 38–40 dinas. Con tintas base agua suele requerirse más.
## El tratamiento decae
El efecto disminuye con el tiempo y con la migración de aditivos (deslizantes). Usar la película dentro del plazo recomendado y medir antes de imprimir.
## Revisión
Medir con tintas o plumas de dinas (ASTM D2578) al inicio de cada bobina. Revisar electrodos, cerámica del rodillo, distancia del electrodo y potencia.
## Problemas
Tratamiento irregular al ancho: electrodos sucios o desalineados. Sobretratamiento: bloqueo o amarilleo, olor a ozono. Ajustar y ventilar.`},
{id:'seg-01', cat:'Seguridad', titulo:'Seguridad en máquinas: bloqueo y etiquetado (LOTO) y atrapamientos', ref:'Referencia general de la industria', url:'https://www.osha.gov/control-hazardous-energy',
texto:`## Regla principal
Ninguna persona debe introducir la mano ni limpiar, ajustar o destrabar una máquina en movimiento. Antes de intervenir: parar, aislar la energía, bloquear, etiquetar y verificar energía cero.
## Pasos de LOTO
1. Avisar al equipo. 2. Parar la máquina por el procedimiento normal. 3. Aislar fuentes de energía (eléctrica, neumática, hidráulica, térmica). 4. Colocar candado personal y etiqueta. 5. Liberar energía almacenada (aire, presión, tensión de rodillos). 6. Verificar con un arranque de prueba que no hay movimiento. 7. Al terminar, retirar solo con el candado propio.
## Puntos de atrapamiento típicos
Rodillos de tiro, bobinas y mandriles, cuchillas de corte, mordazas de sellado calientes, rodillos de laminación. Usar protecciones fijas; nunca puentear sensores de seguridad.
## Superficies calientes
Mordazas, dado de extrusión y túneles de secado superan 100 °C. Usar guantes aislantes y esperar enfriamiento.
## Ropa y EPP
No usar ropa suelta, cadenas ni cabello suelto cerca de rodillos. EPP según el área: gafas, protección auditiva, guantes de corte en cuchillas.
## Siempre
Ante duda, parar y llamar al supervisor.`},
{id:'man-01', cat:'Mantenimiento', titulo:'Mantenimiento preventivo y limpieza de componentes críticos', ref:'Referencia general de la industria', url:'https://www.flexography.org',
texto:`## Rodillo anilox
Limpiar al finalizar cada orden con solución adecuada o ultrasonido; evitar cepillos metálicos. Medir volumen de celda periódicamente y registrar el desgaste.
## Cuchilla rasqueta (doctor blade)
Cambiar en cada orden o cuando haya líneas o manchas. Verificar presión y ángulo (típico 30°–35° cámara).
## Mordazas de sellado
Revisar teflón/cinta en cada turno, limpiar residuos con paño suave (sin objetos duros), medir temperatura con pirómetro y verificar paralelismo.
## Dado de extrusión
Limpieza programada con herramientas de cobre/latón y compuesto de purga. Revisar labio y calibre.
## Husillo y mallas
Cambio de mallas según presión de cabezal; revisar zonas de calentamiento.
## Rodamientos y engranajes
Lubricación según plan (grasa/aceite correcto y cantidad). Escuchar ruidos y medir temperatura.
## Registro
Hoja de mantenimiento con fecha, quién, qué se hizo y repuestos utilizados. Reportar anomalías inmediatamente.`},
{id:'dia-01', cat:'Diagnóstico', titulo:'Guía de diagnóstico: el sello queda abierto', ref:'Referencia general de la industria (árbol de decisión)', url:'',
texto:`## Paso 1 · Observa el tipo de falla
¿El sello se abre fácilmente a mano? → pasar a paso 2. ¿Se ve quemado o arrugado? → bajar temperatura/tiempo y revisar arrugas previas. ¿Se abre solo en una zona? → falta de paralelismo o mordaza dañada.
## Paso 2 · Temperatura
Medir con pirómetro la temperatura real de las mordazas. Si está más de 10 °C por debajo del valor de receta, revisar resistencia y termocupla. Subir de 5 °C en 5 °C.
## Paso 3 · Contaminación
Revisar si hay polvo, producto, grasa o antideslizante migrado en la zona de sello; limpiar mordazas y película.
## Paso 4 · Presión y teflón
Revisar presión (verificar con papel sensible) y estado del teflón; cambiar si está rayado o con residuos.
## Paso 5 · Material
Si todo está bien: revisar la película (capa sellante, tratamiento, lote). Pedir la ficha del material y separar el lote.
## Paso 6 · Escalar
Si el sello sigue abierto, detener producción, aislar producto de las últimas horas y llamar a Calidad.`},
{id:'res-01', cat:'Materiales', titulo:'Resinas de polietileno y polipropileno: índice de fluidez, mezclas y humedad', ref:'Referencia general de la industria', url:'https://www.plasticstoday.com',
texto:`## Índice de fluidez (MFI)
Indica qué tan fluido es el polímero fundido (g/10 min). Resinas de soplado: MFI bajo (0,3–2); de colada/inyección: más alto. Mezclar resinas con MFI muy distinto da geles y mala homogeneidad.
## Tipos
LDPE: transparencia y buen sello. LLDPE/mLLDPE: resistencia mecánica y sellado en frío. HDPE: rigidez y barrera a vapor. PP: temperatura de sellado alta y brillo.
## Reproceso y contaminación
Reprocesar recortes en porcentaje controlado (típico ≤ 20 %), sin mezclar resinas incompatibles. Contaminación cruzada genera puntos y geles.
## Humedad
PE y PP absorben poca humedad, pero PA, PET y EVOH requieren secado previo. Humedad genera burbujas, espuma y baja resistencia.
## Almacenamiento
Bajo techo, en bolsas cerradas, sin polvo. Identificar lote y fecha.
## Aditivos
Antibloqueo, deslizante, antioxidante, antiestático y masterbatch de color; dosificar según receta y registrar.`},
{id:'cor-02', cat:'Corte', titulo:'Corte y rebobinado (slitting): telescopado, bordes y tensión', ref:'Referencia general de la industria', url:'https://www.flexpack.org',
texto:`## Telescopado de la bobina
Se desplaza el centro de la bobina. Causas: tensión alta o variable, núcleo desalineado, mal control de bobinado. Ajustar tensión decreciente (taper) y verificar el mandril.
## Bordes ondulados o con "campana"
Película con tensión despareja o cuchillas desgastadas. Revisar el filo, la posición y la presión de las cuchillas.
## Arrugas
Rodillos desalineados o mala presión del rodillo de contacto. Alinear y limpiar.
## Polvo y partículas
Cuchilla de corte genera polvo: aspirar y limpiar para no contaminar la capa sellante.
## Empalmes
Marcar con cinta visible; documentar posición en el reporte.
## Inspección
Verificar ancho, diámetro, calidad de bordes y etiqueta con lote.`},
{id:'prd-01', cat:'Producto', titulo:'Ficha de producto EJEMPLO: funda impresa 4 tintas para producto de consumo', ref:'EJEMPLO ficticio, no es una especificación de Alico', url:'',
texto:`## Descripción
Funda impresa en flexografía 4 + 1 tintas sobre estructura laminada PET 12 µm / PE 60 µm. Uso en producto seco, formato 180 × 260 mm, con sello de 3 lados.
## Parámetros de referencia (EJEMPLO)
- Temperatura de sello: 150–170 °C. Tiempo: 0,8–1,2 s. Presión: 3–4 bar.
- Resistencia de sello objetivo: ≥ 20 N/15 mm (ASTM F88).
- Fuerza de unión: ≥ 1,5 N/15 mm (F904).
- COF dinámico: 0,20–0,35.
- Tratamiento corona: ≥ 38 dinas.
## Tolerancias
Espesor total ±10 %. Registro de color ±0,3 mm. Ancho de sello 8 ± 1 mm.
## Condiciones de almacenamiento
15–30 °C, humedad relativa < 70 %, lejos de la luz solar. Vida útil: 12 meses desde fabricación.
## Observaciones
Estos valores son un ejemplo para la demostración. Cargar las fichas reales de Alico para uso productivo.`},
{id:'glo-01', cat:'Glosario', titulo:'Glosario técnico del empaque flexible', ref:'Referencia general de la industria', url:'',
texto:`## Términos
- Anilox: rodillo con celdas que dosifica la tinta en flexografía.
- BUR: relación de soplado, diámetro de la burbuja entre diámetro del dado.
- COF: coeficiente de fricción entre superficies de película.
- Corona: tratamiento eléctrico que aumenta la energía superficial.
- Dinas: unidad de energía superficial de la película.
- Doctor blade: cuchilla que raspa el exceso de tinta del anilox.
- EVOH: etileno-vinil alcohol, barrera a oxígeno.
- Lámina sellante: capa interna que se funde y une el empaque.
- MD / TD: dirección máquina / dirección transversal.
- MFI: índice de fluidez.
- OTR / WVTR: transmisión de oxígeno / de vapor de agua.
- Slitting: corte longitudinal de bobinas.
- Termoencogible: película que se contrae con calor.
- Dwell time: tiempo de contacto de las mordazas.`}
];

/* Árbol de diagnóstico guiado (EJEMPLO). Cada nodo: pregunta + opciones → siguiente nodo o causa final con documentos de referencia. */
window.DIAG = {
  sello: { t: 'El sello queda abierto o débil', ico: '🔥', q: '¿Cómo falla el sello?', o: [
    { l: 'Se abre fácil, sin marca de calor', n: 'sello_a' },
    { l: 'Se ve quemado, arrugado o con canales', f: { c: 'Exceso de temperatura/tiempo o arrugas previas al sello', a: ['Bajar temperatura 5–10 °C', 'Reducir tiempo de contacto', 'Revisar guiado y arrugas antes de la mordaza'], d: ['sel-01'] } },
    { l: 'Solo se abre en una zona', f: { c: 'Mordaza sin paralelismo, teflón dañado o presión despareja', a: ['Verificar paralelismo con papel sensible a presión', 'Cambiar teflón', 'Limpiar la mordaza'], d: ['sel-01', 'man-01'] } }] },
  sello_a: { q: '¿La temperatura real de la mordaza (con pirómetro) coincide con la receta?', o: [
    { l: 'No, está más baja', f: { c: 'Resistencia o termocupla con falla, o temperatura mal ajustada', a: ['Subir 5 °C a la vez y probar', 'Revisar resistencia y termocupla', 'Registrar el cambio en la bitácora'], d: ['sel-01', 'dia-01'] } },
    { l: 'Sí, es la correcta', n: 'sello_b' }] },
  sello_b: { q: '¿Hay polvo, producto, grasa o residuos en la zona de sello?', o: [
    { l: 'Sí', f: { c: 'Contaminación en el sello', a: ['Limpiar mordazas y película', 'Revisar dosificación o fuga de producto', 'Verificar migración de deslizante'], d: ['sel-01', 'man-01'] } },
    { l: 'No', f: { c: 'Posible problema de material (capa sellante, tratamiento) o presión insuficiente', a: ['Medir presión', 'Separar el lote y pedir ficha del material', 'Llamar a Calidad'], d: ['sel-01', 'dia-01', 'qa-01'] } }] },
  tinta: { t: 'Manchas o fallas de impresión', ico: '🎨', q: '¿Qué se observa en la impresión?', o: [
    { l: 'Manchas o suciedad de tinta', f: { c: 'Cuchilla desgastada, anilox sucio o viscosidad baja', a: ['Cambiar la cuchilla rasqueta', 'Limpiar el anilox', 'Revisar viscosidad y presión de impresión'], d: ['flx-01', 'man-01'] } },
    { l: 'Zonas sin imprimir o débiles', n: 'tinta_a' },
    { l: 'La tinta se despega', f: { c: 'Tratamiento corona insuficiente o tinta/solvente inadecuado', a: ['Medir dinas (≥ 38)', 'Revisar secado', 'Hacer prueba de cinta'], d: ['cor-01', 'flx-01', 'qa-01'] } },
    { l: 'Colores desalineados', f: { c: 'Tensión variable o cliché mal montado', a: ['Estabilizar tensión', 'Verificar montaje del cliché', 'Revisar holguras de engranaje'], d: ['flx-01'] } }] },
  tinta_a: { q: '¿Es en toda la película o solo en un tramo?', o: [
    { l: 'Solo en un tramo o franja', f: { c: 'Celdas del anilox obstruidas o cuchilla con presión despareja', a: ['Limpiar anilox con ultrasonido', 'Ajustar presión de la cuchilla', 'Revisar cliché'], d: ['flx-01', 'man-01'] } },
    { l: 'En toda la película', f: { c: 'Tratamiento corona bajo o tinta con viscosidad inadecuada', a: ['Medir dinas', 'Revisar tinta', 'Ajustar presión'], d: ['cor-01', 'flx-01'] } }] },
  delam: { t: 'Delaminación o burbujas en laminado', ico: '🧻', q: '¿Cuándo se presenta?', o: [
    { l: 'Las capas se separan fácil', n: 'delam_a' },
    { l: 'Burbujas o túneles', f: { c: 'Tensión diferente entre capas o aire atrapado', a: ['Igualar tensiones', 'Reducir velocidad', 'Revisar presión del nip'], d: ['lam-01'] } },
    { l: 'Olor fuerte', f: { c: 'Solvente residual o curado incompleto', a: ['Subir temperatura/secado dentro del límite', 'Respetar tiempo de curado'], d: ['lam-01'] } }] },
  delam_a: { q: '¿Se curó la bobina el tiempo recomendado?', o: [
    { l: 'No', f: { c: 'Curado incompleto', a: ['Esperar el curado (24–72 h según sistema)', 'Repetir prueba de unión (T-peel)'], d: ['lam-01', 'qa-01'] } },
    { l: 'Sí', f: { c: 'Gramaje, mezcla o superficie contaminada', a: ['Verificar gramaje y relación de mezcla', 'Medir corona', 'Revisar migración de deslizante'], d: ['lam-01', 'cor-01'] } }] },
  espesor: { t: 'Espesor irregular en película', ico: '📏', q: '¿Cómo se manifiesta?', o: [
    { l: 'Franjas gruesas y delgadas', f: { c: 'Labio del dado, anillo de aire o temperatura despareja', a: ['Centrar y limpiar el labio', 'Verificar anillo de aire', 'Ajustar tornillos de calibre'], d: ['ext-01'] } },
    { l: 'Burbuja inestable que respira', f: { c: 'Flujo de aire irregular o corrientes externas', a: ['Revisar filtros y compuertas del anillo', 'Instalar estabilizador de burbuja', 'Eliminar corrientes en la nave'], d: ['ext-01'] } },
    { l: 'Puntos o geles', f: { c: 'Contaminación o degradación del polímero', a: ['Purgar con compuesto', 'Revisar mallas y temperaturas', 'Verificar compatibilidad de resinas'], d: ['ext-01', 'res-01'] } }] }
};
