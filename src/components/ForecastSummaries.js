import React from "react";
import PropTypes from "prop-types";
import ForecastSummary from "./ForecastSummary";

const ForeCastSummaries = ({ forecasts }) => (
  <div className="forecast-summaries">
    {forecasts.map((forecast) => (
      <ForecastSummary
        date={forecast.date}
        description={forecast.description}
        icon={forecast.icon}
        temperature={forecast.temperature}
      />
    ))}
  </div>
);

ForeCastSummaries.propTypes = {
  forecasts: PropTypes.string.isRequired,
};

export default ForeCastSummaries;
