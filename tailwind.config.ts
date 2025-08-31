/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // DN Kategaya Express brand colors
        primary: {
          red: '#E10600',      // DN Kategaya red
          yellow: '#FFD700',   // DN Kategaya yellow
          blue: '#0057FF',     // DN Kategaya blue
          black: '#000000',    // DN Kategaya black
          white: '#FFFFFF',    // DN Kategaya white
        },
        // Legacy zuberi colors for backward compatibility
        zuberi: {
          navy: '#1A1C5A',
          red: '#E10600',      // Updated to DN Kategaya red
          silver: '#D4D4D4',
          lime: '#FFD700',     // Updated to DN Kategaya yellow
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