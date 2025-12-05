"use client";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Typography,
  Container,
  Grid,
  Button,
  Divider,
  useTheme,
} from "@mui/material";

import MailOutlineIcon from "@mui/icons-material/MailOutline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import TranslateIcon from "@mui/icons-material/Translate";
import SummarizeIcon from "@mui/icons-material/Summarize";

import { ScrollAnimation } from "../../components/ScrollAnimation";

import dearPaloWebImage from "../../../public/images/dealpalo_web.png";
import AutomationPipeline from "./AutomationPipeline";

const DEAR_PALO_COLOR = "#10B981";
const DEAR_PALO_DARK_COLOR = "#0f855a";
const DARK_SURFACE_COLOR = "#484f4d";
const DARK_BACKGROUND_COLOR = "#2a2e2d";

const features = [
  {
    title: "Email Organization",
    description:
      "Automatically label and prioritize school, activities, and community emails so everything lands where it belongs.",
    icon: MailOutlineIcon,
  },
  {
    title: "Smart Summaries",
    description:
      "AI distills lengthy messages into highlights with deadlines, contacts, and action items parents can act on quickly.",
    icon: SummarizeIcon,
  },
  {
    title: "Calendar Sync",
    description:
      "Important dates turn into calendar events with reminders—sports, field trips, and payments stay on schedule.",
    icon: EventAvailableIcon,
  },
  {
    title: "Live Translations",
    description:
      "Translate incoming messages into the parent’s preferred language without losing context or attachments.",
    icon: TranslateIcon,
  },
];

const howItWorks = [
  "Connect your Google account and configure each child's settings.",
  "Dear Palo sets up Gmail labels, filters, and folders instantly.",
  "Incoming emails are analyzed and processed — translations, calendar events, and tasks are generated automatically.",
  "The dashboard tracks automation metrics: emails translated, schedules created, and tasks generated.",
];

const aiCapabilities = [
  "Understands the intent of each email (announcement, event, permission form, task).",
  "Extracts key dates, locations, and required actions to turn into events and tasks.",
  "Translates content so multilingual families stay in sync.",
  "Flags follow-up items when responses or payments are still outstanding.",
];

const techStack = {
  frontend: [
    "Next.js 16 with React 19",
    "TypeScript 5",
    "Material-UI with Emotion styling",
    "Zustand state management",
  ],
  backend: [
    "Next.js API Routes (REST)",
    "Supabase Auth with Google OAuth",
    "PostgreSQL with Row-Level Security",
    "Custom token refresh middleware",
  ],
  integrations: [
    "Gmail API & Google Calendar API",
    "n8n workflow automation",
    "Resend transactional emails",
    "OAuth 2.0 authentication",
  ],
  devOps: [
    "Vitest for testing",
    "ESLint & TypeScript strict mode",
    "Husky pre-commit hooks",
    "Vercel-ready deployment",
  ],
};

