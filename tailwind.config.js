/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '20px'
    },
    extend: {
      colors: {
        'bun-orange': '#F15A24',
        'bun-blue': '#0000B0',
        'bun-gray': '#191825',
        'bun-black': '#191825',
        'bun-pink': '#F85E9F'
      },
      fontFamily: {
        'comicy': ['Comicy', 'sans-serif'],
        'nunito': ['Nunito', 'sans-serif'],
        'mplus-bold': ['"M PLUS 1p"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

