import React, { Component } from "react";
import * as styles from "./styles";

class Topbar extends Component {
  state = {
    isMobile: this.props.isMobile
  };

  render() {
    const {
      settings,
      isMobile,
      addCitySidebar,
      toggleSettingsUnits,
      toggleAddCitySidebar
    } = this.props;

    return (
      <styles.Topbar isMobile={isMobile} addCitySidebar={addCitySidebar}>
        <styles.Container>
          <styles.Settings>
            <styles.SettingsControl
              isActive={settings.units === "celcius"}
              disabled={settings.units === "celcius"}
              onClick={() => toggleSettingsUnits("celcius")}>
              {isMobile ? "C" : "Celcius"}
            </styles.SettingsControl>

            <styles.SettingsControl
              isActive={settings.units === "fahrenheit"}
              disabled={settings.units === "fahrenheit"}
              onClick={() => toggleSettingsUnits("fahrenheit")}>
              {isMobile ? "F" : "Fahrenheit"}
            </styles.SettingsControl>
          </styles.Settings>

          <styles.Name>Weather</styles.Name>
          <styles.AddCitySidebarToggle onClick={toggleAddCitySidebar}>
            +
          </styles.AddCitySidebarToggle>
        </styles.Container>
      </styles.Topbar>
    );
  }
}

export default Topbar;
