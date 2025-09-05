/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // DNKategaya Express brand colors
        primary: {
          red: '#E10600',      // DNKategaya red
          yellow: '#FFD700',   // DNKategaya yellow
          blue: '#0057FF',     // DNKategaya blue
          black: '#000000',    // DNKategaya black
          white: '#FFFFFF',    // DNKategaya white
        },
        // Legacy zuberi colors for backward compatibility
        zuberi: {
          navy: '#1A1C5A',
          red: '#E10600',      // Updated to DNKategaya red
          silver: '#D4D4D4',
          lime: '#FFD700',     // Updated to DNKategaya yellow
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'bebas': ['Bebas Neue', 'sans-serif'],
      }
    },
  },
  plugins: [],
}