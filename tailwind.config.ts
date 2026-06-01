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
          DEFAULT: "#00AADF",
          50: "#f0fbff",
          100: "#e0f6fe",
          200: "#baeafc",
          300: "#7cd7fa",
          400: "#33c2f7",
          500: "#00aadf",
          600: "#0089bd",
          700: "#006d99",
          800: "#035d80",
          900: "#084d6b",
        },
        dark: {
          DEFAULT: "#010C1E",
          light: "#4b5563", // gray-600 equivalent for text
          blue: "#041830",
          gray: "#08121F",
        },
        accent: {
          DEFAULT: "#00AADF",
          light: "#33C2E8",
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
