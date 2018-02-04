import React from "react";
import City from "../City";
import * as styles from "./styles";

const Cities = ({ cities = [], onRemoveCity }) => {
  if (!cities.length) {
    return (
      <styles.NoCitiesMessage>
        You have no any cities. Please add one using form below.
      </styles.NoCitiesMessage>
    );
  }

  return (
    <styles.Cities>
      {cities.map(city => (
        <City key={city.id} city={city} onRemoveCity={onRemoveCity} />
      ))}
    </styles.Cities>
  );
};

export default Cities;
