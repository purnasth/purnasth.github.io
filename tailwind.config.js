/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        luxury: ['"Gold Badge"', 'Georgia', 'Cambria', 'serif'],
        // title: [
        //   '"Kalnia"',
        //   'ui-serif',
        //   'Georgia',
        //   'Cambria',
        //   'Times New Roman',
        //   'Times',
        //   'serif',
        // ],
        body: [
          '"purna_shrestha_poly_sans"',
          'Bricolage Grotesque',
          // '"Syne"',
          'Inria Sans',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        'inria-sans': [
          'Inria Sans',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        'pt-sans': [
          '"PT Sans Narrow"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        textShadow: {
          dark: '0 20px 20px rgba(0, 0, 0, 0.5)',
          light: '0 2px 5px rgba(255, 255, 255, 0.5)',
          'light-glow':
            '1px 1px 2px #F8F8FF,  0 0 1em #F8F8FF, 0 0 0.2em #F8F8FF',
          'dark-glow':
            '1px 1px 2px #000111,  0 0 1em #000111, 0 0 0.2em #000111',
        },
      },
      colors: {
        dark: '#0a0a0a',
        light: '#f8f8f8',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        // padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1600px',
        },
      },
      keyframes: {
        floating: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        wave: {
          '0%': { transform: 'rotate(0deg)' },
          '10%': { transform: 'rotate(14deg)' },
          '20%': { transform: 'rotate(-8deg)' },
          '30%': { transform: 'rotate(14deg)' },
          '40%': { transform: 'rotate(-4deg)' },
          '50%': { transform: 'rotate(10deg)' },
          '60%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
      },
      animation: {
        floating: 'floating 3s ease-in-out infinite',
        wave: 'wave 2.5s infinite',
      },
    },
  },
  plugins: [],
};
