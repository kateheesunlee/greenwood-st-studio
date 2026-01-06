"use client";
import { Box, BoxProps, SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";

interface RadialGradientPosition {
  x: number; // 0-100, percentage from left
  y: number; // 0-100, percentage from top
  width: number; // width in px
  height: number; // height in px
}

interface LinearGradientConfig {
  angle: number; // 0-360, gradient direction in degrees
}

interface LayeredGradientProps extends Omit<BoxProps, "sx"> {
  mainColor: string; // hex color
  threshold?: number; // 0-1, controls color similarity (0 = similar, 1 = complementary)
  opacity?: number; // 0-1, background opacity (default: 0.3)
  hueShift?: number; // -180 to 180, shifts all colors' hue (default: 0)
  saturation?: number; // 0-2, saturation multiplier (1 = normal, <1 = muted, >1 = vibrant) (default: 1)
  radialPositions?: [
    RadialGradientPosition,
    RadialGradientPosition,
    RadialGradientPosition
  ]; // positions for 3 radial gradients
  linearGradient?: LinearGradientConfig; // linear gradient config
  noiseIntensity?: number; // 0-1, noise texture opacity (default: 0.08)
  noiseFrequency?: number; // baseFrequency for noise (default: 0.8)
  noiseOctaves?: number; // numOctaves for noise (default: 4)
  children: ReactNode;
  sx?: SxProps<Theme>; // Explicitly include sx prop
}

// Helper: Hex to RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

// Helper: RGB to HSL
function rgbToHsl(
  r: number,
  g: number,
  b: number
): {
  h: number;
  s: number;
  l: number;
} {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        break;
      case g:
        h = ((b - r) / d + 2) / 6;
        break;
      case b:
        h = ((r - g) / d + 4) / 6;
        break;
    }
  }

  return { h: h * 360, s: s * 100, l: l * 100 };
}

// Helper: HSL to RGB
function hslToRgb(
  h: number,
  s: number,
  l: number
): {
  r: number;
  g: number;
  b: number;
} {
  h /= 360;
  s /= 100;
  l /= 100;

  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p: number, q: number, t: number) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return {
    r: Math.round(r * 255),
    g: Math.round(g * 255),
    b: Math.round(b * 255),
  };
}

// Helper: RGB to Hex
function rgbToHex(r: number, g: number, b: number): string {
  return (
    "#" +
    [r, g, b]
      .map((x) => {
        const hex = x.toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      })
      .join("")
  );
}

// Calculate color variations based on threshold
// Returns 6 colors for rich gradient (like original CSS)
function calculateColorVariations(
  mainColor: string,
  threshold: number,
  hueShift: number = 0,
  saturationMultiplier: number = 1
): string[] {
  const rgb = hexToRgb(mainColor);
  if (!rgb)
    return [mainColor, mainColor, mainColor, mainColor, mainColor, mainColor];

  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  // Calculate hue shift based on threshold
  // threshold < 0.3: analogous (similar colors, ±30 degrees)
  // threshold > 0.7: complementary (opposite colors, ±180 degrees)
  // in between: interpolated
  let hueShift1: number;
  let hueShift2: number;
  let hueShift3: number;
  let hueShift4: number;

  if (threshold < 0.3) {
    // Similar colors (analogous)
    const factor = threshold / 0.3;
    hueShift1 = -30 * (1 - factor * 0.5); // -30 to -15
    hueShift2 = 15 * (1 - factor * 0.5); // 15 to 7.5
    hueShift3 = -15 * (1 - factor * 0.5); // -15 to -7.5
    hueShift4 = 30 * (1 - factor * 0.5); // 30 to 15
  } else if (threshold > 0.7) {
    // Complementary colors
    const factor = (threshold - 0.7) / 0.3;
    hueShift1 = -180 + 30 * (1 - factor); // -180 to -150
    hueShift2 = -120 + 20 * (1 - factor); // -120 to -100
    hueShift3 = 120 - 20 * (1 - factor); // 120 to 100
    hueShift4 = 180 - 30 * (1 - factor); // 180 to 150
  } else {
    // Interpolated between analogous and complementary
    const factor = (threshold - 0.3) / 0.4;
    hueShift1 = -15 - 165 * factor; // -15 to -180
    hueShift2 = 7.5 - 127.5 * factor; // 7.5 to -120
    hueShift3 = -7.5 + 127.5 * factor; // -7.5 to 120
    hueShift4 = 15 + 165 * factor; // 15 to 180
  }

  // Calculate saturation and lightness variations
  const sVariation = 12; // ±12% saturation
  const lVariation = 18; // ±18% lightness

  // Generate 6 colors with variations
  const generateColor = (
    localHueShift: number,
    sOffset: number,
    lOffset: number
  ): string => {
    // Apply global hue shift to all colors
    const adjustedHue = (hsl.h + localHueShift + hueShift + 360) % 360;
    // Apply saturation multiplier (scale around base saturation)
    const baseSaturation = Math.max(0, Math.min(100, hsl.s + sOffset));
    const adjustedSaturation = Math.max(
      0,
      Math.min(100, baseSaturation * saturationMultiplier)
    );
    const colorHsl = {
      h: adjustedHue,
      s: adjustedSaturation,
      l: Math.max(0, Math.min(100, hsl.l + lOffset)),
    };
    const colorRgb = hslToRgb(colorHsl.h, colorHsl.s, colorHsl.l);
    return rgbToHex(colorRgb.r, colorRgb.g, colorRgb.b);
  };

  return [
    generateColor(0, 0, 0), // Main color (Gradient 1 - largest, base layer)
    generateColor(hueShift1, -sVariation, lVariation), // Color 2 (was Color 1)
    generateColor(hueShift2, sVariation * 0.5, -lVariation * 0.5), // Color 3 (was Color 2)
    generateColor(hueShift3, -sVariation * 0.5, lVariation * 0.5), // Color 4 (was Color 3)
    generateColor(hueShift4, sVariation, -lVariation), // Color 5
    generateColor(hueShift2 * 0.7, sVariation * 0.7, lVariation * 0.7), // Color 6
  ];
}

