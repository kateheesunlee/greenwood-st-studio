"use client";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import { ScrollAnimation } from "../../components/ScrollAnimation";

export default function WineLogPage() {
  return (
    <Box component="main" sx={{ flex: 1 }}>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #722F37 0%, #8B1538 100%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          p: { xs: 2, sm: 4 },
          gap: 4,
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <Typography
              variant="h1"
              component="h1"
              sx={{
                fontFamily: "var(--font-pacifico)",
                color: "white",
                fontWeight: 400,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4rem" },
              }}
            >
              Wine Log
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "white",
                opacity: 0.9,
                mb: 4,
                fontSize: { xs: "0.9rem", md: "1.1rem" },
              }}
            >
              Document wine tastings, vineyard visits, and build your personal
              wine collection database.
            </Typography>

            <Button
              variant="outlined"
              sx={{
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              Coming Soon
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        component="section"
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(45deg, #f4f4f4 0%, #e8f5e8 100%)",
          display: "flex",
          alignItems: "center",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <ScrollAnimation direction="up" distance={40} delay={0.1}>
            <Typography
              variant="h2"
              component="h2"
              sx={{
                fontFamily: "var(--font-pacifico)",
                fontWeight: 400,
                color: "primary.main",
                textAlign: "center",
                mb: 6,
              }}
            >
              Features
            </Typography>
          </ScrollAnimation>
          <Grid container spacing={4}>
            {[
              {
                title: "Wine Tasting Notes",
                description:
                  "Record detailed tasting notes, aroma profiles, and personal ratings for each wine.",
              },
              {
                title: "Vineyard Visits",
                description:
                  "Document vineyard visits, winery tours, and memorable experiences.",
              },
              {
                title: "Collection Management",
                description:
                  "Build and manage your personal wine collection with inventory tracking.",
              },
              {
                title: "Food Pairings",
                description:
                  "Discover and record perfect food pairings for your favorite wines.",
              },
            ].map((feature, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index} component="div">
                <ScrollAnimation
                  direction="up"
                  distance={50}
                  delay={0.2 + index * 0.1}
                >
                  <Card
                    sx={{
                      height: "100%",
                      backgroundColor: "white",
                      borderRadius: 2,
                      borderWidth: 0,
                      "&:hover": {
                        transform: "translateY(-4px)",
                        transition: "transform 0.3s ease",
                      },
                    }}
                  >
                    <CardContent sx={{ p: 4 }}>
                      <Typography
                        variant="h5"
                        component="h3"
                        sx={{
                          color: "primary.main",
                          mb: 2,
                          fontWeight: 600,
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {feature.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Status Section */}
      <Box
        component="section"
        sx={{
          minHeight: "50vh",
          background:
            "linear-gradient(180deg, #4C5B20 0%, #3d4a1a 50%, #2e3a14 100%)",
          display: "flex",
          alignItems: "center",
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <ScrollAnimation direction="up" distance={40} delay={0.1}>
              <Typography
                variant="h2"
                component="h2"
                sx={{
                  fontFamily: "var(--font-pacifico)",
                  fontWeight: 400,
                  color: "white",
                  mb: 4,
                }}
              >
                Development Status
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation direction="up" distance={30} delay={0.2}>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  opacity: 0.9,
                  mb: 6,
                }}
              >
                {`Currently in planning phase. Follow the progress and get
                notified when it's ready!`}
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation direction="up" distance={20} delay={0.3}>
              <Button
                variant="outlined"
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: "rgba(255,255,255,0.1)",
                  },
                }}
              >
                Get Notified
              </Button>
            </ScrollAnimation>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
