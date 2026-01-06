import { createTheme } from "@mui/material/styles";
import { M3_GREEN_TOKENS } from "./tokens";

// Create MUI theme using design tokens
export const muiTheme = createTheme({
  palette: {
    // 🌲 Primary: #43673F
    primary: {
      main: M3_GREEN_TOKENS.primary, // #43673F - Moss Green
      light: M3_GREEN_TOKENS.primaryLight, // #72956C - Light Moss Green
      dark: M3_GREEN_TOKENS.primaryDark, // #2C4B29 - Dark Moss Green
      contrastText: M3_GREEN_TOKENS.white, // #FFFFFF
    },
    // 🌿 Secondary: #779973
    secondary: {
      main: M3_GREEN_TOKENS.secondary, // #779973 - Sage Green
      light: M3_GREEN_TOKENS.secondaryLight, // #91B98D - Lighter Sage Green
      dark: M3_GREEN_TOKENS.primary, // Primary와 톤을 맞춤
      contrastText: M3_GREEN_TOKENS.white, // #FFFFFF
    },
    // ✨ Tertiary (M3 추가): #5B7B7C - 포인트 색상
    tertiary: {
      main: M3_GREEN_TOKENS.tertiary, // #5B7B7C - Teal Green
      light: M3_GREEN_TOKENS.secondaryLight,
      dark: M3_GREEN_TOKENS.primaryDark,
      contrastText: M3_GREEN_TOKENS.white,
    },
    // 🌕 Background
    background: {
      default: M3_GREEN_TOKENS.neutral99, // #FBFDFA - 아주 밝은 배경
      paper: M3_GREEN_TOKENS.white, // #FFFFFF - 카드, 모달 등
    },
    // 🖊️ Text
    text: {
      primary: M3_GREEN_TOKENS.neutral10, // #1B1C19 - 짙은 텍스트
      secondary: M3_GREEN_TOKENS.primaryLight, // #72956C - 보조 텍스트
    },
    // ➖ Divider
    divider: M3_GREEN_TOKENS.neutral90, // #E2E3DD - 구분선 색상
    // ⚪ Grey (Neutral 톤으로 변경)
    grey: {
      300: M3_GREEN_TOKENS.neutral90, // #E2E3DD
      600: M3_GREEN_TOKENS.neutral60, // #929292
      900: M3_GREEN_TOKENS.neutral10, // #1B1C19
    },
    // 💡 Accent (Neutral 90으로 변경)
    accent: {
      main: M3_GREEN_TOKENS.neutral90, // #E2E3DD - Accent Background
      contrastText: M3_GREEN_TOKENS.neutral10,
    },
  },
  typography: {
    fontFamily: [
      "var(--font-inter)",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
    fontFamilySecondary: ["var(--font-pacifico)", "cursive"].join(","),
    h1: {
      fontSize: "2.5rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "0.875rem", // Smaller than default 1rem
    },
    body2: {
      fontSize: "0.875rem",
    },
    button: {
      textTransform: "none", // Disable uppercase transformation
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10, // shape.borderRadius와 통일성을 위해 10px로 변경
          padding: "10px 20px",
          fontWeight: 600,
        },
        contained: {
          backgroundColor: M3_GREEN_TOKENS.primary,
          color: M3_GREEN_TOKENS.white,
          "&:hover": {
            backgroundColor: M3_GREEN_TOKENS.primaryDark,
          },
        },
        outlined: {
          borderColor: M3_GREEN_TOKENS.primary,
          color: M3_GREEN_TOKENS.primary,
          "&:hover": {
            backgroundColor: M3_GREEN_TOKENS.neutral90,
            borderColor: M3_GREEN_TOKENS.primaryDark,
          },
        },
        text: {
          color: M3_GREEN_TOKENS.primary,
          "&:hover": {
            backgroundColor: M3_GREEN_TOKENS.neutral90,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: M3_GREEN_TOKENS.white,
          border: `1px solid ${M3_GREEN_TOKENS.neutral90}`,
          borderRadius: 12,
          boxShadow: "none",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: "none",
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 8,
            "& fieldset": {
              borderColor: M3_GREEN_TOKENS.neutral90,
            },
            "&:hover fieldset": {
              borderColor: M3_GREEN_TOKENS.primary,
            },
            "&.Mui-focused fieldset": {
              borderColor: M3_GREEN_TOKENS.primary,
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: M3_GREEN_TOKENS.primary,
          color: M3_GREEN_TOKENS.white,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: M3_GREEN_TOKENS.neutral90,
          color: M3_GREEN_TOKENS.neutral10,
          border: `1px solid ${M3_GREEN_TOKENS.neutral90}`,
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: M3_GREEN_TOKENS.neutral60,
        },
      },
    },
  },
  shape: {
    borderRadius: "24px",
  },
  spacing: 8, // 8px base spacing unit
});

// Extend the theme type
declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
    tertiary: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
    tertiary?: PaletteOptions["primary"];
  }
  interface TypographyVariants {
    fontFamilySecondary: string;
  }

  interface TypographyVariantsOptions {
    fontFamilySecondary?: string;
  }
}
