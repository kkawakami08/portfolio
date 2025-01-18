const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: "#466365",
          "light-green": "#a0c0bf",
          "dark-green": "#344345",
          "very-dark-green": "#1f2b2d",
          brown: "#a18351",
          pink: "#CEB3AB",
          purple: "#C4C6E7",
          yellow: "#ffc44a",
          "dark-yellow": "#a2470a",
        },
      },
      fontFamily: {
        serif: ["var(--font-dm-serif-text)", ...defaultTheme.fontFamily.serif],
        sofia: ['"Sofia Sans"', "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
