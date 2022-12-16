import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Renders title", () => {
  render(<App />);
  expect(screen.getByText(/alpaca generator/i)).toBeInTheDocument();
});

test("Renders base images", () => {
  render(<App />);
  expect(screen.getByAltText("background")).toBeInTheDocument();
  expect(screen.getByAltText("ears")).toBeInTheDocument();
  expect(screen.getByAltText("neck")).toBeInTheDocument();
  expect(screen.getByAltText("hair")).toBeInTheDocument();
  expect(screen.getByAltText("nose")).toBeInTheDocument();
  expect(screen.getByAltText("mouth")).toBeInTheDocument();
  expect(screen.getByAltText("leg")).toBeInTheDocument();
  expect(screen.getByAltText("eyes")).toBeInTheDocument();
});

test("User can choose style and state will change", async () => {
  const user = userEvent;
  render(<App />);
  const hairBtn = screen.getByRole("button", { name: /curls/i });
  const hairImg = screen.getByAltText("hair");
  user.click(hairBtn);
  expect(hairBtn).toHaveClass("btn--selected");
  expect(hairImg).toHaveAttribute("src", "./alpaca/hair/curls.png");
});
