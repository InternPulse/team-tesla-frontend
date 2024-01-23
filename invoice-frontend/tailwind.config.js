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
        offGray: "#F7F7FC",
        yellowShade: " #806200",
        yellowTint: "#FFF3CC",
        success: "#2AA258",
        successTint: "#94D0AB",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
