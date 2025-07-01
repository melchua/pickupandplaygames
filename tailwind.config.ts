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
        wiggle: "wiggle 1s ease-in-out infinite",
        "bounce-gentle": "bounce-gentle 2s infinite",
        "rotate-slow": "rotate-slow 20s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        "bounce-gentle": {
          "0%, 100%": {
            transform: "translateY(-5%)",
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        "rotate-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
      boxShadow: {
        "glow-banana": "0 0 20px rgba(255, 232, 93, 0.5)",
        "glow-pink": "0 0 20px rgba(244, 91, 105, 0.5)",
        "neo-sm": "2px_2px_0px_0px_rgba(0,0,0,1)",
        "neo-md": "4px_4px_0px_0px_rgba(0,0,0,1)",
        "neo-lg": "6px_6px_0px_0px_rgba(0,0,0,1)",
        "neo-xl": "8px_8px_0px_0px_rgba(0,0,0,1)",
        "neo-banana-sm": "2px_2px_0px_0px_rgba(255,232,93,1)",
        "neo-banana-md": "4px_4px_0px_0px_rgba(255,232,93,1)",
        "neo-banana-lg": "6px_6px_0px_0px_rgba(255,232,93,1)",
        "neo-pink-sm": "2px_2px_0px_0px_rgba(244,91,105,1)",
        "neo-pink-md": "4px_4px_0px_0px_rgba(244,91,105,1)",
        "neo-pink-lg": "6px_6px_0px_0px_rgba(244,91,105,1)",
      },
      borderWidth: {
        "6": "6px",
        "8": "8px",
      },
      transitionTimingFunction: {
        "bounce-out": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        elastic: "cubic-bezier(0.175, 0.885, 0.32, 1.275)",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
