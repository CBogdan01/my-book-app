import '@testing-library/jest-dom/vitest';
import { fireEvent, render, screen } from "@testing-library/react";
import { expect, test } from 'vitest';
import BookList from "../src/App";

test("toggles description visibility when clicked", () => {
  render(<BookList />);

  // Find the toggle button for the first book
  const buttons = screen.getAllByText(/Show Description/i);
  const toggleBtn = buttons[0];

  // Description should not be visible initially
  expect(screen.queryByText(/A novel about the American dream/i)).toBeNull();

  // Click to show
  fireEvent.click(toggleBtn);
  expect(
    screen.getByText(/A novel about the American dream/i)
  ).toBeInTheDocument();

  // Click to hide
  fireEvent.click(toggleBtn);
  expect(screen.queryByText(/A novel about the American dream/i)).toBeNull();
});
