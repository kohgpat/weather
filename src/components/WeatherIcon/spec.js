import React from "react";
import WeatherIcon from "./index";
import * as styles from "./styles";
import { shallow, render } from "enzyme";

const weather = {
  icon: "10d"
};

it("renders", () => {
  const iconWithoutWeather = shallow(<WeatherIcon />);
  expect(iconWithoutWeather).toMatchSnapshot();

  const iconWithWeather = shallow(<WeatherIcon weather={weather} />);
  expect(iconWithWeather).toMatchSnapshot();
});

it("renders null without weather", () => {
  const icon = shallow(<WeatherIcon />);
  expect(icon.type()).toEqual(null);
});
