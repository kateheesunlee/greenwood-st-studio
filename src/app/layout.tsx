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
  description:
    "A personal playground for design, code, and everyday experiments by Kate Heesun Lee.",
  openGraph: {
    title: "Greenwood St Studio",
    description:
      "A personal playground for design, code, and everyday experiments.",
    url: "https://greenwoodststudio.com",
    siteName: "Greenwood Street Studio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Greenwood St Studio preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
