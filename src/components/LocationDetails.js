import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";

const LocationDetails = ({ city, country }) => (
  <h2 className="location-details">{`${city}, ${country}`}</h2>
);

LocationDetails.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
};

export default LocationDetails;
