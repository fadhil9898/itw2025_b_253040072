/** @type {import('tailwindcss').Config} */
export default {
  content: ["*.{html,js}"],
  theme: {
    container: {
      padding:{
        DEFAULT: '15px',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '960px',
      'xl': '1200px',
    },
    fontFamily: {
      primary: 'DM Serif Display',
      secondary: 'Jost',
    },
    backgroundImage: {
      hero: 'url(itw2025_b_253040072/itw2025_project2_253040072/assets/hero/bg.jpg)',
      grid: 'url(/assets/grid.png)',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#292f36',
          hover: '#343e4a',
        },
        secondary: '#4d5053',
        accent: {
          DEFAULT: '#cda274',
          secondary: '#f4f0ec',
          hover: '#b88c5d',
        },
      },
    },
  },
  plugins: [],
}

