import React, { Component } from "react";
import * as s from "./styles";

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
      <s.Form
        onSubmit={this.handleSubmit}
        inSidebar={this.props.inSidebar}>
        <s.Block>
          <s.Name>Enter City</s.Name>
        </s.Block>

        <s.Block>
          <s.Label>Name</s.Label>
          <s.Input
            name="name"
            value={this.state.name}
            onChange={e => this.handleFieldChange("name", e.target.value)}
          />
        </s.Block>

        <s.Block>
          <s.Label>
            Update interval
            <s.HelpText>(in minutes)</s.HelpText>
          </s.Label>
          <s.Input
            name="interval"
            type="number"
            value={this.state.interval}
            onChange={e => this.handleFieldChange("interval", e.target.value)}
          />
        </s.Block>

        <s.Block>
          <s.SubmitButton disabled={!this.isValid()}>
            Add city
          </s.SubmitButton>
        </s.Block>
      </s.Form>
    );
  }
}

export default Form;
