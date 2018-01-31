import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as citiesActions from "../../store/cities/actions";
import * as citiesSelectors from "../../store/cities/selectors";
import Cities from "../../components/Cities";

class CitiesContainer extends Component {
  componentDidMount() {
    this.props.actions.cities.citiesAll();
  }

  handleRemoveCity = (city) => {
    this.props.actions.cities.citiesRemove(city);
  };

  render() {
    const { cities } = this.props;

    return <Cities cities={cities} onRemoveCity={this.handleRemoveCity} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(CitiesContainer);
