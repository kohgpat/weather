import React from "react";
import City from "./index";
import * as styles from "./styles";
import { shallow, mount } from "enzyme";

const city = {
  id: 1,
  name: "Moscow",
  weather: [{ main: { temp: "-10", description: "mist" } }]
};

const settings = {
  units: "celcius"
};

const onRemoveCity = jest.fn();

it("renders", () => {
  const component = shallow(
    <City city={{}} settings={settings} onRemoveCity={onRemoveCity} />
  );
  expect(component).toMatchSnapshot();

  const withCity = shallow(
    <City city={city} settings={settings} onRemoveCity={onRemoveCity} />
  );
  expect(withCity).toMatchSnapshot();
});

// TODO: jsdom currently not working properly with @supports css rule
// it("renders - city info", () => {
//   const component = mount(
//     <City city={city} settings={settings} onRemoveCity={onRemoveCity} />
//   );
//   expect(component.text()).toContain("Moscow");
// });

it("correctly invokes onRemoveCity callback", () => {
  const component = shallow(
    <City city={city} settings={settings} onRemoveCity={onRemoveCity} />
  );
  const removeButton = component.find(styles.RemoveButton);
  removeButton.simulate("click");
  expect(onRemoveCity).toBeCalled();
});
