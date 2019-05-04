import React from "react";
import PropTypes from "prop-types";
import City from "../City";
import * as s from "./styles";

const Cities = ({
  cities,
  settings,
  isMobile,
  addCitySidebar,
  onRemoveCity
}) => {
  if (!cities.length) {
    return (
      <s.NoCitiesMessage>
        You have no cities. Please add one using form below.
      </s.NoCitiesMessage>
    );
  }

  return (
    <s.Cities isMobile={isMobile} addCitySidebar={addCitySidebar}>
      {cities.map(city => (
        <City
          key={city.id}
          city={city}
          settings={settings}
          onRemoveCity={onRemoveCity}
        />
      ))}
    </s.Cities>
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
