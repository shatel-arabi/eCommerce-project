/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui:{
    themes:[
      {
        eCommerceTheme:{
          primary:"#f97316",
          secondary:"#000000db",
        }
      }
    ]
  },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}