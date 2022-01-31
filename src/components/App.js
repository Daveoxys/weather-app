import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForeCastSummaries from "./ForecastSummaries";

const App = ({ location, forecasts }) => (
  <div className="Weather App">
    <header>
      <h1>Weather App</h1>
    </header>
    <LocationDetails city={location.city} country={location.country} />
    <ForeCastSummaries forecasts={forecasts} />
  </div>
);

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      temperature: PropTypes.shape({
        min: PropTypes.number,
        max: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