export function LayeredGradient({
  mainColor,
  threshold = 0.5,
  opacity = 0.3,
  hueShift = 0,
  saturation = 1,
  radialPositions,
  linearGradient,
  noiseIntensity = 0.08,
  noiseFrequency = 0.8,
  noiseOctaves = 4,
  children,
  sx,
  ...boxProps
}: LayeredGradientProps) {
  const colors = calculateColorVariations(
    mainColor,
    threshold,
    hueShift,
    saturation
  );

  // Convert hex colors to rgba with opacity
  const hexToRgba = (hex: string, alpha: number): string => {
    const rgb = hexToRgb(hex);
    if (!rgb) return `rgba(0, 0, 0, ${alpha})`;
    return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
  };

  // Generate noise texture SVG
  const noiseSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='${noiseFrequency}' numOctaves='${noiseOctaves}'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='${noiseIntensity}'/></svg>`;

  // Default radial gradient positions
  // Gradient 1 (main color) should be largest as base layer
  const defaultPositions: [
    RadialGradientPosition,
    RadialGradientPosition,
    RadialGradientPosition
  ] = [
    { x: 20, y: 10, width: 1400, height: 800 }, // Gradient 1: Main color - largest
    { x: 80, y: 20, width: 1000, height: 500 }, // Gradient 2: was Color 1
    { x: 70, y: 80, width: 1200, height: 600 }, // Gradient 3: was Color 2
  ];

  const positions = radialPositions || defaultPositions;

  // Default linear gradient config
  const defaultLinearGradient: LinearGradientConfig = {
    angle: 135,
  };

  const linearConfig = linearGradient || defaultLinearGradient;

  // Linear gradient with configurable angle
  // Uses colors[3], colors[4], colors[5] (was Color 3, Color 5, Color 6)
  const linearGradientStr = `linear-gradient(${
    linearConfig.angle
  }deg, ${hexToRgba(colors[3], opacity * 0.6)}, ${hexToRgba(
    colors[4],
    opacity * 0.7
  )}, ${hexToRgba(colors[5], opacity * 0.6)})`;

  // Build rich gradient with multiple radial-gradients and linear-gradient
  // Gradient 1: Main color (largest, base layer)
  // Gradient 2-3: Variations from main color
  const radialGradient1 = `radial-gradient(${positions[0].width}px ${
    positions[0].height
  }px at ${positions[0].x}% ${positions[0].y}%, ${hexToRgba(
    colors[0], // Main color
    opacity
  )} 0%, transparent 60%)`;
  const radialGradient2 = `radial-gradient(${positions[1].width}px ${
    positions[1].height
  }px at ${positions[1].x}% ${positions[1].y}%, ${hexToRgba(
    colors[1], // was Color 1
    opacity
  )} 0%, transparent 60%)`;
  const radialGradient3 = `radial-gradient(${positions[2].width}px ${
    positions[2].height
  }px at ${positions[2].x}% ${positions[2].y}%, ${hexToRgba(
    colors[2], // was Color 2
    opacity
  )} 0%, transparent 60%)`;

  const baseSx: SxProps<Theme> = {
    position: "relative",
    background: `${radialGradient1}, ${radialGradient2}, ${radialGradient3}, ${linearGradientStr}`,
    "&::before": {
      content: '""',
      position: "absolute",
      inset: 0,
      backgroundImage: `url("${noiseSvg}")`,
      pointerEvents: "none",
      zIndex: 0,
    },
    "& > *": {
      position: "relative",
      zIndex: 1,
    },
  };

  return (
    <Box
      component="section"
      {...boxProps}
      sx={sx ? ([baseSx, sx] as SxProps<Theme>) : baseSx}
    >
      {children}
    </Box>
  );
}
