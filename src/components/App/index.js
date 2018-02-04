import React, { Component } from "react";
import { connect } from "react-redux";
import * as citiesSelectors from "../../store/cities/selectors";
import CitiesContainer from "../../containers/Cities";
import FormContainer from "../../containers/Form";
import Topbar from "../Topbar";
import AddCitySidebar from "../../components/AddCitySidebar";
import * as styles from "./styles";

class App extends Component {
  state = {
    settings: {
      units: "celcius"
    },
    addCitySidebar: {
      isVisible: false
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keydownPressed, false);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownPressed, false);
  }

  keydownPressed = e => {
    const { addCitySidebar } = this.state;

    if (addCitySidebar.isVisible && e.keyCode === 27) {
      this.toggleAddCitySidebar();
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

  toggleAddCitySidebar = () => {
    this.setState(state => ({
      addCitySidebar: {
        ...state.addCitySidebar,
        isVisible: !state.addCitySidebar.isVisible
      }
    }));
  };

  render() {
    return (
      <styles.App>
        <Topbar
          {...this.state}
          toggleSettingsUnits={this.toggleSettingsUnits}
          toggleAddCitySidebar={this.toggleAddCitySidebar}
        />

        <CitiesContainer />

        {this.props.cities.length < 1 && <FormContainer />}

        <AddCitySidebar
          {...this.state}
          toggleAddCitySidebar={this.toggleAddCitySidebar}
        />
      </styles.App>
    );
  }
}

const mapStateToProps = state => ({
  cities: citiesSelectors.getCities(state)
});

export default connect(mapStateToProps, null)(App);
