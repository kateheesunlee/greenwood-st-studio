import type { Metadata } from "next";
import { Geist_Mono, Pacifico, Inter } from "next/font/google";
import "./globals.css";
import { MuiThemeProvider } from "../design/MuiThemeProvider";
import { TopNavigation } from "../components/TopNavigation";
import { ScrollToTopButton } from "../components/ScrollToTopButton";
import { Box } from "@mui/material";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Greenwood Street Studio",
  description: "Greenwood Street Studio - Creative Design Studio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${pacifico.variable} antialiased`}
      >
        <MuiThemeProvider>
          <Box
            sx={{
              minHeight: "100vh",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <TopNavigation />
            <Box
              component="main"
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {children}
            </Box>
            <ScrollToTopButton />
          </Box>
        </MuiThemeProvider>
      </body>
    </html>
  );
}
