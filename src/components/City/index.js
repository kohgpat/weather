import React from "react";
import * as styles from "./styles";

const City = ({ city = null, onRemoveCity }) => {
  if (!city) {
    return null;
  }

  return (
    <styles.City>
      <styles.Header>
        <styles.Name>{city.name}</styles.Name>
        <styles.RemoveButton onClick={() => onRemoveCity(city)}>
          &times;
        </styles.RemoveButton>
      </styles.Header>

      <styles.Stats>
        <styles.Stat major>{city.main && city.main.temp}</styles.Stat>
        <styles.Stat>
          {city.weather && city.weather.length > 0 && city.weather[0].main}
        </styles.Stat>
      </styles.Stats>
    </styles.City>
  );
};

export default City;
