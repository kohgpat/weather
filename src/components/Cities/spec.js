import React from "react";
import Cities from "./index";
import { shallow, mount } from "enzyme";

it("renders", () => {
  const cities = shallow(<Cities />);
  expect(cities).toMatchSnapshot();
});

it("renders - no cities", () => {
  const cities = mount(<Cities />);
  expect(cities.text()).toContain(
    "You have no any cities. Please add one using form below."
  );
});

it("renders - with cities", () => {
  const cities = shallow(
    <Cities cities={[{ id: 1, name: "Moscow" }, { id: 2, name: "Paris" }]} />
  );
  expect(cities.length).toEqual(1);
});
