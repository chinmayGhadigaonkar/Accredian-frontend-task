/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {

      colors:{
        primary : "#1a73e8",
        secondary : "#1A202C",
      }
    },
  },
  plugins: [],
}

