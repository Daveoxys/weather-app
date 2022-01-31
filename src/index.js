import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import "./styles/index.css";
import "raf/polyfill";
// import { forecasts, location } from "./data/forecast.json";
import packageInfo from "./data/forecast.json";

const { forecasts, location } = packageInfo;

ReactDOM.render(
  <React.StrictMode>
    <App forecasts={forecasts} location={location} />
  </React.StrictMode>,
  document.getElementById("root")
);
