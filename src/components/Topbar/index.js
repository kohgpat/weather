import React, { Component } from "react";
import * as s from "./styles";

class Topbar extends Component {
  render() {
    const {
      settings,
      isMobile,
      addCitySidebar,
      toggleSettingsUnits,
      toggleAddCitySidebar
    } = this.props;

    return (
      <s.Topbar isMobile={isMobile} addCitySidebar={addCitySidebar}>
        <s.Container>
          <s.Settings>
            <s.SettingsControl
              isActive={settings.isCelcius}
              disabled={settings.isCelcius}
              onClick={() => toggleSettingsUnits("celcius")}
            >
              {isMobile ? "C" : "Celcius"}
            </s.SettingsControl>

            <s.SettingsControl
              isActive={settings.isFahrenheit}
              disabled={settings.isFahrenheit}
              onClick={() => toggleSettingsUnits("fahrenheit")}
            >
              {isMobile ? "F" : "Fahrenheit"}
            </s.SettingsControl>
          </s.Settings>

          <s.Name>Weather</s.Name>
          <s.AddCitySidebarToggle onClick={toggleAddCitySidebar}>
            Add
          </s.AddCitySidebarToggle>
        </s.Container>
      </s.Topbar>
    );
  }
}

export default Topbar;
