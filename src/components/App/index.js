import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Topbar from "../Topbar";
import CitiesContainer from "../../containers/Cities";
import FormContainer from "../../containers/Form";
import * as styles from "./styles";

class App extends Component {
  // handleRemoveCity = city => {
  //   const idx = this.state.cities.findIndex(c => c.id === city.id);

  //   const cities = [
  //     ...this.state.cities.slice(0, idx),
  //     ...this.state.cities.slice(idx + 1)
  //   ];

  //   this.setState(state => ({
  //     cities
  //   }));
  // };

  render() {
    return (
      <styles.App>
        <Topbar />
        <CitiesContainer />
        <FormContainer />
      </styles.App>
    );
  }
}

export default App;
