import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForeCastSummaries from "./ForecastSummaries";

const App = ({ location }) => {
  return (
    <div className="App">
      <header>
        <h1>Spaceport Weather App</h1>
      </header>
      <LocationDetails city={location.city} country={location.country} />
      <ForeCastSummaries />
    </div>
  );
};

App.propTypes = {
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};

export default App;
