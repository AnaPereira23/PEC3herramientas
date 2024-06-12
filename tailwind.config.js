/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    colors: {
      'gray-dark': 'rgb(35, 35, 35)',
      'green-light': 'rgb(9, 238, 20)',
      'green-dark': 'rgb(6, 77, 6)',
      'white': 'rgb(255,250,250)',
    },
    fontFamily: {
      sans: ['Candara', 'sans-serif'],
      serif: ['Garamond', 'serif'],
    },
    fontSize: {
      'text-p': '4.5vw',
      'text-p-smll': '4vw',
      'text-p-mdm': '3vw',
      'text-p-lrg': '2vw',
      'text-p-xlrg': '1.3vw',

      'text-h1': '7vw',
      'text-h1-smll': '6vw',
      'text-h1-mdm': '5vw',
      'text-h1-lrg': '3vw',
      'text-h1-xlrg': '2vw',

      'text-h2': '6vw',
      'text-h2-smll': '5vw',
      'text-h2-mdm': '4vw',
      'text-h2-lrg': '2.5vw',
      'text-h2-xlrg': '1.5vw',
    },
    screens: {
      'smll': '576px',
      'mdm': '768px',
      'lrg': '992px',
      'xlrg': '1200px',
    },
    extend: {
      maxWidth: {
        'max-w-smll': '540px',
        'max-w-mdm': '720px',
        'max-w-lrg': '960px',
        'max-w-xlrg': '1140px',
      }
    },
  },
  plugins: [],
}

