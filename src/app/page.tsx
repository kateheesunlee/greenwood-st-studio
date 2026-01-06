"use client";
import Image from "next/image";
import aboutImage from "../../public/images/about.png";
import {
  Box,
  Typography,
  Container,
  Card,
  CardContent,
  Paper,
  Grid,
  useTheme,
} from "@mui/material";
import Button from "../components/Button";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { EmailForm } from "../components/EmailForm";
import { LayeredGradient } from "../components/LayeredGradient";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";

export default function Home() {
  const [emailFormOpen, setEmailFormOpen] = useState(false);
  const theme = useTheme();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // ... (기존 해시 네비게이션 로직 유지)
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1);
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100);
      }
    };
    handleHashNavigation();
    window.addEventListener("hashchange", handleHashNavigation);
    return () => {
      window.removeEventListener("hashchange", handleHashNavigation);
    };
  }, []);

  return (
    <Box component="main" sx={{ flex: 1 }}>
      {/* Hero Section */}
      <Box
        component="section"
        id="home"
        sx={{
          height: "100vh",
          backgroundColor: "background.default",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          p: { xs: 4, sm: 6 },
        }}
      >
        <Container maxWidth="lg">
          {" "}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              textAlign: "left",
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontFamily: "var(--font-pacifico)",
                color: "primary.main",
                fontWeight: 400,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4.5rem" },
                maxWidth: { md: "600px" },
                lineHeight: 1.4,
              }}
            >
              Greenwood St. Studio
            </Typography>

            <Typography
              variant="h5"
              sx={{
                color: "secondary.main",
                fontWeight: 500,
                mb: 8,
                fontSize: { xs: "1rem", md: "1.25rem" },
                maxWidth: { md: "450px" },
              }}
            >
              A personal playground for design, code, and everyday experiments.
            </Typography>

            <Button variant="outline" onClick={() => scrollToSection("about")}>
              Discover more
            </Button>
          </Box>
        </Container>
      </Box>

      {/* About Section */}
      <Box
        component="section"
        id="about"
        sx={{
          minHeight: "100vh",
          background: `linear-gradient(45deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[300]} 100%)`,
          display: "flex",
          alignItems: "center",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollAnimation direction="left" distance={60} delay={0.2}>
                <Typography
                  variant="h1"
                  component="h2"
                  sx={{
                    fontWeight: 600,
                    color: "primary.main",
                    mb: 3,
                  }}
                >
                  About me
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Greenwood St Studio is my personal playground, a small corner
                  of the internet where I explore ideas, build tools, and
                  experiment with design and code.
                </Typography>
                <Typography variant="body1" sx={{ mb: 4 }}>
                  {`I'm Kate, a frontend engineer who loves coffee, plants, and
                  the calm rhythm of the Pacific Northwest. I create small,
                  thoughtful tools where design and code come together
                  naturally. These days, I'm exploring ideas for myself rather
                  than client work, documenting what I learn along the way.`}
                </Typography>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("skills")}
                >
                  Skills
                </Button>
              </ScrollAnimation>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <ScrollAnimation direction="right" distance={60} delay={0.4}>
                <Paper
                  sx={{
                    height: 400,
                    // accent.main (Neutral 90) 사용
                    backgroundColor: "accent.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    // M3: 둥근 모서리 적용 (12px)
                    borderRadius: theme.shape.borderRadius,
                    overflow: "hidden",
                    position: "relative",
                    boxShadow: theme.shadows[4],
                  }}
                >
                  <Image
                    src={aboutImage}
                    alt="About me"
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: `${theme.shape.borderRadius}px`,
                    }}
                  />
                </Paper>
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box
        component="section"
        id="skills"
        sx={{
          minHeight: "100vh",
          background: `linear-gradient(225deg, ${theme.palette.secondary.main} 80%, ${theme.palette.primary.light} 100%)`,
          display: "flex",
          alignItems: "center",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <ScrollAnimation direction="up" distance={40} delay={0.1}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontWeight: 600,
                color: "primary.main",
                textAlign: "center",
                mb: 6,
              }}
            >
              Skills
            </Typography>
          </ScrollAnimation>
          <Grid container spacing={4}>
            {[
              {
                title: "Software Development",
                description:
                  "React, Next.js, TypeScript, Node.js, Apollo Client, GraphQL, REST, SQL. Building reliable, scalable, and maintainable systems with focus on clean architecture, performance, and testing (Jest, React Testing Library). Also exploring React Native for cross-platform experiences.",
              },
              {
                title: "Design",
                description:
                  "Figma, design systems, typography, motion, component libraries, and rapid prototyping. Bridging aesthetics and usability to create cohesive interfaces that feel calm and human.",
              },
              {
                title: "AI & Automation",
                description:
                  "OpenAI API, prompt engineering, agent workflows, and intelligent UI integration. Experimenting with automation tools that simplify workflows and make creative work more fluid.",
              },
              {
                title: "Product Thinking",
                description:
                  "Scope definition, UX flow mapping, MVP slicing, and usability testing. Combining design, code, and strategy to turn small ideas into practical tools.",
              },
            ].map((skill, index) => (
              <Grid size={{ xs: 12, md: 6 }} key={index} component="div">
                <ScrollAnimation
                  direction="up"
                  distance={50}
                  delay={0.2 + index * 0.1}
                >
                  <Card
                    sx={{
                      height: "100%",
                      backgroundColor: "background.paper",
                      borderRadius: theme.shape.borderRadius,
                      border: `1px solid ${theme.palette.grey[300]}`,
                      "&:hover": {
                        transform: "translateY(-6px)",
                        transition: "transform 0.4s ease, box-shadow 0.4s ease",
                        boxShadow: `0 8px 16px ${theme.palette.secondary.light}40`,
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
                        {skill.title}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {skill.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <ScrollAnimation direction="up" distance={30} delay={0.6}>
              <Button
                variant="primary"
                onClick={() => scrollToSection("projects")}
              >
                View Projects
              </Button>
            </ScrollAnimation>
          </Box>
        </Container>
      </Box>

      {/* Projects Section */}
      <Box
        component="section"
        id="projects"
        sx={{
          minHeight: "100vh",
          background: `linear-gradient(315deg, ${theme.palette.background.default} 0%, ${theme.palette.grey[300]} 100%)`,
          display: "flex",
          alignItems: "center",
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <ScrollAnimation direction="up" distance={40} delay={0.1}>
            <Typography
              variant="h1"
              component="h2"
              sx={{
                fontWeight: 600,
                color: "primary.main",
                textAlign: "center",
                mb: 6,
              }}
            >
              Projects
            </Typography>
          </ScrollAnimation>
          <Grid container spacing={4}>
            {projects.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={item.title} component="div">
                <ScrollAnimation
                  direction="up"
                  distance={60}
                  delay={0.2 + (index - 1) * 0.1}
                >
                  <Paper
                    component="a"
                    href={item.url}
                    sx={{
                      height: 300,
                      borderRadius: theme.shape.borderRadius,
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                      textDecoration: "none",
                      display: "block",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: `0 12px 24px ${theme.palette.primary.dark}30`,
                        "& .background-image": {
                          filter: "blur(2px) brightness(0.4)",
                        },
                        "& .hover-content": {
                          opacity: 1,
                        },
                        "& .hover-overlay": {
                          opacity: 1,
                        },
                      },
                    }}
                  >
                    {/* Background Image, Hover Overlay (유지) */}

                    <Box
                      className="background-image"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transition: "filter 0.3s ease",
                      }}
                    />
                    <Box
                      sx={{
                        position: "relative",
                        zIndex: 2,
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        p: 3,
                        textAlign: "center",
                      }}
                    >
                      <Typography
                        variant="h4"
                        sx={{
                          // Pacifico 폰트 제거 -> 기본 폰트 사용 (모던함 강화)
                          fontSize: "2rem",
                          color: "white",
                          fontWeight: 600,
                          mb: 2,
                          textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        {item.title}
                      </Typography>
                      <Box
                        className="hover-content"
                        sx={{
                          opacity: 0,
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        <Typography
                          variant="body1"
                          sx={{
                            color: "white",
                            mb: 2,
                            textShadow: "0 1px 2px rgba(0,0,0,0.7)",
                            fontSize: "0.9rem",
                            lineHeight: 1.4,
                          }}
                        >
                          {item.description}
                        </Typography>
                        <Box component="span">
                          <Typography
                            variant="caption"
                            component="span"
                            sx={{
                              color: theme.palette.primary.main,
                              backgroundColor: theme.palette.secondary.light,
                              px: 1.5,
                              py: 0.5,
                              borderRadius:
                                (theme.shape.borderRadius as number) / 2,
                              fontSize: "0.75rem",
                              fontWeight: 600,
                              textShadow: "none",
                              backdropFilter: "blur(2px)",
                              border: `1px solid ${theme.palette.tertiary.main}80`,
                            }}
                          >
                            {item.status}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box
                      className="hover-overlay"
                      sx={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: "rgba(0,0,0,0.3)",
                        opacity: 0,
                        transition: "opacity 0.3s ease",
                        zIndex: 1,
                      }}
                    />
                  </Paper>
                </ScrollAnimation>
              </Grid>
            ))}
          </Grid>
          <Box sx={{ textAlign: "center", mt: 6 }}>
            <ScrollAnimation direction="up" distance={30} delay={0.6}>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
              >
                Get in touch
              </Button>
            </ScrollAnimation>
          </Box>
        </Container>
      </Box>

      {/* Contact Section */}
      <Box
        component="section"
        id="contact"
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          py: 8,
          background: `linear-gradient(180deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: "center" }}>
            <ScrollAnimation direction="up" distance={40} delay={0.1}>
              <Typography
                variant="h1"
                component="h2"
                sx={{
                  fontWeight: 600,
                  color: "white",
                  mb: 4,
                }}
              >
                Get in touch
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
                {`I’m not taking client work right now, but I love thoughtful conversations.`}
              </Typography>
            </ScrollAnimation>
            <ScrollAnimation direction="up" distance={20} delay={0.3}>
              <Button
                variant="outline"
                onClick={() => setEmailFormOpen(true)}
                sx={{
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "white",
                  },
                }}
              >
                Say hi!
              </Button>
            </ScrollAnimation>
          </Box>
        </Container>
      </Box>

      {/* Email Form */}
      <EmailForm open={emailFormOpen} onClose={() => setEmailFormOpen(false)} />
    </Box>
  );
}
