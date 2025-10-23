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

export default function ParentAssistantPage() {
  return (
    <Box component="main" sx={{ flex: 1 }}>
      {/* Hero Section */}
      <Box
        component="section"
        sx={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #059669 0%, #10B981 100%)",
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
              Parent Assistant
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
              Smart tools for busy parents - labeling, summarizing, and
              translating emails. Create calendar events and tasks from emails.
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
                title: "Email Organization",
                description:
                  "Automatically label, categorize, and prioritize emails from schools, activities, and family communications.",
              },
              {
                title: "Smart Summaries",
                description:
                  "Get AI-generated summaries of lengthy emails, highlighting important dates, deadlines, and action items.",
              },
              {
                title: "Calendar Integration",
                description:
                  "Automatically create calendar events from school announcements, sports schedules, and activity notifications.",
              },
              {
                title: "Translation Support",
                description:
                  "Translate emails and documents in multiple languages to stay connected with diverse school communities.",
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
                {`Currently in research phase. Follow the progress and get
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
