/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import WeatherIcon from "./index";

storiesOf("WeatherIcon", module).add("default", () => (
  <WeatherIcon weather={{ icon: "rain.png" }} />
));
