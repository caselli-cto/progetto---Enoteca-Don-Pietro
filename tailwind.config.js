/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2C1810', // Bordeaux Scuro
        secondary: '#D4AF37', // Oro/Champagne
        accent: '#722F37', // Rosso Vino
        warmGray: '#8B7D77', // Grigio Caldo
        offWhite: '#F9F8F6',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        poppins: ['"Poppins"', 'sans-serif'],
        crimson: ['"Crimson Text"', 'serif'],
      }
    },
  },
  plugins: [],
}