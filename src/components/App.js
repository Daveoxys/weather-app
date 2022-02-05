import React, { useEffect, useState } from "react";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";
import getForecast from "../requests/getForecast";
import SearchForm from "./SearchForm";
import "../styles/App.css";

const App = () => {
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [searchText, setSearchText] = useState("");
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  const handleCitySearch = () => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  };

  useEffect(() => {
    getForecast(
      searchText,
      setSelectedDate,
      setForecasts,
      setLocation,
      setErrorMessage
    );
  }, []);

  return (
    <div className="weather-app">
      <header>
        <h1>Its always cloudy in {location.city}.</h1>
      </header>
      <br />
      <LocationDetails
        city={location.city}
        country={location.country}
        errorMessage={errorMessage}
      />
      <br />
      <SearchForm
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={handleCitySearch}
      />
      {!errorMessage && (
        <>
          <ForecastSummaries
            forecasts={forecasts}
            onForecastSelect={handleForecastSelect}
          />
          {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
        </>
      )}
    </div>
  );
};

// App.propTypes = {
//  forecasts: PropTypes.arrayOf(
//    PropTypes.shape({
//      date: PropTypes.number.isRequired,
//      description: PropTypes.string.isRequired,
//      icon: PropTypes.string.isRequired,
//      temperature: PropTypes.shape({
//        min: PropTypes.number,
//        max: PropTypes.number,
//      }),
//    })
//  ).isRequired,
//  location: PropTypes.shape({
//    city: PropTypes.string,
//    country: PropTypes.string,
//  }).isRequired,
//  forecast: PropTypes.shape({
//    date: PropTypes.number.isRequired,
//    description: PropTypes.string.isRequired,
//    icon: PropTypes.string.isRequired,
//    temperature: PropTypes.shape({
//      min: PropTypes.number,
//      max: PropTypes.number,
//    }),
//    humidity: PropTypes.number,
//    wind: PropTypes.shape({
//      speed: PropTypes.number,
//      direction: PropTypes.string,
//    }),
//  }).isRequired,
// };

export default App;
