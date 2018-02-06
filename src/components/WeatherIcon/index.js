import React from "react";
import "weather-icons/css/weather-icons.min.css";
import * as styles from "./styles";

const isDayTime = () => {
  const hours = new Date().getHours();
  const isDayTime = hours > 6 && hours < 20;

  return isDayTime;
};

const WeatherIcon = ({ weather }) => {
  const isDay = isDayTime();

  let wiClass = "";

  if (weather.description === "mist") {
    wiClass += isDay ? " wi-day-fog" : " wi-night-fog";
  }

  if (weather.description === "broken clouds" ||
      weather.description === "few clouds") {
    wiClass += isDay ? " wi-day-cloudy" : " wi-night-cloudy";
  }

  if (weather.description === "clear sky") {
    wiClass += isDay ? " wi-day-sunny" : " wi-night-clear";
  }

  if (weather.description === "overcast clouds") {
    wiClass += " wi-day-sunny-overcast";
  }

  if (weather.description === "light rain" ||
      weather.description === "shower rain") {
    wiClass += isDay ? " wi-day-rain" : " wi-night-rain";
  }

  if (weather.description === "smoke") {
    wiClass += " wi-smoke";
  }

  return (
    <styles.Icon className={`wi ${wiClass}`} />
  )
};

export default WeatherIcon
