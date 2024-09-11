import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import "@testing-library/jest-dom/vitest";
import TaskManager from "../pages/TaskManager";

describe("TaskManager", () => {
  it("should add new task", async () => {
    render(<TaskManager />);

    // Simulate user input
    fireEvent.change(screen.getByLabelText(/taskName/i), {
      target: { value: "New Task" },
    });

    //click the submit
    fireEvent.click(screen.getByText("Submit"));

    // Wait for the new task to appear in the document
    await waitFor(() =>
      expect(screen.getByText("New Task")).toBeInTheDocument()
    );
  });
  it("should delete task", async () => {
    render(<TaskManager />);

    // Simulate adding a task first to ensure it exists
    fireEvent.change(screen.getByLabelText(/taskName/i), {
      target: { value: "second Task" },
    });
    fireEvent.click(screen.getByText("Submit"));

    // Ensure the task is present before attempting to delete
    expect(screen.getByText("second Task")).toBeInTheDocument();

    //click the submit
    fireEvent.click(screen.getByText(/delete/i));

    // Wait for the new task to appear in the document
    await waitFor(() =>
      expect(screen.getByText("second Task")).not.toBeInTheDocument()
    );
  });
});
