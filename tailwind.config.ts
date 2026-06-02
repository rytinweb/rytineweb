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
          DEFAULT: "#0EA5E9",
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        dark: {
          DEFAULT: "#111827",
          light: "#64748b", // slate-500 equivalent for text
          blue: "#111827",  // map to slate-900
          gray: "#f8fafc",  // map to slate-50
        },
        accent: {
          DEFAULT: "#0EA5E9",
          light: "#38BDF8",
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
