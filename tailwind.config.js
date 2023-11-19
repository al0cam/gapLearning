/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{svelte,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      
    },
  }, 
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#db76af",
          "secondary": "#c8f788",
          "accent": "#55aac6",
          "neutral": "#281528",
          "base-100": "#34353d",
          "info": "#56a3cd",
          "success": "#137748",
          "warning": "#f7bf18",
          "error": "#ea6276",
          },
      },
    ],
  },
  plugins: [require("daisyui")],
};
