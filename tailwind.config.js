/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        accent: "#2563eb",
        darkbg: "#0f172a",
      }
    }
  },
  plugins: [],
};
