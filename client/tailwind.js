/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // bg-background
        border: "#e5e7eb",     // border-border
      },
    },
  },
  plugins: [],
}
