import React, { Component } from "react";
import * as styles from "./styles";

const isMobile = () => {
  let mobile = true;

  if (window.innerWidth > 767) {
    mobile = false;
  }

  return mobile;
};

class Topbar extends Component {
  state = {
    isMobile: isMobile()
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isMobile: isMobile()
    });
  }

  render() {
    const { settings, toggleSettingsUnits, toggleAddCitySidebar } = this.props;

    const isMobile = this.state.isMobile;

    return (
      <styles.Topbar>
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
