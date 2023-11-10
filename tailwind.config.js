/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        barlow: ['"Barlow Condensed"', "sans-serif"],
        roboto: ['"Roboto Condensed"', "sans-serif"],
      },
      colors: {
        grey: "#f7f7f7",
        gray_black: "#2A2A2A",
        primary: "rgb(22,119,255)",
      },
      backgroundColor: {
        gray: "#f7f7f7",
      },
      width: {
        "4.5/10": "45%",
      },
    },
  },
  plugins: [],
};
