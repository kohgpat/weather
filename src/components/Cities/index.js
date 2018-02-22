import React from "react";
import PropTypes from "prop-types";
import City from "../City";
import * as styles from "./styles";

const Cities = ({ cities, settings, onRemoveCity }) => {
  if (!cities.length) {
    return (
      <styles.NoCitiesMessage>
        You have no cities. Please add one using form below.
      </styles.NoCitiesMessage>
    );
  }

  return (
    <styles.Cities>
      {cities.map(city => (
        <City
          key={city.id}
          city={city}
          settings={settings}
          onRemoveCity={onRemoveCity}
        />
      ))}
    </styles.Cities>
  );
};

Cities.propTypes = {
  cities: PropTypes.array.isRequired,
  settings: PropTypes.object.isRequired,
  onRemoveCity: PropTypes.func.isRequired
};

Cities.defaultProps = {
  cities: [],
  settings: null,
  onRemoveCity: null
};

export default Cities;
