import React from "react";
import PropTypes from "prop-types";
import * as s from "./styles";

const WeatherDegree = ({ units }) => {
  if (!units) {
    return null;
  }

  if (units === "celcius") {
    return <s.Degree>°C</s.Degree>;
  }

  if (units === "fahrenheit") {
    return <s.Degree>°F</s.Degree>;
  }

  return null;
};

WeatherDegree.defaultProps = {
  units: null
};

WeatherDegree.propTypes = {
  units: PropTypes.string.isRequired
};

export default WeatherDegree;
