import React from "react";
import * as styles from "./styles";

const Topbar = () => (
  <styles.Topbar>
    <styles.Container>
      <styles.Name>Weather</styles.Name>
      <styles.AddCityModalToggle>+</styles.AddCityModalToggle>
    </styles.Container>
  </styles.Topbar>
);

export default Topbar;
