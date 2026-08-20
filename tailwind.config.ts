import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-montserrat)", "system-ui", "sans-serif"],
        script: ["var(--font-script)", "cursive"],
        soligant: ["var(--font-soligant)", "Georgia", "serif"],
        himalaya: ["var(--font-himalaya)", "Georgia", "serif"],
        "golden-hills": ["var(--font-golden-hills)", "cursive"],
        "tropical-avenue": ["var(--font-tropical-avenue)", "sans-serif"],
      },
      colors: {
        night: {
          DEFAULT: "#050b18",
          mid: "#0c1a38",
          glow: "#1e4a8c",
        },
      },
      keyframes: {
        twinkle: {
          "0%, 100%": { opacity: "0.15", transform: "scale(0.85)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        twinkle: "twinkle 3.4s ease-in-out infinite",
        drift: "drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
