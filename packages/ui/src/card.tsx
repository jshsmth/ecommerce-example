"use client";

import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

// NOTE: If I had more time, I would implement this as a compound component, e.g.,
// <Card>
//   <Card.Title>...</Card.Title>
//   <Card.Body>...</Card.Body>
//   <Card.Footer>...</Card.Footer>
// </Card>
// to allow for more flexible composition and structure.

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg";
  hoverEffect?: boolean;
}

const variantClasses = {
  default: "bg-white",
  outlined: "bg-white border border-gray-200",
  elevated: "bg-white shadow",
};

const paddingClasses = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-7",
};

const roundedClasses = {
  none: "rounded-none",
  sm: "rounded",
  md: "rounded-xl",
  lg: "rounded-2xl",
  full: "rounded-full",
};

const shadowClasses = {
  none: "",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
};

export const Card = ({
  children,
  className = "",
  variant = "default",
  padding = "md",
  rounded = "md",
  shadow = "sm",
  hoverEffect = false,
}: CardProps) => {
  const baseClasses = "overflow-hidden transition-all duration-300";

  const hoverClasses = hoverEffect
    ? "hover:shadow-md hover:transform hover:-translate-y-1"
    : "";

  const cardClasses = twMerge(
    clsx(
      baseClasses,
      variantClasses[variant],
      paddingClasses[padding],
      roundedClasses[rounded],
      shadowClasses[shadow],
      hoverClasses,
      className
    )
  );

  return <div className={cardClasses}>{children}</div>;
};
