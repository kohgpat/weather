import React from "react";
import * as styles from "./styles";

const WeatherIcon = ({ weather }) => {
  if (!weather) {
    return null;
  }

  return <styles.Icon icon={weather.icon} />;
};

export default WeatherIcon
