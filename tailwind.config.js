/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
            "primary": "#c65e47",
            "secondary": "#161bad",
            "accent": "#2070f9",
            "neutral": "#2b243d",
            "base-100": "#382c3a",
            "info": "#91c2de",
            "success": "#149049",
            "warning": "#fab20a",
            "error": "#f94e4e",
          },
      },
    ],
  },
  plugins: [require("daisyui")],
};