export default function ParentAssistantPage() {
  const theme = useTheme();

  const textPrimary = theme.palette.common.white;
  const textSecondary = "rgba(255, 255, 255, 0.7)";

  return (
    <Box
      component="main"
      sx={{
        flex: 1,
        color: textPrimary,
      }}
    >
      {/* 1. Hero Section */}
      <Box
        component="section"
        sx={{
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          py: { xs: 8, md: 12 },
          background: `linear-gradient(135deg, ${DEAR_PALO_COLOR} 5%, ${theme.palette.secondary.main} 90%)`,
          color: theme.palette.common.white,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollAnimation direction="up" distance={40} delay={0.1}>
                <Typography
                  variant="h1"
                  component="h1"
                  sx={{
                    fontWeight: 600,
                    fontSize: { xs: "3.5rem", md: "5rem" },
                    color: theme.palette.common.white,
                    mb: 3,
                    lineHeight: 1.1,
                  }}
                >
                  Dear Palo
                </Typography>
              </ScrollAnimation>
              <ScrollAnimation direction="up" distance={40} delay={0.2}>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    maxWidth: 550,
                    lineHeight: 1.6,
                    color: textSecondary,
                  }}
                >
                  Smart email assistant for busy parents. Organize
                  child-specific inboxes, summarize announcements, translate
                  updates, and never miss a deadline again.
                </Typography>
              </ScrollAnimation>
              <ScrollAnimation direction="up" distance={40} delay={0.3}>
                <Button
                  component={Link}
                  href="https://dearpalo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    alignSelf: "flex-start",
                    px: 5,
                    py: 1.75,
                    fontWeight: 600,
                    borderRadius: theme.shape.borderRadius,
                    backgroundColor: theme.palette.common.white,
                    color: DEAR_PALO_COLOR,
                    boxShadow: theme.shadows[4],
                    "&:hover": {
                      backgroundColor: DEAR_PALO_DARK_COLOR,
                      boxShadow: theme.shadows[12],
                    },
                  }}
                >
                  Demo App Launch
                </Button>
              </ScrollAnimation>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollAnimation direction="up" distance={40} delay={0.4}>
                <Box
                  sx={{
                    height: "360px",
                    borderRadius: theme.shape.borderRadius,
                    boxShadow: theme.shadows[6],
                    mt: { xs: 4, md: 0 },
                  }}
                >
                  <Image
                    src={dearPaloWebImage}
                    alt="Dear Palo website preview"
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: theme.shape.borderRadius,
                    }}
                  />
                </Box>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Divider - M3 Subtle */}
      <Divider sx={{ borderColor: DARK_SURFACE_COLOR }} />

      {/* 2. Features & How It Works */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 12 },
          backgroundColor: theme.palette.common.white,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={8}>
            {/* Features List */}
            <ScrollAnimation direction="up" distance={40} delay={0.1}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  color: DEAR_PALO_COLOR,
                }}
              >
                Key Features
              </Typography>
            </ScrollAnimation>
            <Grid container spacing={3}>
              {features.map((feature, index) => (
                <Grid size={{ xs: 12, md: 6 }} key={feature.title}>
                  <ScrollAnimation
                    direction="up"
                    distance={40}
                    delay={0.2 + index * 0.05}
                  >
                    <Box
                      sx={{
                        p: 4,
                        height: "100%",
                        borderRadius: "20px",
                        background: "rgba(16, 185, 129, 0.04)",
                        border: "1px solid rgba(16, 185, 129, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(16, 185, 129, 0.08)",
                          border: "1px solid rgba(16, 185, 129, 0.2)",
                          transform: "translateY(-4px)",
                          boxShadow: `0 8px 24px rgba(16, 185, 129, 0.15)`,
                        },
                      }}
                    >
                      <Box sx={{ display: "flex", gap: 3 }}>
                        <Box
                          sx={{
                            minWidth: 48,
                            height: 48,
                            borderRadius: "12px",
                            background: `linear-gradient(135deg, ${DEAR_PALO_COLOR} 0%, #059669 100%)`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxShadow: `0 4px 12px rgba(16, 185, 129, 0.3)`,
                          }}
                        >
                          <feature.icon
                            sx={{
                              fontSize: "1.5rem",
                              color: theme.palette.common.white,
                            }}
                          />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                          <Typography
                            variant="h5"
                            sx={{
                              mb: 1,
                              fontWeight: 600,
                              fontSize: { xs: "1.125rem", md: "1.25rem" },
                              color: theme.palette.common.black,
                            }}
                          >
                            {feature.title}
                          </Typography>
                          <Typography
                            variant="body1"
                            sx={{
                              color: "rgba(0, 0, 0, 0.7)",
                              lineHeight: 1.6,
                            }}
                          >
                            {feature.description}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>

            {/* Divider */}
            <Box sx={{ width: "100%", my: 6 }}>
              <Divider
                sx={{
                  borderColor: "rgba(16, 185, 129, 0.2)",
                  borderWidth: "1px",
                }}
              />
            </Box>

            {/* How It Works List */}
            <ScrollAnimation direction="up" distance={40} delay={0.3}>
              <Typography
                variant="h2"
                sx={{
                  fontWeight: 500,
                  fontSize: { xs: "2.5rem", md: "3rem" },
                  color: DEAR_PALO_COLOR,
                }}
              >
                The Setup
              </Typography>
            </ScrollAnimation>
            <Grid container spacing={3}>
              {howItWorks.map((step, index) => (
                <Grid size={{ xs: 12, sm: 6 }} key={step}>
                  <ScrollAnimation
                    direction="up"
                    distance={40}
                    delay={0.4 + index * 0.05}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        gap: 2,
                        alignItems: "flex-start",
                        p: 3,
                        height: "100%",
                        borderRadius: "16px",
                        background: "rgba(16, 185, 129, 0.04)",
                        border: "1px solid rgba(16, 185, 129, 0.1)",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          background: "rgba(16, 185, 129, 0.08)",
                          border: "1px solid rgba(16, 185, 129, 0.2)",
                          transform: "translateX(4px)",
                        },
                      }}
                    >
                      <Box
                        sx={{
                          minWidth: 32,
                          height: 32,
                          borderRadius: "8px",
                          background: `linear-gradient(135deg, ${DEAR_PALO_COLOR} 0%, #059669 100%)`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          color: theme.palette.common.white,
                          fontWeight: 700,
                          fontSize: "0.875rem",
                          flexShrink: 0,
                        }}
                      >
                        {index + 1}
                      </Box>
                      <Typography
                        variant="body1"
                        sx={{
                          fontSize: "1rem",
                          color: theme.palette.common.black,
                          lineHeight: 1.6,
                        }}
                      >
                        {step}
                      </Typography>
                    </Box>
                  </ScrollAnimation>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Divider */}
      <Divider sx={{ borderColor: DARK_SURFACE_COLOR }} />

      {/* 3. AI Capabilities & Automation Pipeline */}
      <Box
        component="section"
        sx={{ py: { xs: 10, md: 12, backgroundColor: DARK_BACKGROUND_COLOR } }}
      >
        <Container maxWidth="lg">
          {/* What AI Does */}
          <ScrollAnimation direction="up" distance={40} delay={0.1}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                mb: 4,
                fontSize: { xs: "2.5rem", md: "3rem" },
                color: DEAR_PALO_COLOR,
              }}
            >
              Intelligence at Work
            </Typography>
          </ScrollAnimation>
          <Box
            sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 10 }}
          >
            {aiCapabilities.map((capability, index) => (
              <ScrollAnimation
                key={capability}
                direction="up"
                distance={40}
                delay={0.2 + index * 0.05}
              >
                <Typography
                  variant="body1"
                  sx={{
                    // Dear Palo Green을 사용한 구분선
                    borderLeft: `4px solid ${DEAR_PALO_COLOR}`,
                    pl: 2,
                    py: 0.5,
                    fontSize: "1.1rem",
                    color: textPrimary,
                  }}
                >
                  {capability}
                </Typography>
              </ScrollAnimation>
            ))}
          </Box>

          {/* Divider */}
          <Divider
            sx={{
              borderColor: "rgba(16, 185, 129, 0.2)",
              borderWidth: "1px",
              my: 8,
            }}
          />

          {/* Automation Workflow */}
          <ScrollAnimation direction="up" distance={40} delay={0.3}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                mb: 3,
                fontSize: { xs: "2.5rem", md: "3rem" },
                color: DEAR_PALO_COLOR,
                textAlign: "center",
              }}
            >
              Automation Pipeline
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={40} delay={0.4}>
            <Typography
              variant="body1"
              sx={{ mb: 4, color: textSecondary, textAlign: "center" }}
            >
              Every automation run follows a clear pipeline so parents always
              know how their inbox turns into organized action.
            </Typography>
          </ScrollAnimation>
          <ScrollAnimation direction="up" distance={40} delay={0.5}>
            <AutomationPipeline />
          </ScrollAnimation>
        </Container>
      </Box>

      {/* Divider */}
      <Divider sx={{ borderColor: DARK_SURFACE_COLOR }} />

      {/* 4. Tech Stack */}
      <Box
        component="section"
        sx={{
          py: { xs: 10, md: 12 },
          backgroundColor: "rgba(16, 185, 129, 0.02)", // Very subtle green tint
        }}
      >
        <Container maxWidth="lg">
          <ScrollAnimation direction="up" distance={40} delay={0.1}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                mb: 6,
                fontSize: { xs: "2.5rem", md: "3rem" },
                color: DEAR_PALO_COLOR,
              }}
            >
              Technology Stack
            </Typography>
          </ScrollAnimation>
          <Grid container spacing={3}>
            {Object.entries(techStack).map(([category, items], catIndex) => (
              <Grid size={{ xs: 12, md: 6 }} key={category}>
                <ScrollAnimation
                  direction="up"
                  distance={40}
                  delay={0.2 + catIndex * 0.1}
                >
                  <Box
                    sx={{
                      p: 4,
                      height: "100%",
                      borderRadius: "20px",
                      background: "rgba(255, 255, 255, 0.5)",
                      border: "1px solid rgba(16, 185, 129, 0.1)",
                      transition: "all 0.3s ease",
                      "&:hover": {
                        background: "rgba(255, 255, 255, 0.8)",
                        border: "1px solid rgba(16, 185, 129, 0.2)",
                        transform: "translateY(-4px)",
                        boxShadow: `0 8px 24px rgba(16, 185, 129, 0.1)`,
                      },
                    }}
                  >
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 600,
                        mb: 3,
                        color: DEAR_PALO_DARK_COLOR,
                        fontSize: { xs: "1.25rem", md: "1.5rem" },
                        textTransform: "capitalize",
                      }}
                    >
                      {category === "devOps" ? "DevOps" : category}
                    </Typography>
                    <Box
                      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                    >
                      {items.map((item) => (
                        <Box
                          key={item}
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            gap: 1.5,
                          }}
                        >
                          <Box
                            sx={{
                              minWidth: 8,
                              height: 8,
                              borderRadius: "50%",
                              background: `linear-gradient(135deg, ${DEAR_PALO_COLOR} 0%, #059669 100%)`,
                            }}
                          />
                          <Typography
                            variant="body1"
                            sx={{
                              color: "rgba(0, 0, 0, 0.8)",
                              fontSize: "1rem",
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Divider */}
      <Divider sx={{ borderColor: DARK_SURFACE_COLOR }} />

      {/* 5. CTA Section */}
      <Box
        component="section"
        sx={{ py: { xs: 8, md: 10 }, backgroundColor: DARK_BACKGROUND_COLOR }}
      >
        <Container maxWidth="lg">
          <ScrollAnimation direction="up" distance={40} delay={0.1}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: 300,
                mb: 2,
                color: theme.palette.common.white, // Dear Palo Green
                fontSize: { xs: "2rem", md: "2.5rem" },
              }}
            >
              Ready to see <b>Dear Palo</b> in action?
            </Typography>
            <Typography
              variant="body1"
              sx={{
                opacity: 0.9,
                mb: 4,
                fontSize: "1.1rem",
                color: textPrimary,
              }}
            >
              Explore the live application, review the automation metrics, and
              try the guided setup to experience how effortless family email
              management can be.
            </Typography>
            <Button
              component={Link}
              href="https://dearpalo.com"
              target="_blank"
              rel="noopener noreferrer"
              variant="outlined"
              sx={{
                color: theme.palette.common.white,
                borderColor: theme.palette.common.white,
                px: 5,
                py: 1.75,
                fontWeight: 600,
                borderRadius: theme.shape.borderRadius,
                "&:hover": {
                  borderColor: DEAR_PALO_COLOR,
                  // Tonal Hover Effect (Mint Green의 투명도를 이용)
                  backgroundColor: DEAR_PALO_COLOR + "1A",
                },
              }}
            >
              Launch Dear Palo
            </Button>
          </ScrollAnimation>
        </Container>
      </Box>
    </Box>
  );
}
