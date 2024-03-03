import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      backgroundImage: {
        noise: "url(/noise.webp)",
      },
      colors: {
        yellow: "#FFC700",
      },
      animation: {
        "spin-once": "spin-once 1s cubic-bezier(.75, -0.36, .25, 1.36)",
      },
      keyframes: {
        "spin-once": {
          "0%, 100%": {
            transform: "rotate(0deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
