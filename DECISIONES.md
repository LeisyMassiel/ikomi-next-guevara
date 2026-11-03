
# Decisiones técnicas – IKOMI Perú

## 1. Configuración del proyecto

| Opción elegida | Alternativa descartada | Justificación |
|---|---|---|
| TypeScript | JavaScript | Elegí TypeScript porque permite definir tipos para los productos, sus precios, categorías y descripciones. Esto ayuda a evitar errores al mostrar la información del catálogo de IKOMI. |
| Tailwind CSS | CSS tradicional | Elegí Tailwind porque facilita la creación de diseños responsive mediante clases reutilizables. Esto permite adaptar la página de IKOMI a celulares, tabletas y computadoras manteniendo un estilo consistente. |
| Sin carpeta src/ | Usar carpeta src/ | Decidí mantener app/ y las demás carpetas en la raíz porque el proyecto tiene una estructura relativamente pequeña. Así puedo identificar rápidamente las páginas, componentes y archivos de datos. |
| App Router | Pages Router | Elegí App Router porque permite organizar las páginas mediante carpetas y utilizar layouts compartidos. En IKOMI esto resulta útil para mantener el Navbar y Footer en todas las páginas sin repetir código. |
| ESLint | No utilizar linter | Elegí ESLint porque ayuda a detectar problemas de calidad en el código y mantener convenciones consistentes. Esto facilita revisar los componentes de IKOMI durante el desarrollo. |
| Sin React Compiler | Activar React Compiler | Decidí no activarlo inicialmente porque el sitio corporativo tendrá principalmente contenido informativo y componentes sencillos. Prefiero evaluar primero su funcionamiento antes de incorporar optimizaciones adicionales. |

## 2. Estructura de Next.js

### app/layout.tsx
Es el diseño principal que comparten todas las páginas. En IKOMI lo utilizaremos para colocar el Navbar, Footer y la configuración general del sitio.

### app/page.tsx
Representa la página principal del sitio. Aquí mostraremos la presentación de IKOMI, su catálogo destacado y los accesos a las demás secciones.

### public/
Almacena archivos estáticos como imágenes y logotipos. Guardaremos aquí los recursos visuales utilizados en el sitio.

### next.config.ts
Permite establecer configuraciones generales de Next.js según las necesidades del proyecto.

### npm run dev
Inicia el servidor de desarrollo para visualizar los cambios mientras programamos.

### npm run build
Genera la compilación de producción y permite comprobar si el proyecto puede prepararse para su despliegue.

### npm run start
Inicia el servidor utilizando una compilación de producción previamente generada.

## 3. Ventajas de Next.js frente a React con Vite

Next.js permite generar contenido HTML desde el servidor, lo que ayuda a que los buscadores encuentren información de las páginas. Esto es importante para IKOMI, porque sus clientes podrían buscar repuestos automotrices en Google.

Por ejemplo, la página de detalle de un producto puede incluir un título y una descripción específicos en sus metadatos. Así, los buscadores pueden identificar mejor el contenido del producto.

Además, Next.js proporciona herramientas de optimización de imágenes, fuentes y navegación que contribuyen al rendimiento del sitio.
