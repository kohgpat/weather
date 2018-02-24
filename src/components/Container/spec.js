/*global it, expect*/
import React from "react";
import Container from "./index";
import { shallow } from "enzyme";

it("renders", () => {
  const container = shallow(<Container />);
  expect(container).toMatchSnapshot();
});
