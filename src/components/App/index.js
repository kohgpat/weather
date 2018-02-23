import React, { Component } from "react";
import { connect } from "react-redux";
import * as citiesSelectors from "../../store/cities/selectors";
import CitiesContainer from "../../containers/Cities";
import FormContainer from "../../containers/Form";
import TopbarContainer from "../../containers/Topbar";
import AddCitySidebar from "../../components/AddCitySidebar";
import * as styles from "./styles";

const isMobile = () => {
  let mobile = true;

  if (window.innerWidth > 767) {
    mobile = false;
  }

  return mobile;
};

class App extends Component {
  state = {
    isMobile: isMobile(),
    addCitySidebar: {
      isVisible: false
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.keydownPressed, false);
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.keydownPressed, false);
    window.removeEventListener("resize", this.handleResize);
  }

  keydownPressed = e => {
    const { addCitySidebar } = this.state;

    if (addCitySidebar.isVisible && e.keyCode === 27) {
      this.toggleAddCitySidebar();
    }
  };

  handleResize = () => {
    this.setState({
      isMobile: isMobile()
    });
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
        <TopbarContainer
          {...this.state}
          toggleAddCitySidebar={this.toggleAddCitySidebar}
        />
        <CitiesContainer {...this.state} />

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
