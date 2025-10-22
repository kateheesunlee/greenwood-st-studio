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

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
            {[
              {
                title: "Espresso Log",
                description: "Description 1",
                image: "https://via.placeholder.com/150",
              },
              {
                title: "Wine Log",
                description: "Description 2",
                image: "https://via.placeholder.com/150",
              },
              {
                title: "Just in plan",
                description: "Description 3",
                image: "https://via.placeholder.com/150",
              },
              {
                title: "Parent Assistant",
                description: "Description 4",
                image: "https://via.placeholder.com/150",
              },
            ].map((item, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={item.title} component="div">
                <ScrollAnimation
                  direction="up"
                  distance={60}
                  delay={0.2 + (index - 1) * 0.1}
                >
                  <Paper
                    sx={{
                      height: 300,
                      backgroundColor: "grey.100",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      flexDirection: "column",
                      gap: 1,
                    }}
                  >
                    <Typography
                      variant="h3"
                      color="primary.light"
                      fontWeight={600}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="primary.light"
                      fontWeight={600}
                      sx={{ opacity: 0.8 }}
                    >
                      Coming soon...
                    </Typography>
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
              <Button variant="secondary">Say hi!</Button>
            </ScrollAnimation>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
