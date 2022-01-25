import React, { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Weather App title", () => {
  render(<App />);
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
