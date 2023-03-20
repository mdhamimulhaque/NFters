/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#3D00B7",
        black: "#000000",
        line_gray: "#EFEFEF",
        light_gray: "#C0C0C0",
        deep_gray: "#565656",
        text_deep_light_gray: "#696969",
        glass: "rgba(255, 255, 255, 0.2)",
        light_bg: "#D9E0EC33",
        light_text: "#363639",
        liter_text: "#757575",
        dark_Gray_text: "#3A3A3A",
        custom_green: "#00AC4F",
        collection_border: "#ECECEC",
        collection_text: "#636363",
        collection_text_color1: "#14C8B0",
        collection_text_color2: "#FF002E",
      },

      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        IntegralCF: ["Integral CF", "Poppins"],
        AvertaDemoPE: ["Averta Demo PE Cutted Demo", "sans-serif"],
      },
      animation: {
        spin: 'spin 5s linear infinite',
      }
    },
  },
  plugins: [],
}
