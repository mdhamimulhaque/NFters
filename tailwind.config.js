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
        light_bg: "#D9E0EC33"
      },

      fontFamily: {
        DMSans: ["DM Sans", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        IntegralCF: ["Integral CF", "sans-serif"],
        AvertaDemoPE: ["Averta Demo PE Cutted Demo", "sans-serif"],
      }
    },
  },
  plugins: [],
}
