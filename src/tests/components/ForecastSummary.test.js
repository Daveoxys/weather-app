import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
  const validProps = {
    date: 1111111,
    description: "Stub description",
    icon: "stubIcon",
    temperature: {
      min: 12,
      max: 22,
    },
  };

  it("render correct values for props", () => {
    const { getByText, getByTestId } = render(
      <ForecastSummary
        date={validProps.date}
        description={validProps.description}
        icon={validProps.icon}
        temperature={validProps.temperature}
      />
    );

    expect(getByText("1111111")).toHaveClass("forecast-summary__date");
    expect(getByText("Stub description")).toHaveClass(
      "forecast-summary__description"
    );
    expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
    expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
    expect(render).toMatchSnapshot();
  });
});
