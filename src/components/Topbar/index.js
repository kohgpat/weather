import React from "react";
import * as styles from "./styles";

const Topbar = ({ settings, toggleSettingsUnits, toggleAddCitySidebar }) => (
  <styles.Topbar>
    <styles.Container>
      <styles.Settings>
        <styles.SettingsControl
          isActive={settings.units === "celcius"}
          disabled={settings.units === "celcius"}
          onClick={() => toggleSettingsUnits("celcius")}>
          Celcius
        </styles.SettingsControl>

        <styles.SettingsControl
          isActive={settings.units === "fahrenheit"}
          disabled={settings.units === "fahrenheit"}
          onClick={() => toggleSettingsUnits("fahrenheit")}>
          Fahrenheit
        </styles.SettingsControl>
      </styles.Settings>

      <styles.Name>Weather</styles.Name>
      <styles.AddCitySidebarToggle onClick={toggleAddCitySidebar}>
        +
      </styles.AddCitySidebarToggle>
    </styles.Container>
  </styles.Topbar>
);

export default Topbar;
