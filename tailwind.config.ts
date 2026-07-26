import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
  marquee: "marquee 40s linear infinite",
},
keyframes: {
  marquee: {
    "0%": { transform: "translateX(0%)" },
    "100%": { transform: "translateX(-50%)" },
  },
},
      colors: {
        dammy: {
          blue: "#1E3A8A",
          "blue-light": "#3B82F6",
          orange: "#F97316",
          "orange-light": "#FB923C",
          dark: "#0A0A0A",
          darker: "#050505",
        },
      },
    },
  },
  plugins: [],
};

export default config;