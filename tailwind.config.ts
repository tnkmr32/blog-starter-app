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
      lg: "24px",
      xl: "32px",
      none: "0px",
    },
    fontSize: {
      sm: "12px",
      md: "16px",
      lg: "20px",
    },
    colors: {
      base: "#482700",
      accent: "#2B24FF",
      white: "#FFFFFF",
      grey: "#BFBFBF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      letterSpacing: {
        tighter: "-.04em",
      },
      boxShadow: {
        sm: "0px 3px 5px rgba(0, 0, 0, 0.1)",
        md: "0px 5px 10px rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
