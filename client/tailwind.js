/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff", // bg-background => beyaz
        foreground: "#000000",
        border: "#e5e7eb", // border-border => gri-200
        card: "#ffffff",
        "card-foreground": "#000000",
        primary: "#3b82f6", // mavi
        "primary-foreground": "#ffffff",
        secondary: "#f3f4f6", // gri-100
        "secondary-foreground": "#111827",
      }
    },
  },
  plugins: [],
}
