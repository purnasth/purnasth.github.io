/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        luxury: ['"Gold Badge"', "Georgia", "Cambria", "serif"],
        title: ['"Bourbon St"', "Georgia", "Cambria", "serif"],
        kalnia: [
          '"Kalnia"',
          "ui-serif",
          "Georgia",
          "Cambria",
          "Times New Roman",
          "Times",
          "serif",
        ],
        "inria-sans": [
          '"Inria Sans"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        "pt-sans": [
          '"PT Sans Narrow"',
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
