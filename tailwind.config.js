/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: "#D946EF", // magenta / fuchsia-500
          dark: "#A21CAF",    // deeper magenta
          light: "#F0ABFC"    // lighter magenta
        }
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "Segoe UI", "Roboto", "Inter", "Arial", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 3px rgba(217, 70, 239, 0.35)"
      }
    }
  },
  plugins: []
};


