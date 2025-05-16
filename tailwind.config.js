/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Adani brand colors
        'adani-blue': '#0B74B0',
        'adani-purple': '#75479C',
        'adani-maroon': '#BD3861',
        'adani-light-blue': '#e0f2ff',
        'adani-light-purple': '#f5eeff',
        'adani-light-maroon': '#ffe0e9',
        'adani-dark-blue': '#095d8c',
        'adani-dark-purple': '#5e3a7d',
        'adani-dark-maroon': '#972d4e',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
