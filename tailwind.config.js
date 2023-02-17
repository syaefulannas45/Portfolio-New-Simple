/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pastel: {
          100: "#ffc09f",
          200: "#ffee93",
          300: "#fcf5c7",
          400: "#a0ced9",
          500: "#adf7b6",
          600: "#F8F8F8",
          700: "#F4F4F4",
          800: "#abc4ff",
          900: "#809bce",
          1000: "#f4f1d6",
        },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
