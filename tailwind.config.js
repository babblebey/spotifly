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
        swhite: {
          'subdued': '#a7a7a7'
        },
        sgreen: {
          100: '#1ed760',
          200: '#169c46'
        },
        sblack: {
          100: '#070707'
        },
        sdark: {
          'base': '#121212',
          'highlight': '#1a1a1a',
          'el-base': '#181818',
          'el-base-highlight': '#282828',
          'subdued': '#292929',
          '53': '#535353'
        }
      }
      ,
      keyframes: {
        "slide-in-bottom": {
          "0%": {
            "-webkit-transform": "translateY(30%)",
            transform: "translateY(30%)",
            opacity: 0
          },
          "100%": {
            "-webkit-transform": "translateY(0%)",
            transform: "translateY(0%)",
            opacity: 1
          },
        },
      },
      animation: {
        "slide-in-b": "slide-in-bottom .3s ease-out",
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}
