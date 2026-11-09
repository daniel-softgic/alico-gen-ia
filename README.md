# GEN IA Alico · Bienvenidos a la Era de la Inteligencia Artificial

Portada animada de la planta + 5 casos funcionales conectados entre sí. Sitio 100 % estático: se abre desde cualquier navegador con internet (Chrome o Edge para voz y cámara).

| # | Caso | Qué muestra en vivo | Se alimenta de |
|---|------|---------------------|----------------|
| 1 | Inspección visual con IA | La cámara encierra cada pieza: círculo verde = pasa y se registra; círculo rojo = se retira con informe (línea, lote, producto real, OP, operario, máquina, turno, causa 6M). Pestaña de informes de calidad. | Producción, Calidad, operarios |
| 2 | Maestro · asistente de planta | El operario habla o toca el problema. Panel de la planta con 2 años de historia. | Operarios, Mantenimiento, Producción |
| 3 | Agente de conocimiento técnico | Escalera de 4 niveles: base de Alico → fuentes confiables (búsqueda web con citas) → especialista (fabricante, proveedor, laboratorio) → aprende. | Ingeniería, Calidad, Mantenimiento, Compras, visión artificial |
| 4 | Centro de inteligencia del cliente | QR para que los participantes reporten casos reales desde el celular; triage con IA; Epicor simulado; aviso preventivo cuando la planta detecta un lote con defectos. | Clientes, Comercial, Epicor, Logística |
| 5 | Torre de control de negocios | Diagnóstico de 9 áreas en 10 segundos, selector de tipo de gráfico, productos reales de alicoempaques.com, pregúntale a tus datos por voz. | Epicor, Finanzas, Logística, Compras, Comercial + casos 1, 2 y 4 |

**Cómo se conectan:** un rechazo en el caso 1 aparece al instante en la Torre (Producción y calidad), puede enviarse como lección al caso 3 y genera un aviso preventivo en el caso 4. Funciona entre pestañas del mismo navegador y, con la nube conectada, entre equipos.

## Publicar (ver MANUAL.md, sección 1)
GitHub Pages: sube **todo el contenido de esta carpeta** a un repositorio público → Settings → Pages → Branch `main` / root. El QR del caso 4 solo funciona desde el enlace https publicado.

## Datos
- **Reales:** productos y precios de lista del catálogo de alicoempaques.com (`shared/catalogo.js`, consultado el 8-nov-2026).
- **EJEMPLO:** clientes, volúmenes, ventas, operarios, historial de inspección y de planta, base técnica inicial. Todo marcado en pantalla.
- **Simulado:** Epicor, CRM, WhatsApp/B2Chat.
