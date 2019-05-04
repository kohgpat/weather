import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as settingsActions from "../../store/settings/actions";
import * as settingsSelectores from "../../store/settings/selectors";
import Topbar from "../../components/Topbar";

class TopbarContainer extends Component {
  toggleSettingsUnits = units => {
    this.props.actions.settings.settingsSetUnits(units);
  };

  render() {
    return (
      <Topbar {...this.props} toggleSettingsUnits={this.toggleSettingsUnits} />
    );
  }
}

const mapStateToProps = (state) => ({
  settings: {
    isCelcius: settingsSelectores.isCelsius(state),
    isFahrenheit: settingsSelectores.isFahrenheit(state)
  }
});

const mapDispatchToProps = dispatch => ({
  actions: {
    settings: bindActionCreators(settingsActions, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(TopbarContainer);
