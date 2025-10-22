"use client";

import { Button, ButtonProps } from "@mui/material";
import { forwardRef } from "react";

interface CustomButtonProps extends Omit<ButtonProps, "variant"> {
  variant?: "primary" | "secondary" | "outline" | "text";
}

export const CustomButton = forwardRef<HTMLButtonElement, CustomButtonProps>(
  ({ variant = "primary", sx, ...props }, ref) => {
    const baseStyles = {
      px: 2,
      py: 1,
      borderRadius: 8,
      fontSize: "0.875rem",
      fontWeight: 500,
      boxShadow: "none",
      textTransform: "none",
    };
    const hoverBaseStyles = {
      boxShadow: "none",
      textTransform: "none",
    };
    const getVariantStyles = () => {
      switch (variant) {
        case "primary":
          return {
            backgroundColor: "primary.main",
            color: "white",
            ...baseStyles,
            "&:hover": {
              backgroundColor: "secondary.main",
              ...hoverBaseStyles,
            },
          };
        case "secondary":
          return {
            backgroundColor: "white",
            color: "primary.main",
            ...baseStyles,
            "&:hover": {
              backgroundColor: "grey.100",
              ...hoverBaseStyles,
            },
          };
        case "outline":
          return {
            borderColor: "primary.main",
            color: "primary.main",
            ...baseStyles,
            "&:hover": {
              backgroundColor: "primary.main",
              color: "white",
              ...hoverBaseStyles,
            },
          };
        case "text":
          return {
            color: "primary.main",
            ...baseStyles,
            "&:hover": {
              backgroundColor: "accent.main",
              ...hoverBaseStyles,
            },
          };
        default:
          return {};
      }
    };

    return (
      <Button
        ref={ref}
        variant={variant === "outline" ? "outlined" : "contained"}
        sx={{
          textTransform: "none",
          ...getVariantStyles(),
          ...sx,
        }}
        {...props}
      />
    );
  }
);

CustomButton.displayName = "CustomButton";

export default CustomButton;
