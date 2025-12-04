import { M3_GREEN_TOKENS } from "./src/design/tokens.ts";

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
        primary: M3_GREEN_TOKENS.primary,
        secondary: M3_GREEN_TOKENS.secondary,
        gray: {
          300: M3_GREEN_TOKENS.neutral30,
          600: M3_GREEN_TOKENS.neutral60,
          900: M3_GREEN_TOKENS.neutral90,
        },
        accent: M3_GREEN_TOKENS.neutral90,
        paper: M3_GREEN_TOKENS.white,
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
