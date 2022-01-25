import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";

const App = ({ location }) => {
  return (
    <div className="App">
      <header>
        <h1>Weather App</h1>
      </header>
      <LocationDetails city={location.city} country={location.country} />
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
