/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colors: {
          'customBlue1': '#191A1C',
          'customBlue2': '#1F2125',
          'customBlue3': '#26292F',
          'customBlue4': '#303641',
          'customYellow1': '#E69E00',
          'customWhite': '#DADADA',
        }
      },
    },
  },
  plugins: [],
}