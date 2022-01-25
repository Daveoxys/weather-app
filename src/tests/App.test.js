import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../components/App";

xtest("renders Weather App title", () => {
  render(
    <App
      LocationDetails={{
        location: { city: "Mos Eisley", country: "Tatooine" },
      }}
    />
  );
  const linkElement = screen.getByText(/Weather App/i);
  expect(linkElement).toBeInTheDocument();
});
