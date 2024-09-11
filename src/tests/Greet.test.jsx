import { render, screen, cleanup } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { Greet } from "../pages/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet component", () => {
  it("should  be truthy", () => {
    //render my component
    render(<Greet name={"David"} />);
    const heading = screen.getByRole("heading");
    //check if the thing is in the docunment
    expect(heading).toBeInTheDocument();
    // regex
    expect(heading).toHaveTextContent(/hello David/i);
    cleanup();
  });
});
