/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

export default {
  darkMode: 'media',
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

