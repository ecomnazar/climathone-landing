/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        caladea: ["Caladea", "serif"],
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "#7F56D9",
        secondary: "#FF6905",
        dark: "#06241B",
        light: "#7E7EAA",
      },
    },
  },
  plugins: [],
};
