module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        xxl: "80%"
      },
      width: {
        xxl: "95%"
      },
      colors: {
        orange: {
          light : '#ED7839',
          default: '#E95C15',
          dark: '#F5140A',
          orange1: "#E32943"
        },
        yellow: {
          yellow1: "#E3CC0D"
        },
        purple: {
          default: "#8009E8"
        },
        set1: {
          primary: "#2E0B25",
          secondary: "#E55AAC",
          third: "#E5D580"
        },
        set2: {
          primary: "#160E2D",
          secondary: "#160326",
          third: "#74E2C6",
          fourth: "#E36CC0",
          fifth: "#E3E2E4",
          sixth: "#E0C4D6",
        }
      }
    },
  },
  variants: {
    extend: {
      scale: ['hover']
    },
  },
  plugins: [],
}
