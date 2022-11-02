/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    colors: {
      gray: {
        100: '#FFFFFF',
        200: '#E1E1E6',
        300: '#8D8D99',        
        800: '#202024',
        850: '#09090A',
        900: '#121214',
      },
      yellow: {
        500: '#F7DD43'
      },
      green: {
        300: '#129E57',
        500: '#047C3F'
      },
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../../public/bg.svg')"
      },
    },
  },
  plugins: [],
}
