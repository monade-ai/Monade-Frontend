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
        primary: "#FF4D00", // Monade Orange
        surface: "#F8FAFC", // Slate-50
        border: "#E2E8F0",  // Slate-200
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      spacing: {
        '8': '2rem',
        '1': '0.25rem',
        '2': '0.5rem',
        '4': '1rem',
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
