/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1.25rem'
      },
      colors: {
        dark: '#040b10',
        light: '#FCFCFA',
        primary: '#3d43d8',
        'gray-text': '#9ea4a6'
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
        'apercu': ['Apercu', 'sas-serif']
      }
    },
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',
      '2xl': '1400px'
    },
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '26px'],
      lg: ['18px', '30px'],
      xl: ['20px', '34px'],
      '2xl': ['24px', '38px'],
      '5xl': ['48px', '63px']
    }
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1120px',
          },
          '@screen 2xl': {
            maxWidth: '1320px',
          },
        }
      })
    }
  ],
}

