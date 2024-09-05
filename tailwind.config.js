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
      colors: {
        dark: "#111111",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          sm: "100%",
          md: "100%",
          lg: "1024px",
          xl: "1280px",
          "2xl": "1536px",
        },
      },
    },
  },
  plugins: [],
};
