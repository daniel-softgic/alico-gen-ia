/* Repositorio técnico de EJEMPLO, ampliado (nov-2026). Se SUMA a kb.js; no reemplaza nada.
   Instructivos, fichas y casos resueltos ilustrativos, orientados a los productos reales del catálogo de Alico.
   Los valores son referencia general de la industria: deben validarse con Calidad e Ingeniería de Alico. */
window.KB = (window.KB || []).concat([
{id:'ins-sello', cat:'Instructivos', titulo:'Instructivo EJEMPLO IC-07: resistencia de sello (ASTM F88) y criterios de aceptación', ref:'Instructivo de Calidad · EJEMPLO', url:'https://www.astm.org/f0088_f0088m-21.html',
texto:`## Para qué sirve
Define cómo medir la resistencia del sello y qué valor se exige por familia de producto. Aplica a bolsas QUADSEAL, Flex Up (doypack), bolsas de vacío y tapas termoselladas.
## Cómo se mide (ASTM F88)
Cortar 5 probetas de 15 mm (o 25,4 mm) de ancho perpendiculares al sello. Acondicionar 40 min a 23 °C. Separar en dinamómetro a 300 mm/min con mordazas a 10 mm del sello. Registrar la fuerza máxima y el tipo de falla (pelable, rotura de película, delaminación).
## Valores de aceptación (EJEMPLO por familia)
Bolsa QUADSEAL y cuatro selles para café 250 g – 1 kg: ≥ 25 N/15 mm en sellos laterales y ≥ 20 N/15 mm en el fondo.
Bolsa Flex Up con zipper: ≥ 20 N/15 mm; zona del zipper ≥ 12 N/15 mm.
Bolsas de vacío y Termoflex para carnes: ≥ 30 N/15 mm (el vacío exige sello sin canales).
Sello pelable de tapas termoformadas (Línea Nativa, AL-xx): 6–12 N/15 mm, abre limpio y sin hilos.
## Frecuencia
Al arrancar la orden, en cada cambio de bobina y cada 2 horas. Si una probeta queda por debajo, retener la producción desde la última medición buena.
## Integridad del empaque
Complementar con ensayo de burbuja (ASTM D3078) para bolsas de vacío y con prueba de estallido (ASTM F2054) en bolsas con válvula.`},
{id:'ins-delam', cat:'Instructivos', titulo:'Delaminación después del curado: pruebas y árbol de causas', ref:'Guía técnica de laminación · EJEMPLO', url:'https://www.aimcal.org',
texto:`## Primero, confirmar el curado
Los adhesivos sin solvente de poliuretano necesitan entre 24 y 72 horas según el sistema y la temperatura de la sala (ideal 25–35 °C). Si la bobina se convirtió antes, la delaminación es casi siempre por curado incompleto.
## Pruebas que se hacen
Fuerza de laminación T-peel (ASTM F904) a 100 mm/min: referencia ≥ 1,5 N/15 mm para estructuras de snacks y ≥ 2,5 N/15 mm para café y retortables.
Identificar en qué cara queda el adhesivo: si queda en la tinta, falla de adhesión de tinta; si queda en la película, falla de tratamiento.
Medir dinas de la película base antes de laminar (≥ 38 en PE) y revisar migración de deslizante (erucamida) en el PE.
Prueba de aminas aromáticas primarias (PAA) para confirmar curado en empaques de alimentos.
## Árbol de causas
Curado incompleto · relación de mezcla fuera de rango (revisar dosificador) · gramaje bajo (< 1,6 g/m²) · humedad ambiental alta · tinta no compatible con el adhesivo · tratamiento corona decaído.
## Acción
Retener el lote, medir T-peel a 24, 48 y 72 h, y documentar el resultado en el caso para que entre a la base.`},
{id:'ins-dinas', cat:'Instructivos', titulo:'Instructivo EJEMPLO IC-11: medir dinas antes de imprimir (ASTM D2578)', ref:'Instructivo de Calidad · EJEMPLO', url:'https://www.astm.org/d2578-17.html',
texto:`## Valor requerido
Tintas base solvente sobre PE: mínimo 38 dinas/cm; recomendado 40–42. Tintas base agua: mínimo 42–44. PP orientado (BOPP): 38–40. PET: 44 o más.
## Cómo se verifica
Usar marcadores o soluciones de prueba vigentes (vencen en 6 meses). Trazar una línea sobre la cara tratada: si la línea se mantiene continua 2 segundos, la película tiene al menos ese valor. Probar el valor siguiente hasta que la línea se rompa en gotas.
## Cuándo medir
Al recibir cada bobina, al montar la orden y si la película estuvo almacenada más de 30 días: el tratamiento decae con el tiempo y con el calor.
## Si no cumple
Volver a tratar en línea (tratador corona de la impresora), revisar el estado de los electrodos y aislar las bobinas viejas. Registrar el valor en la orden de producción.`},
{id:'ins-geles', cat:'Extrusión', titulo:'Geles en película: cómo distinguir contaminación de degradación', ref:'Guía técnica de extrusión · EJEMPLO', url:'https://www.icipc.org',
texto:`## Observar el gel
Contaminación: geles con un núcleo o punto distinto (color, fibra, partícula), aparecen de golpe con un lote de resina o un cambio de material.
Degradación: geles ámbar o con halo, aumentan con el tiempo de residencia, después de paradas largas o con temperaturas altas en el dado.
No fundido: geles transparentes, duros, de alto peso molecular; aparecen al mezclar grados con índice de fluidez muy distinto.
## Pruebas
Placa caliente a 200–220 °C: el gel no fundido se funde y desaparece; la contaminación no. Microscopio con luz polarizada. FTIR en laboratorio (ICIPC u otro) para identificar el polímero extraño.
## Acciones
Contaminación: separar el lote de resina, revisar tolvas y secadores, cambiar malla. Degradación: purgar, limpiar dado, bajar perfil de temperatura y evitar paradas con material en el cilindro. No fundido: subir contrapresión o cambiar malla más fina.`},
{id:'ins-cafe', cat:'Barrera', titulo:'Estructuras barrera para café con válvula desgasificadora', ref:'Guía de desarrollo de producto · EJEMPLO', url:'https://www.astm.org/d3985-17.html',
texto:`## Qué necesita el café
El café tostado libera CO₂ por días y se oxida con el oxígeno. Necesita barrera alta a oxígeno y a humedad, y una válvula unidireccional que deje salir el gas sin dejar entrar aire.
## Estructuras recomendadas (EJEMPLO)
Máxima vida útil (6–12 meses): PET 12 µm / Aluminio 7–9 µm / PE 80–100 µm. OTR < 0,1 cc/m²·día.
Barrera alta sin aluminio: PET metalizado 12 µm / PE 80 µm. OTR 0,5–1,5 cc/m²·día.
Línea papel (imagen artesanal): Kraft / PET metalizado / PE. Ideal para Bolsa QUADSEAL Papel Kraft y Bolsa Flex Up Papel.
Reciclable mono-material: PE/PE con capa EVOH (RECIPLUS).
## Válvula y formato
Válvula de 15 a 28 mm según formato, a 1/3 de la parte superior. En la tienda de Alico: Bolsa QUADSEAL (250 g, 500 g, 1 kg) y Bolsa Flex Up con zipper y válvula.
## Ensayos
OTR (ASTM D3985), WVTR (ASTM F1249), prueba de válvula (presión de apertura 1–4 mbar) y hermeticidad del sello (IC-07).`},
{id:'ins-termo', cat:'Termoformado', titulo:'Paredes delgadas en bandejas y contenedores termoformados (Línea Nativa, AL-xx)', ref:'Guía técnica de termoformado · EJEMPLO', url:'https://www.thermoformingdivision.com',
texto:`## Primero, mirar dónde adelgaza
Esquinas y fondo delgados con bordes gruesos: relación de estirado alta para la lámina o calentamiento desigual.
Un solo lado delgado: zona de resistencias apagada o descalibrada, o lámina con calibre variable.
## Qué ajustar, en orden
1. Perfil de calentamiento: subir 5–10 % las zonas centrales; temperatura de formado de PP 155–165 °C y de PET 120–140 °C (medir con pirómetro).
2. Asistente mecánico (plug assist): bajar la velocidad o cambiar a material de menor fricción para llevar más material al fondo.
3. Vacío: confirmar −0,8 bar o mejor y que los orificios del molde no estén obstruidos.
4. Lámina: medir calibre en 5 puntos; variación máxima ±5 %.
## Control
Medir espesor en 8 puntos de la pieza (esquinas, fondo, paredes) al arrancar y cada 2 horas. Pieza mínima aceptable: 60 % del calibre de la lámina en esquinas (EJEMPLO).`},
{id:'loto-sc03', cat:'Seguridad', titulo:'Procedimiento EJEMPLO LOTO-SC03: bloqueo de la selladora-cortadora SC-03', ref:'Procedimiento de seguridad · EJEMPLO', url:'https://www.osha.gov/control-hazardous-energy',
texto:`## Antes de intervenir
Avisar al líder de turno y a los operarios de la zona. Usar guantes térmicos: las mordazas pueden estar a más de 180 °C.
## Pasos de bloqueo
1. Parar la máquina desde el panel y esperar a que el rodillo de arrastre se detenga.
2. Apagar el interruptor principal (gabinete eléctrico) y poner candado personal y tarjeta con nombre y fecha.
3. Cerrar la válvula neumática principal y purgar el aire del sistema (manómetro en cero).
4. Bloquear la cuchilla de corte en posición abierta con el seguro mecánico.
5. Verificar energía cero: intentar arrancar desde el panel; nada debe moverse.
## Al terminar
Retirar herramientas, reinstalar guardas, avisar a todos y retirar el candado solo la persona que lo puso.
## Nunca
Meter las manos con la máquina en modo manual, puentear sensores de guarda ni limpiar mordazas calientes sin guantes.`},
{id:'fic-nativa', cat:'Fichas de producto', titulo:'Ficha EJEMPLO: Contenedor Línea Nativa y tapa termoformada', ref:'Ficha técnica EJEMPLO · producto real del catálogo (TZ00562 / TZ00570)', url:'https://alicoempaques.com/collections/linea-nativa',
texto:`## Producto
Contenedor Línea Nativa (TZ00562), 750 ml (TZ00564), 1000 ml (TZ00565), con 2 y 3 divisiones; Tapa Plana Termoformada (TZ00570). Paquete de 50 unidades.
## Material y uso (EJEMPLO, validar)
Polipropileno termoformado apto para contacto con alimentos. Uso típico: domicilios y comidas preparadas. Rango de uso de referencia: −10 a 100 °C.
## Controles de calidad
Espesor mínimo en esquinas, ajuste tapa-base (cierre sin forzar y sin abrirse al voltear), ausencia de fisuras y de rebaba en el borde, apilabilidad.
## Defectos típicos y dónde mirar
Pared delgada → perfil de calentamiento. Tapa que no cierra → enfriamiento corto o molde desalineado. Esquina blanca → lámina fría. Ver «Paredes delgadas en bandejas y contenedores termoformados».`},
{id:'fic-quadseal', cat:'Fichas de producto', titulo:'Ficha EJEMPLO: Bolsa QUADSEAL para café (250 g, 500 g, 1 kg)', ref:'Ficha técnica EJEMPLO · producto real del catálogo (MUZ00221 y familia)', url:'https://alicoempaques.com/products/bolsa-quadseal-negra-mate',
texto:`## Producto
Bolsa QUADSEAL (cuatro selles) en negro, blanco, azul, rojo y papel kraft. Medidas de la tienda: 250 g (13 × 20 cm), 500 g (13,5 × 26 cm), 1.000 g (15 × 32,5 cm). Paquete de 50.
## Estructura típica (EJEMPLO)
PET mate 12 µm / PET metalizado 12 µm / PE 70–90 µm, con opción de válvula desgasificadora.
## Controles de calidad
Resistencia de sello según IC-07 (≥ 25 N/15 mm laterales), ubicación de la válvula, registro de impresión ±0,5 mm, ausencia de arrugas en los cuatro selles verticales.
## Reclamos típicos
Sello abierto en el fondo, válvula mal ubicada y arrugas en las esquinas. Ver «Guía de diagnóstico: el sello queda abierto».`},
{id:'cr-01', cat:'Casos resueltos', titulo:'Caso resuelto EJEMPLO: sello débil en Bolsa QUADSEAL por teflón de mordaza gastado', ref:'Escrito por Mantenimiento (ticket T-EJ101) · EJEMPLO',
texto:`## Síntoma
En Conversión y sellado 3, turno C, la resistencia del sello bajó a 14 N/15 mm en el lado operador. Visión artificial retiró 38 bolsas en una noche.
## Causa confirmada
El teflón de la mordaza izquierda tenía 1.900 horas (vida útil de referencia 1.500 h) y presentaba un desgaste que bajaba 12 °C la temperatura real.
## Solución
Cambio de teflón, verificación con termopar de contacto y nueva medición: 28 N/15 mm. Se incluyó el cambio de teflón cada 1.400 horas en el plan preventivo.
## Lección
Si la falla es de un solo lado de la mordaza, revisar primero teflón y resistencia de ese lado antes de subir la temperatura general.`},
{id:'cr-02', cat:'Casos resueltos', titulo:'Caso resuelto EJEMPLO: delaminación en Flex Up en temporada de lluvias', ref:'Escrito por Ingeniería de procesos (ticket T-EJ102) · EJEMPLO',
texto:`## Síntoma
Bolsa Flex Up Negra Mate con delaminación en la zona del zipper al abrir. Reclamo de un cliente de snacks.
## Causa confirmada
La sala de curado estuvo a 19 °C y 85 % de humedad durante una semana de lluvias. Las bobinas salieron a conversión a las 24 h con T-peel de 0,8 N/15 mm.
## Solución
Se fijó curado mínimo de 48 h con sala a 30 °C y se liberan bobinas solo con T-peel ≥ 1,5 N/15 mm. El proveedor de adhesivo validó la ventana de curado.
## Lección
En temporada de lluvias, el tiempo de curado no es fijo: se libera por medición, no por calendario.`},
{id:'cr-03', cat:'Casos resueltos', titulo:'Caso resuelto EJEMPLO: fisuras en tapas termoformadas al arrancar el turno', ref:'Escrito por Producción (ticket T-EJ103) · EJEMPLO',
texto:`## Síntoma
Esquinas blancas y fisuras en las primeras 300 tapas de cada arranque en Termoformado 1.
## Causa confirmada
El molde arrancaba frío (18 °C) y la lámina llegaba con temperatura por debajo de lo necesario en las esquinas.
## Solución
Precalentar el molde a 35–40 °C con el termorregulador 20 minutos antes del arranque y descartar las primeras 30 piezas.
## Lección
Los defectos que solo aparecen al arrancar casi siempre son térmicos: molde, lámina o ambiente.`}
]);
