import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ city, country, errorMessage }) => {
  return errorMessage ? (
    <h2>{errorMessage}</h2>
  ) : (
    <h2 className="location-details">{`${city}, ${country}`}</h2>
  );
};

LocationDetails.defaultProps = {
  errorMessage: "",
};
LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  errorMessage: PropTypes.string,
};

export default LocationDetails;
