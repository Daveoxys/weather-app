import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import "./styles/index.css";
import "raf/polyfill";
import location from "./data/forecast.json";

render(
  <React.StrictMode>
    <App location={location.location} />
  </React.StrictMode>,
  document.getElementById("root")
);
