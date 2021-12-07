module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "p-orange": {
          "primary": "#FF6433",
        },
        "p-green": {
          "primary": "#00D289",
        },
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ]
}
