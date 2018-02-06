import React from "react";
import City from "./index";
import * as styles from "./styles";
import { shallow, mount } from "enzyme";

const CITY = {
  id: 1,
  name: "Moscow",
  weather: [{ main: { temp: "-10", description: "mist" } }]
};

it("renders", () => {
  const withoutCity = shallow(<City />);
  expect(withoutCity).toMatchSnapshot();

  const withCity = shallow(<City city={CITY} />);
  expect(withCity).toMatchSnapshot();
});

// TODO: jsdom currently not working properly with @supports css rule
// it("renders - city info", () => {
//   const city = mount(<City city={CITY} />);
//   expect(city.text()).toContain("Moscow");
// });

it("correctly invokes onRemoveCity callback", () => {
  const onRemoveCity = jest.fn();
  const city = shallow(<City city={CITY} onRemoveCity={onRemoveCity} />);
  const removeButton = city.find(styles.RemoveButton);
  removeButton.simulate("click");
  expect(onRemoveCity).toBeCalled();
});
