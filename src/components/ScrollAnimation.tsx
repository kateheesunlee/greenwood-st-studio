"use client";

import { useEffect, useRef, useState } from "react";

interface ScrollAnimationProps {
  children: React.ReactNode;
  direction?: "up" | "down" | "left" | "right";
  distance?: number;
  duration?: number;
  delay?: number;
  threshold?: number;
}

export function ScrollAnimation({
  children,
  direction = "up",
  distance = 50,
  duration = 0.6,
  delay = 0,
  threshold = 0.1,
}: ScrollAnimationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay * 1000);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `translateY(${distance}px)`;
        case "down":
          return `translateY(-${distance}px)`;
        case "left":
          return `translateX(${distance}px)`;
        case "right":
          return `translateX(-${distance}px)`;
        default:
          return `translateY(${distance}px)`;
      }
    }
    return "translateY(0)";
  };

  return (
    <div
      ref={elementRef}
      style={{
        transform: getTransform(),
        opacity: isVisible ? 1 : 0,
        transition: `transform ${duration}s ease-out, opacity ${duration}s ease-out`,
      }}
    >
      {children}
    </div>
  );
}
