/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-green": "#313628",
        beige: "#DCC48E",
        "pale-green": "#EAEFD3",
        "light-green": "#B3C0A4",
        tangerine: "#F96E46",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      backgroundImage: {
        wingspan: "url('@/assets/wingspan.png')",
      },
    },
  },
  plugins: [],
};
