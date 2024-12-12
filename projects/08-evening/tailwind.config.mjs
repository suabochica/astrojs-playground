import animations from "@midudev/tailwind-animations";

/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        atomic: ["Atomic", "cursive"],
      },
      colors: {
        accent: "var(--color-accent)",
        ice: "var(--color-twitch-ice)",
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        twitch: "var(--color-twitch)",
      },
    },
  },
  plugins: [
    animations,
    function ({ addVariant }) {
      addVariant("any-hover, @media (any-hover:hover) {&:hover}");
    },
  ],
};
