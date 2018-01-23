import React from "react";
import City from "../City";
import * as styles from "./styles";

const Cities = ({ cities = [] }) => {
  if (!cities.length) {
    return null;
  }

  return (
    <styles.Cities>
      {cities.map(city => (
        <City key={city.id} city={city} />
      ))}
    </styles.Cities>
  );
};

export default Cities;
