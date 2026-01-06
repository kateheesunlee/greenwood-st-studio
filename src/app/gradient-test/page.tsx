"use client";
import { useState } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  Container,
  Divider,
} from "@mui/material";

export default function GradientTest() {
  const [cssCode, setCssCode] = useState(`.my-gradient-bg {
  background: radial-gradient(1400px 800px at 20% 10%, rgba(90, 226, 75, 1) 0%, transparent 60%),
              radial-gradient(1000px 500px at 80% 20%, rgba(90, 226, 75, 1) 0%, transparent 60%),
              radial-gradient(1200px 600px at 70% 80%, rgba(90, 226, 75, 1) 0%, transparent 60%),
              linear-gradient(135deg, rgba(90, 226, 75, 0.6), rgba(90, 226, 75, 0.7), rgba(90, 226, 75, 0.6));
  position: relative;
}

.my-gradient-bg::before {
  content: "";
  position: fixed;
  inset: 0;
  background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.08'/></svg>");
  pointer-events: none;
  z-index: 0;
}`);

  const [styleElement, setStyleElement] = useState<HTMLStyleElement | null>(
    null
  );

  const applyCSS = () => {
    // Remove existing style element if any
    if (styleElement) {
      document.head.removeChild(styleElement);
    }

    // Create new style element
    const style = document.createElement("style");
    style.textContent = cssCode;
    document.head.appendChild(style);
    setStyleElement(style);
  };

  const clearCSS = () => {
    if (styleElement) {
      document.head.removeChild(styleElement);
      setStyleElement(null);
    }
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" sx={{ mb: 4, fontWeight: 600 }}>
        Gradient CSS Test Page
      </Typography>

      <Box
        sx={{
          display: "flex",
          gap: 3,
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        {/* Left: CSS Input */}
        <Paper sx={{ p: 3, flex: 1, minWidth: { lg: 400 } }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            CSS Code
          </Typography>
          <TextField
            multiline
            fullWidth
            rows={20}
            value={cssCode}
            onChange={(e) => setCssCode(e.target.value)}
            sx={{
              "& .MuiInputBase-root": {
                fontFamily: "monospace",
                fontSize: "0.875rem",
              },
            }}
            placeholder="Paste your CSS code here..."
          />
          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <Button variant="contained" onClick={applyCSS} fullWidth>
              Apply CSS
            </Button>
            <Button variant="outlined" onClick={clearCSS} fullWidth>
              Clear CSS
            </Button>
          </Box>
        </Paper>

        {/* Right: Preview */}
        <Paper sx={{ p: 3, flex: 1, minWidth: { lg: 400 } }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
            Preview
          </Typography>
          <Box
            className="my-gradient-bg"
            sx={{
              minHeight: 500,
              borderRadius: 2,
              overflow: "hidden",
              position: "relative",
              border: "1px solid",
              borderColor: "divider",
            }}
          >
            <Box
              sx={{
                position: "relative",
                zIndex: 1,
                p: 4,
                color: "text.primary",
              }}
            >
              <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
                Gradient Background Test
              </Typography>
              <Typography variant="body1" sx={{ mb: 2 }}>
                This is a test area to preview your gradient CSS. Paste your CSS
                code in the left panel and click &quot;Apply CSS&quot; to see it
                in action.
              </Typography>
              <Typography variant="body2" color="text.secondary">
                The gradient background is applied to the element with the
                class&nbsp;
                <code>my-gradient-bg</code>.
              </Typography>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
            <strong>Instructions:</strong>
          </Typography>
          <Typography variant="body2" color="text.secondary" component="div">
            <ol style={{ margin: 0, paddingLeft: 20 }}>
              <li>Copy CSS code from the Gradient Builder</li>
              <li>Paste it into the CSS Code field</li>
              <li>Click &quot;Apply CSS&quot; to see the preview</li>
              <li>Use &quot;Clear CSS&quot; to remove the applied styles</li>
            </ol>
          </Typography>
        </Paper>
      </Box>
    </Container>
  );
}
