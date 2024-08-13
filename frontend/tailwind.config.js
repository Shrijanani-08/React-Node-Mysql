/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      flexBasis: {
        '6/7': '96%',
        '1/7': '4%'
      },
      colors:{
        'grey-blue':'#1a1b1cc7',
        'light-blue':'#1d2125 ',
      },
      width: {
        '5': '5%',
        '95': '95%',
      } 
    },
  },
  plugins: [],
}