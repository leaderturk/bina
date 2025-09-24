/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: "#ffffff", // bg-background
        },
        border: {
          DEFAULT: "#e5e7eb", // border-border
        },
      },
    },
  },
  plugins: [],
}
