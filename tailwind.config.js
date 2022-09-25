/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}"
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Roboto'],
      },
      backgroundImage: {
        'kaskus-footer': "url('/public/assets/img/bg-kaskus-footer.svg')",
      }
    },
  },
  plugins: [],
}
