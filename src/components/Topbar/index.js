import React from "react";
import * as styles from "./styles";

const Topbar = ({ toggleAddCitySidebar }) => (
  <styles.Topbar>
    <styles.Container>
      <styles.Name>Weather</styles.Name>
      <styles.AddCitySidebarToggle onClick={toggleAddCitySidebar}>
        +
      </styles.AddCitySidebarToggle>
    </styles.Container>
  </styles.Topbar>
);

export default Topbar;
