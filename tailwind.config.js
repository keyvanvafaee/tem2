/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {

      colors:{
        'orange' : '#eccc68',
        "mred"   : '#ff6b6b',
        "cblack"  : '#222f3e',
        "morange" : '#feca57',
        "mblue" : '#0abde3',
        "mpurple" : '#f368e0'

      }
    },
  },
  plugins: [],
}
