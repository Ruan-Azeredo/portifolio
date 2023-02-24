/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black': '#161818',
        'grayy': '#3d3d3d',
        'cinzaclaro': '#909090',
        'azulescuro': '#152DFF',
        'azulclaro': '#41ABCC',
        'background': '#161818'
      }
    },
  },
  plugins: [],
}
