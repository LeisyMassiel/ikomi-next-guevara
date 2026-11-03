
# BITÁCORA DE INTELIGENCIA ARTIFICIAL
## Proyecto: IKOMI Perú

### Entrada 1: Configuración inicial de Next.js

**Objetivo:** Crear correctamente un proyecto Next.js utilizando App Router y las tecnologías solicitadas.

**Prompt utilizado:**
"Necesito desarrollar una evaluación de Next.js siguiendo todos los requisitos de la rúbrica. Ayúdame a crear y configurar el proyecto paso a paso."

**Resumen de la respuesta:**
La IA recomendó utilizar TypeScript, Tailwind CSS, ESLint y App Router, manteniendo la estructura sin carpeta src/.

**Decisión tomada:** Aceptado.

**Justificación:**
Elegí esta configuración porque permite organizar las páginas del sitio corporativo y desarrollar una interfaz responsive. Además, TypeScript facilita el manejo de los datos de los productos.

### Entrada 2: Documentación de decisiones técnicas

**Objetivo:** Comprender y justificar las tecnologías seleccionadas para IKOMI Perú.

**Prompt utilizado:**
"Continuemos con la evaluación y preparemos DECISIONES.md siguiendo los requisitos del criterio 1."

**Resumen de la respuesta:**
La IA propuso una tabla comparativa de tecnologías y explicaciones sobre App Router, los archivos principales y las ventajas de Next.js.

**Decisión tomada:** Modificado.

**Justificación:**
Utilicé la propuesta como base y revisaré las explicaciones para relacionarlas con las necesidades específicas del proyecto IKOMI Perú.


### Entrada 3: Corrección de un error en el Footer

**Objetivo:** Corregir un problema de prerenderizado en Next.js.

**Prompt utilizado:**
"Estoy desarrollando IKOMI Perú y Next.js muestra
dos problemas en Footer.tsx relacionados con new Date()."

**Resumen de la respuesta:**
La IA identificó que new Date() generaba un valor
inestable durante el prerenderizado y propuso utilizar
un año fijo para este proyecto académico.

**Decisión tomada:** Modificado.

**Código anterior:**
`© {new Date().getFullYear()} IKOMI Perú.`

**Código corregido:**
`© 2026 IKOMI Perú.`

**Justificación:**
La propuesta inicial de IA no consideró que Next.js
puede restringir el uso de valores dinámicos durante
el prerenderizado. Elegí un año fijo porque el Footer
no necesita actualizar la fecha en tiempo real.

**Resultado:** Pendiente de verificar después de
ejecutar npm run build.


---

## Próximas entradas

Se registrarán las interacciones relacionadas con:
- Implementación de rutas y productos dinámicos.
- Construcción de componentes reutilizables.
- Navegación responsive.
- Detección y corrección de dos propuestas inadecuadas de IA.
- Pruebas y optimización del proyecto.
