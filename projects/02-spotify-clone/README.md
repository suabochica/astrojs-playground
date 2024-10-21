🎵 Spotify Clone
================

This project use Astro as framework to build a Spotify clone:

![Spotify](./public/spotify-clone.webp "Spotify")

```sh
npm create astro@latest -- --template minimal
```

🥡 Takeaways
------------

- Use of view transitions.
- Zustand to state management in React.
- Embed a React component into Astro.
- Embeed a Svelte component into Astro.

🧰 Tech Stack
-------------

- [Astro](https://astro.build/) as web framework.
- [pnpm](https://pnpm.io/) as package manager.
- [tailwindcss](https://tailwindcss.com/) as CSS framework.
- [typescript](https://typescriptlang.org/) as JavaScript superset.
- [zustand](https://zustand-demo.pmnd.rs/) as React state management.

🚀 Project Structure
--------------------

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

🧞 Commands
-----------

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
