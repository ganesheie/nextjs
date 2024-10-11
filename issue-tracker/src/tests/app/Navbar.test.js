// src/test/app/navbartest.tsx
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Navbar from "../../app/navbar"; // Adjust the import path as needed
import { AiFillBug } from "react-icons/ai";

describe("Navbar Component", () => {
  test("renders the navigation bar", () => {
    render(<Navbar />);
    const navElement = screen.getByRole("navigation");
    expect(navElement).toBeInTheDocument();
  });

  test("renders the navigation links", () => {
    render(<Navbar />);
    const dashboardLink = screen.getByText("DashBoard");
    const issuesLink = screen.getByText("Issues");
    expect(dashboardLink).toBeInTheDocument();
    expect(issuesLink).toBeInTheDocument();
    expect(dashboardLink).toHaveAttribute("href", "/");
    expect(issuesLink).toHaveAttribute("href", "/issue");
  });

  test("renders the AiFillBug icon", () => {
    render(<Navbar />);
    const bugIcon = screen.getByTestId("bug-icon");
    expect(bugIcon).toBeInTheDocument();
  });
});
