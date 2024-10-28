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
        'inria-sans': [
          '"Inria Sans"',
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
    },
  },
  plugins: [],
};
