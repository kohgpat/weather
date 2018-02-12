import React from "react";
import WeatherIcon from "./index";
import * as styles from "./styles";
import { shallow, render } from "enzyme";

const weather = {
  icon: "10d"
};

it("renders", () => {
  const weatherIcon = shallow(<WeatherIcon weather={weather} />);
  expect(weatherIcon).toMatchSnapshot();
});
