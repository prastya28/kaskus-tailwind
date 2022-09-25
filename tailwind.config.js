/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Nunito'],
      },
    },
  },
  plugins: [],
}
