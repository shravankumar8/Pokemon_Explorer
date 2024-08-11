import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        jump: "jump 0.2s ease-in-out",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "sans-serif"],
      },
      keyframes: {
        jump: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" }, // Subtle jump
          "100%": { transform: "translateY(0)" },
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
