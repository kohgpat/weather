import React from "react";
import PropTypes from "prop-types";
import WeatherIcon from "../WeatherIcon";
import WeatherDegree from "../WeatherDegree";
import * as s from "./styles";

const formatTemperature = temperature => {
  if (!temperature) {
    return null;
  }

  const temperatureString = temperature + "";

  if (temperatureString.split(".").length) {
    return temperatureString.split(".")[0];
  } else {
    return temperatureString;
  }
};

const formatInterval = interval => {
  if (!interval) {
    return null;
  }

  const millisecondsInSecond = 1000;
  const secondsInMinute = 60;

  return interval / millisecondsInSecond / secondsInMinute;
};

const City = ({ city, settings, onRemoveCity }) => {
  if (!city) {
    return null;
  }

  return (
    <s.City>
      <s.Header>
        <s.Name title={city.name}>{city.name}</s.Name>
        <s.RemoveButton onClick={() => onRemoveCity(city)}>
          &times;
        </s.RemoveButton>
      </s.Header>

      {city.params && (
        <s.SubHeader>
          <s.SubHeaderText>
            Update every {formatInterval(city.params.interval)} minutes
          </s.SubHeaderText>
        </s.SubHeader>
      )}

      {city.weather &&
        city.weather.length > 0 && (
          <s.WeatherMain>
            <s.Stat major>
              {city.weather && city.weather.length > 0 && city.weather[0].main}
            </s.Stat>
          </s.WeatherMain>
        )}

      <s.Stats>
        <s.Stat major>
          {city.main && formatTemperature(city.main.temp)}{" "}
          <WeatherDegree units={settings.units} />
        </s.Stat>

        {city.weather &&
          city.weather.length > 0 && (
            <s.Stat>
              <WeatherIcon weather={city.weather[0]} />
            </s.Stat>
          )}
      </s.Stats>
    </s.City>
  );
};

City.propTypes = {
  city: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
  onRemoveCity: PropTypes.func.isRequired
};

City.defaultProps = {
  cities: null,
  settings: null,
  onRemoveCity: null
};

export default City;
