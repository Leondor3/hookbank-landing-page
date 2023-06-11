/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.tsx',
    './index.html'
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1rem",
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1280px',
        },
      },
      backgroundImage: {
        "linear-bg": "linear-gradient(125.17deg, #272727 0%, #11101D 100%)",
        "card-gradient": "linear-gradient(144.39deg, #FFFFFF -278.56%, #6D6D6D -78.47%, #11101D 91.61%);",
        "text-gradient": "radial-gradient(64.18% 64.18% at 71.16% 35.69%, #DEF9FA 0.89%, #BEF3F5 17.23%, #9DEDF0 42.04%, #7DE7EB 55.12%, #5CE1E6 71.54%, #33BBCF 100%)"
      },
      backgroundColor: {
        "dark-bg": "#00040F",
      },
      blur: {
        full: '194px',
      },
    },
  },
  plugins: [],
};
