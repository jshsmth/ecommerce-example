"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "outlined" | "elevated";
  padding?: "none" | "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg";
  hoverEffect?: boolean;
}

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

  // Hover effect classes
  const hoverClasses = hoverEffect
    ? "hover:shadow-md hover:transform hover:-translate-y-1"
    : "";

  // Combine all classes
  const cardClasses = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${roundedClasses[rounded]} ${shadowClasses[shadow]} ${hoverClasses} ${className}`;

  return <div className={cardClasses}>{children}</div>;
};
