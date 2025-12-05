"use client";
import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import SettingsIcon from "@mui/icons-material/Settings";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import InboxIcon from "@mui/icons-material/Inbox";
import SyncIcon from "@mui/icons-material/Sync";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import SendIcon from "@mui/icons-material/Send";
import EventIcon from "@mui/icons-material/Event";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const DEAR_PALO_COLOR = "#10B981";

const AutomationPipeline = () => {
  const theme = useTheme();

  const steps = [
    {
      id: 1,
      title: "Email Arrives in Gmail",
      description: "New message from school or activity",
      icon: EmailIcon,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      id: 2,
      title: "n8n Automation Triggered",
      description: "Polling every 5-10 minutes",
      icon: SettingsIcon,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      id: 3,
      title: "Fetch Active Users & Tokens",
      description: "Get authenticated users with fresh access tokens",
      icon: VpnKeyIcon,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      id: 4,
      title: "Get New Emails Since Last Run",
      description: "Query Gmail with history ID tracking",
      icon: InboxIcon,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      id: 5,
      title: "Normalize Email Content",
      description: "Parse MIME, extract headers, decode attachments",
      icon: SyncIcon,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      id: 6,
      title: "AI Analysis",
      description: "Extract events, tasks, translations using system prompt",
      icon: SmartToyIcon,
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
    {
      id: 7,
      title: "Send Translated Email",
      description: "Email translated version to parent via Resend",
      icon: SendIcon,
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
    },
    {
      id: 8,
      title: "Create Calendar Events & Tasks",
      description: "Google Calendar API + Google Tasks API",
      icon: EventIcon,
      gradient: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
    },
    {
      id: 9,
      title: "Log Metrics & Update Sync Pointer",
      description: "Ready for next polling cycle",
      icon: CheckCircleIcon,
      gradient: `linear-gradient(135deg, ${DEAR_PALO_COLOR} 0%, #059669 100%)`,
      isFinal: true,
    },
  ];

  const metrics = [
    { value: "5-10 min", label: "Polling Frequency" },
    { value: "Real-time", label: "Translation" },
    { value: "100% Automated", label: "No Manual Steps" },
  ];

  return (
    <Box sx={{ py: { xs: 4, md: 6 } }}>
      <Box sx={{ maxWidth: "800px", margin: "0 auto" }}>
        {/* Pipeline Steps */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 8 }}>
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <React.Fragment key={step.id}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 3,
                    p: 3,
                    borderRadius: "16px",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.05)",
                      transform: "translateX(8px)",
                    },
                  }}
                >
                  {/* Icon Container */}
                  <Box
                    sx={{
                      minWidth: 56,
                      height: 56,
                      borderRadius: "16px",
                      background: step.gradient,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow: theme.shadows[4],
                      transition: "all 0.3s ease",
                      "&:hover": {
                        boxShadow: theme.shadows[8],
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <StepIcon
                      sx={{
                        fontSize: "1.75rem",
                        color: theme.palette.common.white,
                      }}
                    />
                  </Box>

                  {/* Content */}
                  <Box sx={{ flex: 1, pt: 0.5 }}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: 600,
                        mb: 0.5,
                        color: theme.palette.common.white,
                        fontSize: { xs: "1rem", md: "1.125rem" },
                      }}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "rgba(255, 255, 255, 0.7)",
                        fontSize: { xs: "0.875rem", md: "0.9375rem" },
                        lineHeight: 1.6,
                      }}
                    >
                      {step.description}
                    </Typography>
                  </Box>
                </Box>

                {/* Arrow between steps */}
                {!step.isFinal && index < steps.length - 1 && (
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: 24,
                    }}
                  >
                    <ArrowDownwardIcon
                      sx={{
                        fontSize: "1.5rem",
                        color: DEAR_PALO_COLOR,
                        opacity: 0.6,
                      }}
                    />
                  </Box>
                )}
              </React.Fragment>
            );
          })}
        </Box>

        {/* Key Metrics */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(3, 1fr)",
            },
            gap: 3,
          }}
        >
          {metrics.map((metric, index) => (
            <Box
              key={index}
              sx={{
                p: 3,
                borderRadius: "16px",
                background: `linear-gradient(135deg, ${DEAR_PALO_COLOR}15 0%, ${DEAR_PALO_COLOR}25 100%)`,
                backdropFilter: "blur(10px)",
                textAlign: "center",
                transition: "all 0.3s ease",
                border: `1px solid ${DEAR_PALO_COLOR}40`,
                "&:hover": {
                  transform: "translateY(-4px)",
                  boxShadow: `0 8px 24px ${DEAR_PALO_COLOR}30`,
                  background: `linear-gradient(135deg, ${DEAR_PALO_COLOR}25 0%, ${DEAR_PALO_COLOR}35 100%)`,
                },
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontWeight: 700,
                  color: theme.palette.common.white,
                  mb: 1,
                  fontSize: { xs: "1.5rem", md: "1.75rem" },
                }}
              >
                {metric.value}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: DEAR_PALO_COLOR,
                  fontWeight: 500,
                  fontSize: { xs: "0.875rem", md: "0.9375rem" },
                }}
              >
                {metric.label}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default AutomationPipeline;
