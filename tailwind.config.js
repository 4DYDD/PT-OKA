/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
      },
      colors: {
        primary: "rgb(41,123,89)",
        secondary: "rgb(84,235,180)",
        tertiary: "rgb(5,58,38)",
      },
    },
  },
  plugins: [],
};
