/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens:{
      'sm':'480px',
      'md':'768px',
      'lg':'976px',
      'xl':'1540px'
    },
    extend: {
      colors:{
        'primary':'yellow'
      }
    },
  },
  plugins: [],
}

