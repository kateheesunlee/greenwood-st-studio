"use client";
import { useState, useMemo } from "react";
import {
  Box,
  Paper,
  Typography,
  Slider,
  TextField,
  Divider,
  IconButton,
  Tooltip,
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { LayeredGradient } from "../../components/LayeredGradient";

interface RadialGradientPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface LinearGradientConfig {
  angle: number;
}

export default function GradientBuilder() {
  const [mainColor, setMainColor] = useState("#5ae24b");
  const [threshold, setThreshold] = useState(0.5);
  const [opacity, setOpacity] = useState(1);
  const [hueShift, setHueShift] = useState(0);
  const [saturation, setSaturation] = useState(1);
  const [noiseIntensity, setNoiseIntensity] = useState(0.08);
  const [noiseFrequency, setNoiseFrequency] = useState(0.8);
  const [noiseOctaves, setNoiseOctaves] = useState(4);
  const [radialPositions, setRadialPositions] = useState<
    [RadialGradientPosition, RadialGradientPosition, RadialGradientPosition]
  >([
    { x: 20, y: 10, width: 1400, height: 800 }, // Gradient 1: Main color - largest
    { x: 80, y: 20, width: 1000, height: 500 }, // Gradient 2
    { x: 70, y: 80, width: 1200, height: 600 }, // Gradient 3
  ]);
  const [linearGradient, setLinearGradient] = useState<LinearGradientConfig>({
    angle: 135,
  });

  const updateRadialPosition = (
    index: number,
    field: keyof RadialGradientPosition,
    value: number
  ) => {
    const newPositions = [...radialPositions] as [
      RadialGradientPosition,
      RadialGradientPosition,
      RadialGradientPosition
    ];
    newPositions[index] = { ...newPositions[index], [field]: value };
    setRadialPositions(newPositions);
  };

  // Calculate colors (shared logic for preview and CSS)
  const calculatedColors = useMemo(() => {
    // Helper functions (same as in LayeredGradient)
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    };

    const rgbToHsl = (r: number, g: number, b: number) => {
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
    };

    const hslToRgb = (h: number, s: number, l: number) => {
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
    };

    const rgbToHex = (r: number, g: number, b: number) => {
      return (
        "#" +
        [r, g, b]
          .map((x) => {
            const hex = x.toString(16);
            return hex.length === 1 ? "0" + hex : hex;
          })
          .join("")
      );
    };

    // Calculate color variations (same logic as component)
    const rgb = hexToRgb(mainColor);
    if (!rgb) return "";

    const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);
    let hueShift1: number,
      hueShift2: number,
      hueShift3: number,
      hueShift4: number;

    if (threshold < 0.3) {
      const factor = threshold / 0.3;
      hueShift1 = -30 * (1 - factor * 0.5);
      hueShift2 = 15 * (1 - factor * 0.5);
      hueShift3 = -15 * (1 - factor * 0.5);
      hueShift4 = 30 * (1 - factor * 0.5);
    } else if (threshold > 0.7) {
      const factor = (threshold - 0.7) / 0.3;
      hueShift1 = -180 + 30 * (1 - factor);
      hueShift2 = -120 + 20 * (1 - factor);
      hueShift3 = 120 - 20 * (1 - factor);
      hueShift4 = 180 - 30 * (1 - factor);
    } else {
      const factor = (threshold - 0.3) / 0.4;
      hueShift1 = -15 - 165 * factor;
      hueShift2 = 7.5 - 127.5 * factor;
      hueShift3 = -7.5 + 127.5 * factor;
      hueShift4 = 15 + 165 * factor;
    }

    const sVariation = 12;
    const lVariation = 18;

    const generateColor = (
      localHueShift: number,
      sOffset: number,
      lOffset: number
    ) => {
      const adjustedHue = (hsl.h + localHueShift + hueShift + 360) % 360;
      const baseSaturation = Math.max(0, Math.min(100, hsl.s + sOffset));
      const adjustedSaturation = Math.max(
        0,
        Math.min(100, baseSaturation * saturation)
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
  }, [mainColor, threshold, hueShift, saturation]);

  // Generate CSS code using calculated colors
  const cssCode = useMemo(() => {
    if (!calculatedColors || calculatedColors.length < 6) return "";

    // Helper to convert hex to rgba
    const hexToRgb = (hex: string) => {
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result
        ? {
            r: parseInt(result[1], 16),
            g: parseInt(result[2], 16),
            b: parseInt(result[3], 16),
          }
        : null;
    };

    const hexToRgba = (hex: string, alpha: number) => {
      const rgb = hexToRgb(hex);
      if (!rgb) return `rgba(0, 0, 0, ${alpha})`;
      return `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${alpha})`;
    };

    const radial1 = `radial-gradient(${radialPositions[0].width}px ${
      radialPositions[0].height
    }px at ${radialPositions[0].x}% ${radialPositions[0].y}%, ${hexToRgba(
      calculatedColors[0],
      opacity
    )} 0%, transparent 60%)`;
    const radial2 = `radial-gradient(${radialPositions[1].width}px ${
      radialPositions[1].height
    }px at ${radialPositions[1].x}% ${radialPositions[1].y}%, ${hexToRgba(
      calculatedColors[1],
      opacity
    )} 0%, transparent 60%)`;
    const radial3 = `radial-gradient(${radialPositions[2].width}px ${
      radialPositions[2].height
    }px at ${radialPositions[2].x}% ${radialPositions[2].y}%, ${hexToRgba(
      calculatedColors[2],
      opacity
    )} 0%, transparent 60%)`;
    const linear = `linear-gradient(${linearGradient.angle}deg, ${hexToRgba(
      calculatedColors[3],
      opacity * 0.6
    )}, ${hexToRgba(calculatedColors[4], opacity * 0.7)}, ${hexToRgba(
      calculatedColors[5],
      opacity * 0.6
    )})`;

    const noiseSvg = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='${noiseFrequency}' numOctaves='${noiseOctaves}'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='${noiseIntensity}'/></svg>`;

    return `.my-gradient-bg {
  background: ${radial1}, ${radial2}, ${radial3}, ${linear};
  position: relative;
}

.my-gradient-bg::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("${noiseSvg}");
  pointer-events: none;
  z-index: 0;
}`;
  }, [
    calculatedColors,
    opacity,
    radialPositions,
    linearGradient,
    noiseIntensity,
    noiseFrequency,
    noiseOctaves,
  ]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(cssCode);
    // You could add a toast notification here
  };

  // Generate component props code
  const componentPropsCode = useMemo(() => {
    const formatRadialPositions = (positions: typeof radialPositions) => {
      return `[
  { x: ${positions[0].x}, y: ${positions[0].y}, width: ${positions[0].width}, height: ${positions[0].height} },
  { x: ${positions[1].x}, y: ${positions[1].y}, width: ${positions[1].width}, height: ${positions[1].height} },
  { x: ${positions[2].x}, y: ${positions[2].y}, width: ${positions[2].width}, height: ${positions[2].height} }
]`;
    };

    return `<LayeredGradient
  mainColor="${mainColor}"
  threshold={${threshold}}
  opacity={${opacity}}
  hueShift={${hueShift}}
  saturation={${saturation}}
  radialPositions={${formatRadialPositions(radialPositions)}}
  linearGradient={{ angle: ${linearGradient.angle} }}
  noiseIntensity={${noiseIntensity}}
  noiseFrequency={${noiseFrequency}}
  noiseOctaves={${noiseOctaves}}
>
  {/* Your content here */}
</LayeredGradient>`;
  }, [
    mainColor,
    threshold,
    opacity,
    hueShift,
    saturation,
    radialPositions,
    linearGradient,
    noiseIntensity,
    noiseFrequency,
    noiseOctaves,
  ]);

  const copyPropsToClipboard = () => {
    navigator.clipboard.writeText(componentPropsCode);
  };

  return (
    <Box
      sx={{
        maxWidth: "100vw",
        maxHeight: `calc(100vh - 64px)`,
        overflow: "hidden",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        borderTop: "1px solid",
        borderColor: (theme) => theme.palette.divider,
      }}
    >
      {/* Mobile View Notice */}
      <Box
        sx={{
          display: { xs: "block", md: "none" },
          p: 2,
          color: "info.main",
          textAlign: "center",
          borderBottom: "1px solid",
          borderColor: (theme) => theme.palette.divider,
        }}
      >
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          This page is desktop-only
        </Typography>
      </Box>

      {/* Left: Controls */}
      <Paper
        sx={{
          width: { xs: "100%", md: 320 },
          borderRadius: 0,
          borderRightWidth: { xs: 0, md: 1 },
          borderBottomWidth: { xs: 1, md: 0 },
          borderStyle: "solid",
          borderColor: (theme) => theme.palette.divider,
          height: { xs: "auto", md: "calc(100vh - 64px)" },
          minHeight: { xs: "50vh", md: "auto" },
          maxHeight: { xs: "50vh", md: "calc(100vh - 64px)" },
          overflowY: "hidden",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Header */}
        <Box sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            Gradient Controls
          </Typography>
        </Box>
        {/* Controls */}
        <Box sx={{ p: 3, overflowY: "auto", flex: 1 }}>
          {/* Main Color */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Main Color
            </Typography>
            <TextField
              type="color"
              value={mainColor}
              onChange={(e) => setMainColor(e.target.value)}
              fullWidth
              sx={{
                "& input": {
                  height: 40,
                  cursor: "pointer",
                },
              }}
            />
            <TextField
              value={mainColor}
              onChange={(e) => setMainColor(e.target.value)}
              size="small"
              fullWidth
              sx={{ mt: 1 }}
              placeholder="#43673F"
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Threshold */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Threshold: {threshold.toFixed(2)}
            </Typography>
            <Slider
              value={threshold}
              onChange={(_, value) => setThreshold(value as number)}
              min={0}
              max={1}
              step={0.01}
            />
          </Box>

          {/* Opacity */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Opacity: {opacity.toFixed(2)}
            </Typography>
            <Slider
              value={opacity}
              onChange={(_, value) => setOpacity(value as number)}
              min={0}
              max={1}
              step={0.01}
            />
          </Box>

          {/* Hue Shift */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Hue Shift: {hueShift}°
            </Typography>
            <Slider
              value={hueShift}
              onChange={(_, value) => setHueShift(value as number)}
              min={-180}
              max={180}
              step={1}
            />
          </Box>

          {/* Saturation */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Saturation: {saturation.toFixed(2)}
            </Typography>
            <Slider
              value={saturation}
              onChange={(_, value) => setSaturation(value as number)}
              min={0}
              max={2}
              step={0.01}
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Radial Gradient Positions */}
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
            Radial Gradient Positions
          </Typography>

          {[0, 1, 2].map((index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Box
                sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}
              >
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  Gradient {index + 1}
                </Typography>
                {calculatedColors && calculatedColors[index] && (
                  <Box
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "4px",
                      backgroundColor: calculatedColors[index],
                      border: "1px solid",
                      borderColor: (theme) => theme.palette.divider,
                      flexShrink: 0,
                    }}
                  />
                )}
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="caption"
                  sx={{ display: "block", mb: 0.5 }}
                >
                  X: {radialPositions[index].x}%
                </Typography>
                <Slider
                  value={radialPositions[index].x}
                  onChange={(_, value) =>
                    updateRadialPosition(index, "x", value as number)
                  }
                  min={0}
                  max={100}
                  step={1}
                  size="small"
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="caption"
                  sx={{ display: "block", mb: 0.5 }}
                >
                  Y: {radialPositions[index].y}%
                </Typography>
                <Slider
                  value={radialPositions[index].y}
                  onChange={(_, value) =>
                    updateRadialPosition(index, "y", value as number)
                  }
                  min={0}
                  max={100}
                  step={1}
                  size="small"
                />
              </Box>
              <Box sx={{ mb: 1 }}>
                <Typography
                  variant="caption"
                  sx={{ display: "block", mb: 0.5 }}
                >
                  Width: {radialPositions[index].width}px
                </Typography>
                <Slider
                  value={radialPositions[index].width}
                  onChange={(_, value) =>
                    updateRadialPosition(index, "width", value as number)
                  }
                  min={200}
                  max={2000}
                  step={50}
                  size="small"
                />
              </Box>
              <Box>
                <Typography
                  variant="caption"
                  sx={{ display: "block", mb: 0.5 }}
                >
                  Height: {radialPositions[index].height}px
                </Typography>
                <Slider
                  value={radialPositions[index].height}
                  onChange={(_, value) =>
                    updateRadialPosition(index, "height", value as number)
                  }
                  min={200}
                  max={2000}
                  step={50}
                  size="small"
                />
              </Box>
            </Box>
          ))}

          <Divider sx={{ my: 3 }} />

          {/* Linear Gradient Controls */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
            <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
              Linear Gradient
            </Typography>
            {calculatedColors && calculatedColors.length >= 6 && (
              <Box sx={{ display: "flex", gap: 0.5 }}>
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "3px",
                    backgroundColor: calculatedColors[3],
                    border: "1px solid",
                    borderColor: "divider",
                    flexShrink: 0,
                  }}
                />
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "3px",
                    backgroundColor: calculatedColors[4],
                    border: "1px solid",
                    borderColor: "divider",
                    flexShrink: 0,
                  }}
                />
                <Box
                  sx={{
                    width: 16,
                    height: 16,
                    borderRadius: "3px",
                    backgroundColor: calculatedColors[5],
                    border: "1px solid",
                    borderColor: "divider",
                    flexShrink: 0,
                  }}
                />
              </Box>
            )}
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Angle: {linearGradient.angle}°
            </Typography>
            <Slider
              value={linearGradient.angle}
              onChange={(_, value) =>
                setLinearGradient({ angle: value as number })
              }
              min={0}
              max={360}
              step={1}
            />
          </Box>

          <Divider sx={{ my: 3 }} />

          {/* Noise Controls */}
          <Typography variant="subtitle2" sx={{ mb: 2, fontWeight: 600 }}>
            Noise Texture
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Opacity: {noiseIntensity.toFixed(2)}
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}
            >
              <Typography
                variant="caption"
                sx={{ fontSize: "0.7rem", color: "text.secondary" }}
              >
                Subtle
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontSize: "0.7rem", color: "text.secondary" }}
              >
                Strong
              </Typography>
            </Box>
            <Slider
              value={noiseIntensity}
              onChange={(_, value) => setNoiseIntensity(value as number)}
              min={0}
              max={0.3}
              step={0.01}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Frequency: {noiseFrequency.toFixed(2)}
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}
            >
              <Typography
                variant="caption"
                sx={{ fontSize: "0.7rem", color: "text.secondary" }}
              >
                Large
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontSize: "0.7rem", color: "text.secondary" }}
              >
                Small
              </Typography>
            </Box>
            <Slider
              value={noiseFrequency}
              onChange={(_, value) => setNoiseFrequency(value as number)}
              min={0.1}
              max={2}
              step={0.1}
            />
          </Box>

          <Box sx={{ mb: 3 }}>
            <Typography variant="body2" sx={{ mb: 1, fontWeight: 500 }}>
              Octaves: {noiseOctaves}
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}
            >
              <Typography
                variant="caption"
                sx={{ fontSize: "0.7rem", color: "text.secondary" }}
              >
                Smooth
              </Typography>
              <Typography
                variant="caption"
                sx={{ fontSize: "0.7rem", color: "text.secondary" }}
              >
                Detailed
              </Typography>
            </Box>
            <Slider
              value={noiseOctaves}
              onChange={(_, value) => setNoiseOctaves(value as number)}
              min={1}
              max={8}
              step={1}
            />
          </Box>

          <Divider sx={{ my: 3 }} />
        </Box>
      </Paper>

      {/* Center: Preview - Fixed */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: { xs: 2, md: 3 },
          height: { xs: "auto", md: "100vh" },
          minHeight: { xs: "50vh", md: "auto" },
          overflow: "hidden",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            mb: 3,
            color: "text.primary",
            fontWeight: 600,
            width: "100%",
          }}
        >
          Gradient Preview
        </Typography>
        <LayeredGradient
          mainColor={mainColor}
          threshold={threshold}
          opacity={opacity}
          hueShift={hueShift}
          saturation={saturation}
          radialPositions={radialPositions}
          linearGradient={linearGradient}
          noiseIntensity={noiseIntensity}
          noiseFrequency={noiseFrequency}
          noiseOctaves={noiseOctaves}
          sx={{
            width: "100%",
            maxWidth: 800,
            borderRadius: 0.5,
            overflow: "hidden",
            boxShadow: 4,
            maxHeight: "600px",
            flex: 1,
          }}
        >
          {""}
        </LayeredGradient>
      </Box>

      {/* Right: CSS Code */}
      <Paper
        sx={{
          borderRadius: 0,
          width: { xs: "100%", md: 400 },
          borderStyle: "solid",
          borderColor: (theme) => theme.palette.divider,
          borderLeftWidth: { xs: 0, md: 1 },
          borderTopWidth: { xs: 1, md: 0 },
          display: "flex",
          flexDirection: "column",
          height: { xs: "auto", md: "calc(100vh - 64px)" },
          minHeight: { xs: "auto", md: "auto" },
          maxHeight: { xs: "none", md: "calc(100vh - 64px)" },
          overflow: { xs: "visible", md: "auto" },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            p: 3,
            minHeight: { xs: 72, md: "auto" }, // 타이틀 높이만큼
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 600 }}>
            CSS Code
          </Typography>
          <Tooltip title="Copy to clipboard">
            <IconButton onClick={copyToClipboard} size="small">
              <ContentCopyIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <Box
          sx={{
            p: 3,
            flex: 1,
            overflowY: "auto",
            display: { xs: "none", md: "block" },
          }}
        >
          <Paper
            sx={{
              flex: 1,
              p: 2,
              borderRadius: 0.5,
              bgcolor: "grey.900",
              color: "grey.100",
              overflowY: "auto",
              fontFamily: "monospace",
              fontSize: "0.75rem",
              lineHeight: 1.6,
              minHeight: 0, // Important for flex scrolling
              mb: 3,
            }}
          >
            <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>{cssCode}</pre>
          </Paper>

          {/* Component Props Section */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Component Props
            </Typography>
            <Tooltip title="Copy to clipboard">
              <IconButton onClick={copyPropsToClipboard} size="small">
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </Box>
          <Paper
            sx={{
              flex: 1,
              p: 2,
              borderRadius: 0.5,
              bgcolor: "grey.900",
              color: "grey.100",
              overflowY: "auto",
              fontFamily: "monospace",
              fontSize: "0.75rem",
              lineHeight: 1.6,
              minHeight: 0,
            }}
          >
            <pre style={{ margin: 0, whiteSpace: "pre-wrap" }}>
              {componentPropsCode}
            </pre>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
}
