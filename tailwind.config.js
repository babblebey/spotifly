const { fontFamily } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin')

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
      fontSize: {
        '2xs': '0.7rem',
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
          '53': '#535353',
          '33': '#333333'
        },
        sblue: '#2e77d0'
      },
      gridTemplateColumns: {
        'plist': '16px 6fr 4fr 3fr minmax(120px,1fr)',
        'aslist': '16px 6fr 3fr minmax(120px, 1fr)',
        'albslist': '16px 9fr minmax(120px, 1fr)',
      },
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
      containers: {
        'c3xl': '1800px',
        'c2xl': '1600px',
        'cxl': '1400px',
        'clg': '1200px',
        'cmd': '1000px',
        'csm': '700px',
        'cxs': '560px'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/container-queries'),
    
    plugin(
      // Specific NTH Child selector Modifier
      function({ matchVariant }) {
        matchVariant('nth', value => `&:nth-child(${value})`);
      }
    )    
  ],
}
