import React, { Component } from "react";
import nanoid from "nanoid";
import Topbar from "../Topbar";
import Cities from "../Cities";
import Form from "../Form";
import * as styles from "./styles";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cities: [
      ]
    };
  }

  handleAddCity = city => {
    this.setState(state => ({
      cities: [
        ...state.cities,
        {
          ...city,
          id: nanoid()
        }
      ]
    }));
  };

  handleRemoveCity = city => {
    const idx = this.state.cities.findIndex(c => c.id === city.id);

    const cities = [
      ...this.state.cities.slice(0, idx),
      ...this.state.cities.slice(idx + 1)
    ];

    this.setState(state => ({
      cities
    }));
  };

  render() {
    const { cities } = this.state;

    return (
      <styles.App>
        <Topbar />
        <Cities cities={cities} onRemoveCity={this.handleRemoveCity} />
        <Form onAddCity={this.handleAddCity} />
      </styles.App>
    );
  }
}

export default App;
