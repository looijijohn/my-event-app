/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-green': '#00FF7F',
        'cyber-orange': '#FF4500',
        'cyber-green-dark': '#00CC66',
        'cyber-orange-dark': '#CC3700',
      },
    },
  },
  plugins: [],
};