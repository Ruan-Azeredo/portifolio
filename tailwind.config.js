/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#202020',
        'gray': '#3d3d3d',
        'cinzaclaro': '#909090',
        'azulescuro': '#152DFF',
        'azulclaro': '#41ABCC',
        'background': '#2C3333'
      }
    },
  },
  plugins: [],
}
