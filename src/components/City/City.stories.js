/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import City from "./index";

const city = {
  name: "Moscow",
  weather: [{ main: 22, temp: 22 }]
};

const settings = {
  units: "celcius"
};

storiesOf("City", module).add("default", () => (
  <City city={city} settings={settings} onRemoveCity={action("onRemoveCity")} />
));
