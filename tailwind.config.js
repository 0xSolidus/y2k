/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bubblegum: ['Bubblegum Sans', 'cursive'],
      },
      colors: {
        'pink-window': '#ffecf1',
        'pink-border': '#ff69b4',
        'pink-gradient-from': '#ffb6c1',
        'pink-gradient-to': '#ff69b4',
      },
      boxShadow: {
        'window': '0 0 15px rgba(255, 182, 193, 0.4)',
      }
    },
  },
  plugins: [],
}

