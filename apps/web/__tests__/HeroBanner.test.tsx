import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import HeroBanner from "../app/HeroBanner";

describe("HeroBanner", () => {
  it("renders the hero banner correctly", () => {
    // Render the HeroBanner component
    render(<HeroBanner />);

    // Check if the title is present
    expect(screen.getByText("Discover Amazing Products")).toBeInTheDocument();

    // Check if the description is present
    expect(
      screen.getByText(
        "Browse our curated collection of high-quality products designed to enhance your everyday life."
      )
    ).toBeInTheDocument();

    // Check if the buttons are present
    expect(screen.getByText("Shop Now")).toBeInTheDocument();
    expect(screen.getByText("Learn More")).toBeInTheDocument();

    // Check if the product categories are present
    expect(screen.getByText("New")).toBeInTheDocument();
    expect(screen.getByText("Sale")).toBeInTheDocument();
    expect(screen.getByText("Top")).toBeInTheDocument();
    expect(screen.getByText("Hot")).toBeInTheDocument();
  });
});
