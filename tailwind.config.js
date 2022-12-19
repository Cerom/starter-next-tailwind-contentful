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
      }
      // fontFamily: {
      //   roboto: ['var(--font-roboto)']
      // }
    }
  },
  plugins: []
}
