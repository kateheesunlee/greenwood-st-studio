import { Typography, Box, Paper } from "@mui/material";

export function FontShowcase() {
  return (
    <Paper sx={{ p: 4, m: 2 }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {/* Primary Font (Inter) - Default MUI Typography */}
        <Box>
          <Typography variant="h6" color="primary" gutterBottom>
            Primary Font (Inter) - Default MUI Typography
          </Typography>
          <Typography variant="h1">Heading 1 - Inter</Typography>
          <Typography variant="h2">Heading 2 - Inter</Typography>
          <Typography variant="body1">
            This is body text using Inter font. It&apos;s clean, modern, and
            highly readable for UI elements.
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Secondary text also uses Inter for consistency.
          </Typography>
        </Box>

        {/* Secondary Font (Pacifico) - Accent Typography */}
        <Box>
          <Typography variant="h6" color="primary" gutterBottom>
            Secondary Font (Pacifico) - Accent Typography
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontFamily: "var(--font-pacifico)",
              color: "primary.main",
            }}
          >
            Welcome Message
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "var(--font-pacifico)",
              color: "secondary.main",
            }}
          >
            Creative Studio
          </Typography>
        </Box>

        {/* Tailwind Classes */}
        <Box>
          <Typography variant="h6" color="primary" gutterBottom>
            Tailwind Classes Available
          </Typography>
          <div className="font-sans text-lg">
            font-sans (Inter) - For general text
          </div>
          <div className="font-display text-2xl text-primary">
            font-display (Pacifico) - For headings and accents
          </div>
          <div className="font-mono text-sm bg-gray-100 p-2 rounded">
            font-mono (Geist Mono) - For code
          </div>
        </Box>
      </Box>
    </Paper>
  );
}
