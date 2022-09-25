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
      },
      colors: {
        'kaskus-color': '#1384c2',
        'kaskus-footer-copy': '#464646',
      },
    },
  },
  plugins: [],
}
