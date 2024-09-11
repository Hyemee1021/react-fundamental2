import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Greet } from "../pages/Greet";
import "@testing-library/jest-dom/vitest";
import { Counter } from "../pages/Counter";

describe("Plus button", () => {
  it("should increment num state", () => {
    render(<Counter />);

    // screen.getByText- queries for DOM for element containing text
    expect(screen.getByAltText("0")).toBeInTheDocument();
    fireEvent.click(screen.getByText("+"));
    expect(1).toBeTruthy();
    cleanup();
  });
});
describe("minus button", () => {
  it("should decrement num state", () => {
    render(<Counter />);

    // screen.getByText- queries for DOM for element containing text
    expect(screen.getByAltText("1")).toBeInTheDocument();
    fireEvent.click(screen.getByText("-"));
    expect(0).toBeTruthy();
    cleanup();
  });
});
describe("minus button", () => {
  it("should not work when num is 0", () => {
    render(<Counter />);

    // screen.getByText- queries for DOM for element containing text
    expect(screen.getByAltText("0")).toBeInTheDocument();

    expect(screen.getByText("-")).toBeDisabled();
    cleanup();
  });
});
