/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "blue-primary": "hsl(240, 38%, 20%)",
      },
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      robotoMono: ["Roboto Mono", "monospace"],
    },
  },
  plugins: [],
};
