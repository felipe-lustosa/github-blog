/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'header-cover': "url('/assets/Cover.png')",
      },
      colors: {
        base: {
          'input': '#040f1a',
          'background': '#071422',
          'profile': '#0b1b2b',
          'post': '#112131',
          'border': '#1c2f41',
          'label': '#3a536b',
          'span': '#7b96b2',
          'text': '#afc2d4',
          'subtitle': '#c4d4e3',
          'title': '#e7edf4',
        },
        brand: {
          'blue': '#3294f8',
        }
      },
      fontSize: {
        'title-lg': '1.5rem',
        'title-md': '1.25rem',
        'title-sm': '1.125rem',

        'link': '0.75rem',
      }
    },
  },
  plugins: [],
}