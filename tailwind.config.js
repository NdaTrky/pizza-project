/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        sari: "#FDC913",
        acikGri: "#5F5F5F",
        koyuGri: "#292929",
        kirmizi: "#CE2829",
        bej: "#FAF7F2"
      },
      fontFamily: {
        "roboto": ["Roboto Condensed", "sans-serif"],
        "barlow": ["Barlow", "sans-serif"],
        "satisfy": ["Satisfy", "cursive"],
        "quattrocento": ["Quattrocento", "serif"],
      }
    },
  },
  plugins: [],
}

