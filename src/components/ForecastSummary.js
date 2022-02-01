import "../styles/App.css";
import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "react-icons-weather";
import moment from "moment";

const ForecastSummary = ({
  date,
  description,
  icon,
  temperature,
  onSelect,
}) => (
  <div className="forecast-summary" data-testid="forecast-summary">
    <div className="forecast-summary__date">
      <h3>{moment(date).format("ddd Do MMM")}</h3>
    </div>
    <div className="forecast-summary__icon" data-testid="forecast-icon">
      <WeatherIcon name="owm" iconId={icon} />
    </div>
    <div className="forecast-summary__temperature">
      {temperature.max}
      &deg;C
    </div>
    <div className="forecast-summary__description">{description}</div>
    <button type="button" onClick={() => onSelect(date)}>
      More Details
    </button>
  </div>
);

ForecastSummary.propTypes = {
  date: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  temperature: PropTypes.shape({
    min: PropTypes.number,
    max: PropTypes.number,
  }).isRequired,
  onSelect: PropTypes.func.isRequired,
};

export default ForecastSummary;
