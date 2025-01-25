/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: 'var(--color-black)',
        white: 'var(--color-white)',
        floss: 'var(--color-floss)',
        mocha: 'var(--color-mocha)',
        'gray-custom': 'var(--color-gray)',
        vivid: 'var(--color-vivid)',
      },
      fontFamily: {
        'archivo-r': ['"Archivo Regular"', 'sans-serif'],
        'archivo-m': ['"Archivo Medium"', 'sans-serif'],
        'panchang-b': ['"Panchang Bold"', 'sans-serif'],
        'panchang-eb': ['"Panchang Extrabold"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}