/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.{js,jsx,ts,tsx}','./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {colors:{
      'main' : {
        default : '#FF6E49',
        light:'	#FFD580'
      }
    }},
  },
  plugins: [],
}

