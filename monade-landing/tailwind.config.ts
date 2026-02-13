import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF4D00", // Monade Orange (Vitality)
        vitality: "#FF5C00", // Higher Chroma Orange
        intellect: "#F5D916", // Monade Lemon (Clarity)
        surface: "#F8FAFC", // Slate-50
        border: "#E2E8F0",  // Slate-200
        // Engineering Slates (The Heat Sink)
        slate: {
          950: "#020617",
          900: "#0F172A",
          850: "#172554", // Deep Navy injection for depth
          800: "#1E293B",
          700: "#334155",
        },
      },
      spacing: {
        // Fibonacci-derived Modular Scale (in px, converted to rem)
        'f-1': '0.0625rem', // 1px
        'f-2': '0.125rem',  // 2px
        'f-3': '0.1875rem', // 3px
        'f-5': '0.3125rem', // 5px
        'f-8': '0.5rem',    // 8px
        'f-13': '0.8125rem',// 13px
        'f-21': '1.3125rem',// 21px
        'f-34': '2.125rem', // 34px
        'f-55': '3.4375rem',// 55px
        'f-89': '5.5625rem',// 89px
        'f-144': '9rem',    // 144px
        'f-233': '14.5625rem' // 233px
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "Inter", "sans-serif"],
        mono: ["var(--font-geist-mono)", "JetBrains Mono", "monospace"],
      },
      backdropBlur: {
        'premium': '20px',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        'glow-orange': '0 0 20px rgba(255, 77, 0, 0.15)',
        'glow-lemon': '0 0 20px rgba(245, 217, 22, 0.15)',
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
