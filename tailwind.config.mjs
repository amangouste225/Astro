/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "var(--font-primary)",
      },
      fontSize: {
        big: "3.5rem",
        logo: "35px",
      },
      fontWeight: {
        black: "900",
        extrabold: "800",
      },
    },
  },
  plugins: [],
};
