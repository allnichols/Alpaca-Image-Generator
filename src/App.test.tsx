import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Renders title", () => {
  render(<App />);
  expect(screen.getByText(/alpaca generator/i)).toBeInTheDocument();
});

test("Renders base image", () => {
  render(<App />);
  expect(screen.getByAltText("background")).toBeInTheDocument();
});

test.todo("User can select category");

test.todo("User can choose style");

test.todo("User can see change");
