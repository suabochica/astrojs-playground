🏝️ Landing web pages
====================

Página creada para fines didácticos y educativos

![Landing](./public/landing.webp "Landing")

```sh
npm create astro@latest -- --template basics
```

🥡 Takeaways
------------

- Internationalization i18n.
- Integrate external web components into Astro.
- Create a Preact component.

🧰 Tool Kit
-----------

La siguiente lista recopila las tecnologías utilizadas en este proyecto.

- [tailwindcss](https://tailwindcss.com) La forma rápida de constuir sitios web sin nunca salir de su HTML; se utiliza a lo largo de todo el proyecto.
- [lite-youtube](https://github.com/justinribeiro/lite-youtube), Un componente web para embeber videos de YouTube ligeramente; Se utiliza en el componente `Prefooter`
- [flowbite](https://flowbite.com), web components on to of Tailwind CSS; Se utiliza en el componente `Footer`
- [preact](https://preactjs.com), Alternativa rápida de 3 kB a React con la misma API moderna. Se utiliza para la página de `Archivo`.

🚀 Project Structure
--------------------

Inside of your Astro project, you'll see the following folders and files:

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

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

🧞 Comandos
-----------

Todos los comandos se ejecutan desde la raíz del proyecto.

| Command                    | Action                                           |
| :------------------------- | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm run dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm run build`           | Build your production site to `./dist/`          |
| `pnpm run preview`         | Preview your build locally, before deploying     |
| `pnpm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm run astro -- --help` | Get help using the Astro CLI                     |
