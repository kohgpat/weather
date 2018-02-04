import React, { Component } from "react";
import { connect } from "react-redux";
import * as citiesSelectors from "../../store/cities/selectors";
import Topbar from "../Topbar";
import CitiesContainer from "../../containers/Cities";
import FormContainer from "../../containers/Form";
import * as styles from "./styles";

class App extends Component {
  render() {
    return (
      <styles.App>
        <Topbar />
        <CitiesContainer />

        {this.props.cities.length < 1 && <FormContainer />}
      </styles.App>
    );
  }
}

const mapStateToProps = state => ({
  cities: citiesSelectors.getCities(state)
});

export default connect(mapStateToProps, null)(App);
