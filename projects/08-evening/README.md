🌇 Pre-evening
==========

La Velada IV es una competición de boxeo que enfrenta a streamers, creadores de contenido y otras celebridades sobre un ring.

![Captura de pantalla en móvil](https://res.cloudinary.com/dx8j6h1rb/image/upload/v1709408899/propuesta-midudev/Mobile_README_2_iawlyo.png)

![Captura de pantalla en ordenador](https://res.cloudinary.com/dx8j6h1rb/image/upload/v1709411123/propuesta-midudev/Desktop_web_vxfkfr.png)

El contenido de este proyecto es de aprendizaje siguiendo las exposiciones presentadas por midudev en esta [lista de reproducción](https://www.youtube.com/watch?v=BVnhDlbhPvs&list=PLUofhDIg_38rXS6QJDOQky5sYU-hQKwRv)

🧰 Tool Kit
-----------

La siguiente lista recopila las tecnologías utilizadas en este proyecto.

- [tailwindcss](https://tailwindcss.com), la forma rápida de constuir sitios web sin nunca salir de su HTML; se utiliza en gran parte del proyecto.
- [tailwind-animation](https://github.com/midudev/tailwind-animations) ,haz animaciones fáciles con clases de Tailwind.
- [ThreeJS](https://threejs.org), para agregar el efecto de humo al fondo de la página.
- Componente de conteo regresivo hecho con JavaScript puro con ayuda de sellos de tiempo.

🪛 Tools
--------

- [SVGOMG](https://svgomg.net/), para optimizar los archivos SVG.
- [EpochConverter](https://www.epochconverter.com), to get the timestamp of any date.
- [KonamiCode](https://www.epochconverter.com), to activate rotateY animation with ↑, ↓, ←, and →.

🚀 Project Structure
--------------------

Dentro de tu proyecto Astro, se tienen los siguiente archivos y directorios:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro busca los archivos `.astro` or `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en el nombre del archivo.

No hay nada especial en `src/components/`, aquí ubicaras tus componentes con Astro/React/Vue/Svelte/Preact.

Cualquier activos estático, como imágenes pueden ubicarse en el directorio `public/`

🧞 Commands
-----------

Todos los comandos se corren desde la raíz del proyecto.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
