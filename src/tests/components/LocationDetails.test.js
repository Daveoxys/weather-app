import React from "react";
import { render } from "@testing-library/react";
import LocationDetails from "../../components/LocationDetails";

describe("LocationDetails", () => {
  it("renders the correct city and location props", () => {
    const { getByText } = render(
      <LocationDetails city="Mos Eisley" country="Tatooine" />
    );

    expect(getByText("Mos Eisley, Tatooine")).toHaveClass("location-details");
  });
});
