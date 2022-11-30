/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'red': '#D44545',
        'grey': '#363636'
      },
    }
  },
  plugins: [],
}