/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
        mono: ["Menlo", "monospace"],
      },
      colors: {
        // ALQ custom colors (kendi CSS var'ları ile birlikte çalışacak)
        "alq-primary": "hsl(35, 95%, 55%)",
        "alq-primary-dark": "hsl(35, 85%, 45%)",
        "alq-accent": "hsl(35, 85%, 65%)"
      },
      borderRadius: {
        lg: "0.5rem",
        xl: "1rem"
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-in-up": "fadeInUp 0.6s ease-out"
      }
    }
  },
  plugins: []
};
