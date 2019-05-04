import React from "react";
import PropTypes from "prop-types";
import * as s from "./styles";

const WeatherIcon = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return <s.Icon icon={weather.icon} />;
};

WeatherIcon.propTypes = {
  weather: PropTypes.object.isRequired
};

export default WeatherIcon;
