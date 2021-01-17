module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ['Roboto Mono'],
    },
    extend: {},
  },
  variants: {
    extend: {
      ringColor: ['hover'],
      backgroundColor: ['hover', 'checked'],
      borderColor: ['hover', 'checked'],
    },
  },
  plugins: [],
}
