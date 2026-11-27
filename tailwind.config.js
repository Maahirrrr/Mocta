/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ground: "#080808",
        surface: "#141414",
        ink: "#f2f2f0",
        mutedInk: "#a1a19e",
        cobalt: "#2563eb",
      },
      fontFamily: {
        display: ["'Archivo'", "'Helvetica Neue'", "Arial", "sans-serif"],
        sans: ["'Archivo'", "'Helvetica Neue'", "Arial", "sans-serif"],
        body: ["'Archivo'", "'Helvetica Neue'", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
}
