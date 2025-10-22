import { Typography, Box } from "@mui/material";

export function PacificoExample() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography
        variant="h3"
        sx={{
          fontFamily: "var(--font-pacifico)",
          color: "primary.main",
          textAlign: "center",
        }}
      >
        Welcome to Greenwood Street Studio
      </Typography>

      <Typography
        variant="h6"
        sx={{
          fontFamily: "var(--font-pacifico)",
          color: "secondary.main",
          textAlign: "center",
          mt: 2,
        }}
      >
        Creative Design Studio
      </Typography>
    </Box>
  );
}
