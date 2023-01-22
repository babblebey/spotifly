const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontWeight: {
      normal: 400,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-circular)', ...fontFamily.sans]
      },
      colors: {
        sgreen: {
          100: '#1ed760',
          200: '#169c46'
        }
      }
    },
  },
  plugins: [],
}
