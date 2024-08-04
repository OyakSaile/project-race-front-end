/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-primary": "hsl(240, 38%, 20%)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      robotoMono: ["Roboto Mono", "monospace"],
      oswald: ["Oswald", "monospace"],
      monomaniac: ["Monomaniac One", "monospace"],
    },
  },
  // darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: "none",
          },
        },
        dark: {
          colors: {
            background: "none",
          },
        },
      },
    }),
  ],
};
