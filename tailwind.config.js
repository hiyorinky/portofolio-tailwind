/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
  ],
  theme: {
    extend: {
      letterSpacing: {
        'widest-V2': '.5em',
        'widest-V3': '.4em',
      },
      keyframes: {
        'trans-right': {
          '0%, 100%': {transform: 'translateX(10px)'},
          '50%': {transform: 'translateX(0)'}
        }
      },
      animation: {
        'trans-right': 'trans-right 1s ease-in-out infinite'
      },
    },
  },
  plugins: [],
}