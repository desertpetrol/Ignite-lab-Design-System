/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    fontSize: {
      xs: 14,
      sm: 16,
      md: 20,
      xl: 24,
      '2xl': 32,
    },
    colors: {
      'transparent' : 'transparent',
      'white' : '#FFF',
      'blue-baby' : '#121214',
      'black': '#09090A',
      'pink-bubble': '#FF88C8',
      'bg-dark-blue': '#070912',
      gray: {
        026 : '#262626',
        043 : '#434348',
        217 : '#D9D9D9',
        193 : '#C1C1C1',
        030 : '1E1E1E',
      },
    },
    extend: {
      fontFamily: {
        sans: "inter, sans-serif"
      }
    },
  },
  plugins: [],
}
