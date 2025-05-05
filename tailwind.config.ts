import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    spacing: {
      sm: "8px",
      md: "16px",
      lg: "20px",
      xl: "24px",
    },
    fontSize: {
      sm: "12px",
      md: "16px",
      lg: "20px",
    },
    colors: {
      base: "#482700",
      accent: "#2B24FF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "accent-1": "#FAFAFA",
        "accent-2": "#EAEAEA",
        "accent-7": "#333",
        success: "#0070f3",
        cyan: "#79FFE1",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      boxShadow: {
        md: "0px 5px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
