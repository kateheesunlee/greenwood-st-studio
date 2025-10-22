import { createTheme } from "@mui/material/styles";
import { tokens } from "./tokens";

// Create MUI theme using design tokens
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: tokens.primary, // #4C5B20 - deep olive
      light: tokens.secondary, // #919C7C - olive grey (lighter variant)
      dark: tokens.black, // #000000 - darker variant
      contrastText: tokens.white, // #FFFFFF
    },
    secondary: {
      main: tokens.secondary, // #919C7C - olive grey
      light: tokens.grey300, // #BABFB6 - lighter grey
      dark: tokens.grey600, // #929292 - darker grey
      contrastText: tokens.white, // #FFFFFF
    },
    background: {
      default: tokens.nearWhite, // #F4F4F4 - near white
      paper: tokens.white, // #FFFFFF - white
    },
    text: {
      primary: tokens.black, // #000000 - black
      secondary: tokens.grey600, // #929292 - grey
    },
    grey: {
      300: tokens.grey300, // #BABFB6
      600: tokens.grey600, // #929292
      900: tokens.black, // #000000
    },
    // Custom colors for your brand
    accent: {
      main: tokens.accentBg, // #E1ECC9 - accent background
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
      color: tokens.black,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      color: tokens.black,
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 500,
      color: tokens.black,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 500,
      color: tokens.black,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      color: tokens.black,
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 500,
      color: tokens.black,
    },
    body1: {
      fontSize: "0.875rem", // Smaller than default 1rem
      color: tokens.black,
    },
    body2: {
      fontSize: "0.875rem",
      color: tokens.grey600,
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
          borderRadius: 8,
          padding: "8px 16px",
          fontWeight: 500,
        },
        contained: {
          backgroundColor: tokens.primary,
          color: tokens.white,
          "&:hover": {
            backgroundColor: tokens.secondary,
          },
        },
        outlined: {
          borderColor: tokens.primary,
          color: tokens.primary,
          "&:hover": {
            backgroundColor: tokens.accentBg,
            borderColor: tokens.secondary,
          },
        },
        text: {
          color: tokens.primary,
          "&:hover": {
            backgroundColor: tokens.accentBg,
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.white,
          border: `1px solid ${tokens.grey300}`,
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
              borderColor: tokens.grey300,
            },
            "&:hover fieldset": {
              borderColor: tokens.primary,
            },
            "&.Mui-focused fieldset": {
              borderColor: tokens.primary,
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.primary,
          color: tokens.white,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: tokens.accentBg,
          color: tokens.black,
          border: `1px solid ${tokens.grey300}`,
        },
      },
    },
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8, // 8px base spacing unit
});

// Extend the theme type to include custom colors and typography
declare module "@mui/material/styles" {
  interface Palette {
    accent: Palette["primary"];
  }
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }

  interface TypographyVariants {
    fontFamilySecondary: string;
  }

  interface TypographyVariantsOptions {
    fontFamilySecondary?: string;
  }
}
