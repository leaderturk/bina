import type { Config } from "tailwindcss";

const config: Config = {
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
        background: "hsl(210, 40%, 98%)",
        foreground: "hsl(222.2, 84%, 4.9%)",
        border: "hsl(214.3, 31.8%, 91.4%)",
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
  plugins: [],
};

export default config;
