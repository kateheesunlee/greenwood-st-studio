"use client";

import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import Button from "./Button";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { getProjectByUrl } from "../data/projects";

export function TopNavigation() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();
  const pathname = usePathname();

  // Get current project data if on a project page
  const currentProject = getProjectByUrl(pathname);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (sectionId: string) => {
    // If we're not on the main page, navigate there first
    if (pathname !== "/") {
      router.push(`/#${sectionId}`);
    } else {
      // If we're on the main page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    handleClose(); // Close mobile menu after clicking
  };

  const isGradientPage =
    pathname === "/gradient-builder" || pathname === "/gradient-test";

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: pathname === "/" ? "primary.main" : "white",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
      }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          component="div"
          onClick={() => router.push("/")}
          sx={{
            fontFamily: "var(--font-pacifico)",
            flexGrow: 1,
            fontWeight: 400,
            color:
              pathname === "/"
                ? "white"
                : currentProject?.colors.textColor || "primary.main",
            cursor: "pointer",
            "&:hover": {
              opacity: 0.8,
            },
          }}
        >
          Greenwood Street Studio
        </Typography>

        {isGradientPage && (
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              onClick={() => router.push("/gradient-builder")}
              sx={{
                color:
                  pathname === "/gradient-builder"
                    ? "primary.main"
                    : "text.secondary",
                backgroundColor: "transparent",
                fontWeight: pathname === "/gradient-builder" ? 600 : 400,
                "&:hover": {
                  backgroundColor: "action.hover",
                  color: "primary.main",
                },
              }}
            >
              Gradient Builder
            </Button>
            <Button
              onClick={() => router.push("/gradient-test")}
              sx={{
                color:
                  pathname === "/gradient-test"
                    ? "primary.main"
                    : "text.secondary",
                backgroundColor: "transparent",
                fontWeight: pathname === "/gradient-test" ? 600 : 400,
                "&:hover": {
                  backgroundColor: "action.hover",
                  color: "primary.main",
                },
              }}
            >
              Gradient Test
            </Button>
          </Box>
        )}

        {pathname === "/" && (
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
            <Button
              color="inherit"
              onClick={() => scrollToSection("home")}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Home
            </Button>
            <Button
              color="inherit"
              onClick={() => scrollToSection("about")}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              About
            </Button>
            <Button
              color="inherit"
              onClick={() => scrollToSection("skills")}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Skills
            </Button>
            <Button
              color="inherit"
              onClick={() => scrollToSection("projects")}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Projects
            </Button>
            <Button
              color="inherit"
              onClick={() => scrollToSection("contact")}
              sx={{
                color: "white",
                "&:hover": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                },
              }}
            >
              Say hi!
            </Button>
          </Box>
        )}

        {/* Mobile menu for gradient pages */}
        {isGradientPage && (
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls={open ? "mobile-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{
                color: "text.primary",
                width: 48,
                height: 48,
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "action.hover",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "mobile-menu",
              }}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "white",
                  color: "text.primary",
                },
              }}
            >
              <MenuItem
                onClick={() => {
                  router.push("/gradient-builder");
                  handleClose();
                }}
                selected={pathname === "/gradient-builder"}
              >
                <Typography textAlign="center">Gradient Builder</Typography>
              </MenuItem>
              <MenuItem
                onClick={() => {
                  router.push("/gradient-test");
                  handleClose();
                }}
                selected={pathname === "/gradient-test"}
              >
                <Typography textAlign="center">Gradient Test</Typography>
              </MenuItem>
            </Menu>
          </Box>
        )}

        {/* Mobile menu - only show on home page */}
        {pathname === "/" && (
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls={open ? "mobile-menu" : undefined}
              aria-haspopup="true"
              onClick={handleClick}
              sx={{
                color: "white",
                width: 48,
                height: 48,
                borderRadius: "50%",
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="mobile-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "mobile-menu",
              }}
              sx={{
                "& .MuiPaper-root": {
                  backgroundColor: "white",
                  color: "primary.main",
                },
              }}
            >
              <MenuItem onClick={() => scrollToSection("home")}>
                <Typography textAlign="center">Home</Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("about")}>
                <Typography textAlign="center">About</Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("skills")}>
                <Typography textAlign="center">Skills</Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("projects")}>
                <Typography textAlign="center">Projects</Typography>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("contact")}>
                <Typography textAlign="center">Contact</Typography>
              </MenuItem>
            </Menu>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}
