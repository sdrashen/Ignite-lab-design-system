/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
  ],
  theme: {
    /**Esse fontSize é usado para todos os tamanhos de fonte possível na nossa app */
    fontSize: {
      xs: 14,
      sm: 16,
      md: 18,
      lg: 20,
      xl: 24,
      //Não pode ter número na chave da propriedade do obj. Por iso tem que ter '' em volta.
      '2xl': 32,
    },
    colors: {
      transparent: 'transparent',

      black: '#000',
      white: '#FFF',

      gray: {
        900: '#121214',
        800: '#202024',
        400: '#7c7c8a',
        200: '#c4c4cc',
        100: '#e1e1e6',
      },

      cyano: {
        500: '#81d8f7',
        300: '#9be1fb'
      },
    },
    extend: {
      fontFamily:{
        sans: 'Inter, sans-serif'
      },
    },
  },
  plugins: [],
}

