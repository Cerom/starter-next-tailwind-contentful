/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundColor: {
        themeblue: '#BCC2D2',
        themeoffwhite: '#ECE9E6',
        themeblack: '#020202'
      },
      textColor: {
        themeoffwhite: '#ECE9E6'
      },
      dropShadow: {
        brut: '4px 4px #000000'
      },
      animation: {
        scroll: 'scroll 20s linear infinite'
      },
      keyframes: {
        scroll: {
          '0%': {transform: 'translate3d(0, 0, 0)'},
          '100%': {transform: 'translate3d(-50%, 0, 0)'}
        }
      },
      fontFamily: {
        title: ['LeMurmure']
      }
    }
  },
  plugins: []
}
