/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39FF14',
        'nvidia-green': '#76B900',
        'dark-slate': '#121212',
        'midnight': '#0A0A0A',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(57, 255, 20, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(57, 255, 20, 0.8)' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(57, 255, 20, 0.5)',
        'glow': '0 0 15px rgba(57, 255, 20, 0.7)',
      },
    },
  },
  plugins: [],
}
