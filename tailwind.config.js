const tailwindcss = require("tailwindcss");

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '1000': '1000px',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/forms')]
}
