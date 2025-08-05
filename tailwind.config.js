/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // <-- Memberi tahu Tailwind untuk memindai file .html dan .js
  theme: {
    extend: {
      // Menambahkan warna dari desain GloriaAI Anda
      colors: {
        'brand-pink': '#FF3B89',
        'brand-purple': '#A259FF',
        'light-bg': '#F8F9FE',
        'dark-text': '#0D0E25',
        'light-text': '#5E607A',
      },
    },
  },
  plugins: [],
}