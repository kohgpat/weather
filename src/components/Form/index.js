import React, { Component } from "react";
import * as styles from "./styles";

const INITIAL_STATE = {
  name: "",
  interval: 10
};

const convertMinutesToSeconds = minutes => {
  return minutes * 60;
};

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = INITIAL_STATE;
  }

  handleFieldChange = (field, value) => {
    this.setState({
      [field]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (!this.isValid()) {
      return false;
    }

    const city = {
      name: this.state.name.replace(/ /g, ''),
      interval: convertMinutesToSeconds(this.state.interval) * 1000
    };

    this.props.onAddCity(city);

    this.setState({
      ...INITIAL_STATE
    });
  };

  isValid = () => {
    const { name, interval } = this.state;

    if (!name || !name.length) {
      return false;
    }

    if (!interval) {
      return false;
    }

    return true;
  };

  render() {
    return (
      <styles.Form
        onSubmit={this.handleSubmit}
        inSidebar={this.props.inSidebar}>
        <styles.Block>
          <styles.Name>Enter City</styles.Name>
        </styles.Block>

        <styles.Block>
          <styles.Label>Name</styles.Label>
          <styles.Input
            name="name"
            value={this.state.name}
            onChange={e => this.handleFieldChange("name", e.target.value)}
          />
        </styles.Block>

        <styles.Block>
          <styles.Label>
            Update interval
            <styles.HelpText>(in minutes)</styles.HelpText>
          </styles.Label>
          <styles.Input
            name="interval"
            type="number"
            value={this.state.interval}
            onChange={e => this.handleFieldChange("interval", e.target.value)}
          />
        </styles.Block>

        <styles.Block>
          <styles.SubmitButton disabled={!this.isValid()}>
            Add city
          </styles.SubmitButton>
        </styles.Block>
      </styles.Form>
    );
  }
}

export default Form;
