import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as citiesActions from "../../store/cities/actions";
import * as citiesSelectors from "../../store/cities/selectors";
// import nanoid from "nanoid";
import Topbar from "../Topbar";
import Cities from "../Cities";
import FormContainer from "../../containers/Form";
import * as styles from "./styles";

class App extends Component {
  componentDidMount() {
    this.props.actions.cities.citiesAll();
  }

  // handleAddCity = city => {
  //   this.setState(state => ({
  //     cities: [
  //       ...state.cities,
  //       {
  //         ...city,
  //         id: nanoid()
  //       }
  //     ]
  //   }));
  // };

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
    const { cities } = this.props;

    return (
      <styles.App>
        <Topbar />
        <Cities cities={cities} onRemoveCity={this.handleRemoveCity} />
        <FormContainer />
      </styles.App>
    );
  }
}

const mapStateToProps = ({ cities }) => ({
  cities: citiesSelectors.getCities(cities)
});

const mapDispatchToProps = dispatch => ({
  actions: {
    cities: bindActionCreators(citiesActions, dispatch)
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
