import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        banana: "#FFE85D",
        ink: "#000000",
        "hot-pink": "#F45B69",
        dark: "#0f0f0f",
        darker: "#0a0a0a",
      },
      fontFamily: {
        display: ["var(--font-display)", "cursive"],
        body: ["var(--font-body)", "sans-serif"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s infinite",
      },
      boxShadow: {
        "glow-banana": "0 0 20px rgba(255, 232, 93, 0.5)",
        "glow-pink": "0 0 20px rgba(244, 91, 105, 0.5)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
