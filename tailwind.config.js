module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          light : '#ED7839',
          default: '#E95C15'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
