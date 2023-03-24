/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {

      colors:{
        'orange' : '#eccc68',
        "custom0"   : '#ff6b6b',
        "custom1"  : '#222f3e',
        "custom2" : '#feca57',
        "custom3" : '#0abde3',
        "custom4" : '#f368e0'

      }
    },
  },
  plugins: [],
}
