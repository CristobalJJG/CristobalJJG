/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        glass: {
          light: 'rgba(255, 255, 255, 0.7)',
          lighter: 'rgba(255, 255, 255, 0.9)',
          dark: 'rgba(0, 0, 0, 0.5)',
          darker: 'rgba(0, 0, 0, 0.7)',
        },
      },
      backdropBlur: {
        glass: '10px',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-light': '0 8px 32px 0 rgba(31, 38, 135, 0.1)',
      },
      backgroundImage: {
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0))',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

