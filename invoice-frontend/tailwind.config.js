/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        mustard: "#FFB703",
        lightMustard: "#ffe29a",
        slightGray: "#404859",
        lighterGray: " #40485980",
        borderGray: "#ABB2C0",
      },
      fontFamily: {
        // Set your general font here
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
