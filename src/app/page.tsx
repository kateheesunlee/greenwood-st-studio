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
} from "@mui/material";
import Button from "../components/Button";
import { ScrollAnimation } from "../components/ScrollAnimation";
import { EmailForm } from "../components/EmailForm";
import { useEffect, useState } from "react";
import { projects } from "../data/projects";

export default function Home() {
  const [emailFormOpen, setEmailFormOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle hash navigation when coming from other pages
  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const sectionId = hash.substring(1); // Remove the # symbol
        setTimeout(() => {
          scrollToSection(sectionId);
        }, 100); // Small delay to ensure page is loaded
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Handle hash changes
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
          background: "linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)",
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
              variant="h2"
              component="h1"
              sx={{
                fontFamily: "var(--font-pacifico)",
                color: "primary.main",
                fontWeight: 400,
                mb: 2,
                fontSize: { xs: "2.5rem", md: "4rem" },
              }}
            >
              Greenwood Street Studio
            </Typography>

            <Typography
              variant="h6"
              sx={{
                color: "secondary.main",
                fontWeight: 600,
                mb: 8,
                fontSize: { xs: "0.8rem", md: "1rem" },
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
          background: "linear-gradient(45deg, #f4f4f4 0%, #e8f5e8 100%)",
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
                    fontFamily: "var(--font-pacifico)",
                    fontWeight: 400,
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
                    backgroundColor: "accent.main",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderRadius: 2,
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <Image
                    src={aboutImage}
                    alt="About me"
                    fill
                    style={{
                      objectFit: "cover",
                      borderRadius: "8px",
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
          background:
            "linear-gradient(225deg, #E1ECC9 0%, #d4e6b8 50%, #c7e0a7 100%)",
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
                fontFamily: "var(--font-pacifico)",
                fontWeight: 400,
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
          background:
            "linear-gradient(315deg, #f4f4f4 0%, #f0f0f0 50%, #e8e8e8 100%)",
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
                fontFamily: "var(--font-pacifico)",
                fontWeight: 400,
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
                      borderRadius: 2,
                      overflow: "hidden",
                      position: "relative",
                      cursor: "pointer",
                      textDecoration: "none",
                      display: "block",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-8px)",
                        boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
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
                    {/* Background Image */}
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

                    {/* Content */}
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
                          fontFamily: "var(--font-pacifico)",
                          fontSize: "2rem",
                          color: "white",
                          fontWeight: 400,
                          mb: 2,
                          textShadow: "0 2px 4px rgba(0,0,0,0.5)",
                          transition: "opacity 0.3s ease",
                        }}
                      >
                        {item.title}
                      </Typography>

                      {/* Hover Content */}
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
                        <Typography
                          variant="caption"
                          sx={{
                            color: "white",
                            backgroundColor: "rgba(255,255,255,0.2)",
                            px: 2,
                            py: 0.5,
                            borderRadius: 1,
                            textShadow: "0 1px 2px rgba(0,0,0,0.7)",
                            backdropFilter: "blur(10px)",
                          }}
                        >
                          {item.status}
                        </Typography>
                      </Box>
                    </Box>

                    {/* Hover Overlay */}
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
                variant="h1"
                component="h2"
                sx={{
                  fontFamily: "var(--font-pacifico)",
                  fontWeight: 400,
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
                variant="secondary"
                onClick={() => setEmailFormOpen(true)}
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
