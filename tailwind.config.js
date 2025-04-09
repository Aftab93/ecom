/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3490dc",
        secondary: "#ff6347",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "3rem",
          sm: "3rem",
        },
      },
    },
  },
  plugins: [],
};
