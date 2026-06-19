# MDM Web
---

## Tecnologías

| Herramienta | Versión | Uso |
|---|---|---|
| [React](https://react.dev) | 19 | Framework UI |
| [TypeScript](https://www.typescriptlang.org) | 5.8 | Tipado estático |
| [Vite](https://vitejs.dev) | 7 | Bundler y dev server |
| [Tailwind CSS](https://tailwindcss.com) | 4 | Estilos utilitarios |
| [React Router DOM](https://reactrouter.com) | 7 | Enrutamiento SPA |
| [GSAP](https://gsap.com) | 3.13 | Animaciones |
| [react-i18next](https://react.i18next.com) | 15 | Internacionalización (i18n) |
| [react-masonry-css](https://github.com/paulcollett/react-masonry-css) | 1 | Galerías tipo masonry |
| [Mammoth](https://github.com/mwilliamson/mammoth.js) | 1.11 | Renderizado de documentos .docx |
| [Lucide React](https://lucide.dev) | — | Iconografía |

---

## Características

- Navegación multipágina con React Router DOM
- Multiidioma **ES / DE** con detección automática del navegador vía `i18next-browser-languagedetector`
- Galerías de proyectos con layout masonry adaptativo
- Animaciones de entrada y scroll con GSAP
- Renderizado de documentos Word (.docx) en el navegador mediante Mammoth
- SEO configurado con meta tags Open Graph, Twitter Card y hreflang `es_ES` / `de_DE`
- `robots.txt` incluido para control de indexación
- Despliegue continuo en Vercel desde la rama `master`

---

## Instalación local

Requisitos previos: **Node.js 18+** y **npm**.

```bash
# 1. Clonar el repositorio
git clone https://github.com/TAMDGroup25/MDM-web.git
cd MDM-web

# 2. Instalar dependencias
npm install

# 3. Arrancar el servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`.

---

## Scripts disponibles

```bash
npm run dev       # Servidor de desarrollo con HMR
npm run build     # Compilación de producción (tsc + vite build)
npm run preview   # Previsualización del build de producción
npm run lint      # Análisis estático con ESLint
```

---

## Estructura del proyecto

```
MDM-web/
├── public/             # Assets estáticos (logo, og-image, robots.txt…)
├── src/
│   ├── assets/         # Recursos importados en el código
│   ├── components/     # Componentes React reutilizables
│   ├── pages/          # Vistas / rutas de la aplicación
│   ├── locales/        # Archivos de traducción (es, de)
│   ├── App.tsx         # Componente raíz con configuración de rutas
│   └── main.tsx        # Punto de entrada
├── robots.txt
├── index.html
├── vite.config.ts
└── tsconfig.json
```

---

## Despliegue

Para desplegar el build manualmente:

```bash
npm run build
# El contenido de /dist está listo para subir a cualquier hosting estático
```

---

## Sobre MDM

**MDM — Management Mallorca** ofrece servicios profesionales de gestión integral de proyectos en toda la isla:

- 🏛️ Arquitectura y diseño
- 🏗️ Dirección de obra y ejecución
- 🔨 Reformas integrales
- 🛋️ Interiorismo y decoración

Con enfoque personalizado desde la planificación inicial hasta la entrega final del proyecto.

---

## Licencia

Proyecto privado — © TAMDGroup25. Todos los derechos reservados.
