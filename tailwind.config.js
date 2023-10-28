/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#F42C36',
        'srBlack': '#101010',
        'srBlack2': '#000000',
        'srWhite': '#FFFFFF',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}

