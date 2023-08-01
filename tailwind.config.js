/** @type {import('tailwindcss').Config} */
  module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {

        colors: {
          'blue':'#62E0D9',
          'slate': '#202A3C'
        },

        fontFamily: {
          'raleway':['Raleway', 'sans-serif'],
          'openSans':['Open Sans', 'sans-serif']
        }
      },
    },
    plugins: [],
  }

