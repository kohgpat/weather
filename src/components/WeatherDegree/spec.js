import React from "react";
import WeatherDegree from "./index";
import { shallow } from "enzyme";

it("renders null", () => {
  const weatherDegree = shallow(<WeatherDegree units="" />);
  expect(weatherDegree).toMatchSnapshot();
});

it("renders Celcius", () => {
  const weatherDegree = shallow(<WeatherDegree units="celcius" />);
  expect(weatherDegree).toMatchSnapshot();
});

it("renders Fahrenheit", () => {
  const weatherDegree = shallow(<WeatherDegree units="fahrenheit" />);
  expect(weatherDegree).toMatchSnapshot();
});
