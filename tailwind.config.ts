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
        primary: {
          DEFAULT: "#FFFFFF",
          50: "#fafafa",
          100: "#f4f4f5",
          200: "#e4e4e7",
          300: "#d4d4d8",
          400: "#a1a1aa",
          500: "#71717a",
          600: "#52525b",
          700: "#3f3f46",
          800: "#27272a",
          900: "#18181b",
        },
        dark: {
          DEFAULT: "#0A0A0A",
          light: "#A1A1AA", // mapped to secondary text
          blue: "#111111",  // mapped to secondary bg
          gray: "#171717",  // mapped to card bg
        },
        accent: {
          DEFAULT: "#FFFFFF",
          light: "#E4E4E7",
        },
      },
      borderRadius: {
        btn: "12px",
      },
      height: {
        "header-h": "70px",
      },
      padding: {
        "header-h": "70px",
        "section-y": "80px",
        "section-y-sm": "40px",
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
