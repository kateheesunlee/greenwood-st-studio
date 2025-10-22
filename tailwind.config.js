import { tokens } from "./src/design/tokens.ts";

module.exports = {
  content: ["./src/**/*.{ts,tsx,js,jsx,html}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        display: ["var(--font-pacifico)", "cursive"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      colors: {
        // 직접 hex 매핑
        primary: tokens.primary,
        secondary: tokens.secondary,
        gray: {
          300: tokens.grey300,
          600: tokens.grey600,
          900: tokens.black,
        },
        accent: tokens.accentBg,
        paper: tokens.white,
        surface: tokens.nearWhite,
      },
      borderColor: {
        DEFAULT: tokens.grey300,
      },
      textColor: {
        DEFAULT: tokens.black,
        soft: tokens.grey600,
      },
      backgroundColor: {
        DEFAULT: tokens.surface,
        paper: tokens.white,
        accent: tokens.accentBg,
      },
    },
  },
  plugins: [],
};
