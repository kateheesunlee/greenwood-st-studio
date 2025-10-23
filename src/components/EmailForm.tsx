"use client";
import { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Slide,
  Paper,
  Container,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface EmailFormProps {
  open: boolean;
  onClose: () => void;
}

export function EmailForm({ open, onClose }: EmailFormProps) {
  const [formData, setFormData] = useState({
    title: "",
    senderEmail: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setFormData((prev) => ({
        ...prev,
        [field]: event.target.value,
      }));
    };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: formData.title,
          senderEmail: formData.senderEmail,
          message: formData.message,
        }),
      });

      if (response.ok) {
        setSubmitStatus("success");

        // Reset form after successful submission
        setTimeout(() => {
          setFormData({ title: "", senderEmail: "", message: "" });
          setSubmitStatus("idle");
          onClose();
        }, 2000);
      } else {
        const errorData = await response.json();
        console.error("Email sending failed:", errorData);
        setSubmitStatus("error");
      }
    } catch (error) {
      console.error("Network error:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ title: "", senderEmail: "", message: "" });
    setSubmitStatus("idle");
    onClose();
  };

  return (
    <Slide direction="up" in={open} mountOnEnter unmountOnExit>
      <Paper
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1300,
          borderRadius: "16px 16px 0 0",
          maxHeight: "80vh",
          overflow: "auto",
        }}
      >
        <Container maxWidth="sm" sx={{ py: 3 }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 3,
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontFamily: "var(--font-pacifico)",
                color: "primary.main",
                fontWeight: 400,
              }}
            >
              Say hi!
            </Typography>
            <IconButton onClick={handleClose} size="small">
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Form */}
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Subject"
              value={formData.title}
              onChange={handleChange("title")}
              required
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Your Email"
              type="email"
              value={formData.senderEmail}
              onChange={handleChange("senderEmail")}
              required
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />

            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange("message")}
              required
              margin="normal"
              variant="outlined"
              sx={{ mb: 3 }}
            />

            {/* Status Messages */}
            {submitStatus === "success" && (
              <Typography
                color="success.main"
                sx={{ mb: 2, textAlign: "center" }}
              >
                Email sent successfully! I&apos;ll get back to you soon.
              </Typography>
            )}

            {submitStatus === "error" && (
              <Typography
                color="error.main"
                sx={{ mb: 2, textAlign: "center" }}
              >
                Something went wrong. Please try again.
              </Typography>
            )}

            <Box sx={{ display: "flex", gap: 2, justifyContent: "flex-end" }}>
              {/* Close Button */}
              <Button
                variant="outlined"
                onClick={handleClose}
                disabled={isSubmitting}
              >
                Cancel
              </Button>

              {/* Submit Button */}
              <Button type="submit" variant="contained" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Email"}
              </Button>
            </Box>
          </Box>
        </Container>
      </Paper>
    </Slide>
  );
}
