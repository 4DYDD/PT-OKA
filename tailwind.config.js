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
      keyframes: {
        buletan: {
          "0%, 100%": { left: "-500px", scale: "0" },
          "25%, 75%": { left: "0", scale: "1" },
          "12%, 85%": { left: "0", scale: "0.5" },
        },
      },
      animation: {
        buletan: "buletan 4.5s both",
      },
    },
  },
  plugins: [],
};
