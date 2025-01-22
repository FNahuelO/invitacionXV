/** @type {import('tailwindcss').Config} */
import textShadowPlugin from "tailwindcss-textshadow";
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        baloo: ["Baloo Bhai", "serif"],
        alegreya: ["Alegreya", "serif"],
        sevillana: ["Sevillana", "serif"],
        monteCarlo: ["MonteCarlo", "serif"],
        parisienne: ["Parisienne", "serif"],
        purple: ["Purple Purse", "serif"],
      },
      textShadow: {
        sm: "1px 1px 2px rgba(0, 0, 0, 0.5)",
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "3px 3px 6px rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [textShadowPlugin],
};
