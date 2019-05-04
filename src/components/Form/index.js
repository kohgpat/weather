import React, { useState } from "react";
import * as s from "./styles";

const INITIAL_STATE = {
  name: "",
  interval: 10
};

const convertMinutesToSeconds = minutes => {
  return minutes * 60;
};

const Form = props => {
  const [name, setName] = useState(INITIAL_STATE.name);
  const [interval, setInterval] = useState(INITIAL_STATE.interval);

  const handleSubmit = e => {
    e.preventDefault();

    if (!isValid()) {
      return false;
    }

    const city = {
      name: name.replace(/ /g, ""),
      interval: convertMinutesToSeconds(interval) * 1000
    };

    props.onAddCity(city);

    setName(INITIAL_STATE.name);
    setInterval(INITIAL_STATE.interval);
  };

  const isValid = () => {
    if (!name || !name.length) {
      return false;
    }

    if (!interval) {
      return false;
    }

    return true;
  };

  return (
    <s.Form onSubmit={handleSubmit} inSidebar={props.inSidebar}>
      <s.Block>
        <s.Name>Enter City</s.Name>
      </s.Block>

      <s.Block>
        <s.Label>Name</s.Label>
        <s.Input
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
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
          value={interval}
          onChange={e => setInterval(e.target.value)}
        />
      </s.Block>

      <s.Block>
        <s.SubmitButton disabled={!isValid()}>Add city</s.SubmitButton>
      </s.Block>
    </s.Form>
  );
};

export default Form;
