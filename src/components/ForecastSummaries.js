import React from "react";
import PropTypes from "prop-types";

const ForeCastSummaries = (props) => {
  const { forecasts } = props;
  return <div className="forecast-summaries">{forecasts}</div>;
};

ForeCastSummaries.propTypes = {
  forecasts: PropTypes.string.isRequired,
};

export default ForeCastSummaries;
