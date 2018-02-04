import React, { Component } from "react";
import Topbar from "../../components/Topbar";

class TopbarContainer extends Component {
  state = {
    settings: {
      units: "celcius"
    }
  };

  toggleSettingsUnits = units => {
    this.setState(state => ({
      settings: {
        ...state.settings,
        units
      }
    }));
  };

  render() {
    return (
      <Topbar
        {...this.props}
        {...this.state}
        toggleSettingsUnits={this.toggleSettingsUnits}
      />
    );
  }
}

export default TopbarContainer;
