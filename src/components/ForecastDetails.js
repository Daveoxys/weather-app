import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, temperature, wind } = forecast;
  return (
    <>
      <div className="forecast-details" key={date}>
        <div className="forecast-details__date">
          <h3>{moment(date).format("ddd Do MMM")}</h3>
        </div>
      </div>
      <div className="forecast-details__temperature">
        Max Temp: {temperature.max}&deg;C
        <br />
        Min Temp: {temperature.min}&deg;C
      </div>
      <div
        className="forecast-details__humidity"
        data-testid="forecast-humidity"
      >
        Humidity: {humidity}%
      </div>
      <div className="forecast-details__wind">
        Wind Speed: {wind.speed} <br /> Direction:{wind.direction}
      </div>
    </>
  );
};

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    humidity: PropTypes.number,
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};

export default ForecastDetails;
