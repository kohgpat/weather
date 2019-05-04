/* global module */
import React from "react";
import { storiesOf } from "@storybook/react";
import WeatherDegree from "./index";

storiesOf("WeatherDegree", module)
  .add("Celcius", () => <WeatherDegree units="celcius" />)
  .add("Fahrenheit", () => <WeatherDegree units="fahrenheit" />);
