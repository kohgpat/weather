import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
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
        <FormContainer />
      </styles.App>
    );
  }
}

export default App;
