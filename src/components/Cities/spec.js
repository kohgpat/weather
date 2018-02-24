/*global jest, it, expect*/
import React from "react";
import Cities from "./index";
import { shallow, mount } from "enzyme";

const settings = {
  units: "celcius"
};

const onRemoveCity = jest.fn();

it("renders", () => {
  const cities = shallow(
    <Cities settings={settings} onRemoveCity={onRemoveCity} />
  );
  expect(cities).toMatchSnapshot();
});

it("renders - no cities", () => {
  const cities = mount(
    <Cities settings={settings} onRemoveCity={onRemoveCity} />
  );
  expect(cities.text()).toContain(
    "You have no cities. Please add one using form below."
  );
});

it("renders - with cities", () => {
  const cities = shallow(
    <Cities
      cities={[{ id: 1, name: "Moscow" }, { id: 2, name: "Paris" }]}
      settings={settings}
      onRemoveCity={onRemoveCity}
    />
  );
  expect(cities.length).toEqual(1);
});
