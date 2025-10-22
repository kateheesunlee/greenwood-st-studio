import {
  Button,
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
} from "@mui/material";

export function ExampleMuiComponents() {
  return (
    <Box sx={{ p: 3, display: "flex", flexDirection: "column", gap: 2 }}>
      <Typography variant="h4" component="h1">
        MUI Theme with Design Tokens
      </Typography>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Primary Button
          </Typography>
          <Button variant="contained" sx={{ mr: 1 }}>
            Primary Action
          </Button>
          <Button variant="outlined" sx={{ mr: 1 }}>
            Secondary Action
          </Button>
          <Button variant="text">Text Action</Button>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            Color Chips
          </Typography>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            <Chip label="Primary" color="primary" />
            <Chip label="Secondary" color="secondary" />
            <Chip label="Accent" sx={{ backgroundColor: "accent.main" }} />
          </Box>
        </CardContent>
      </Card>

      <Typography variant="body1" color="text.secondary">
        This demonstrates how your design tokens are now integrated with MUI
        components. All colors, typography, and styling are consistent with your
        brand guidelines.
      </Typography>
    </Box>
  );
}
