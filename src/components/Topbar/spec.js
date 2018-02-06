import React from "react";
import Topbar from "./index";
import * as styles from "./styles";
import { shallow, mount } from "enzyme";

const settings = {
  units: "celcius"
};
const toggleSettingsUnits = jest.fn();
const toggleAddCitySidebar = jest.fn();

it("render", () => {
  const topbar = shallow(
    <Topbar
      settings={settings}
      toggleSettingsUnits={toggleSettingsUnits}
      toggleAddCitySidebar={toggleAddCitySidebar}
    />
  );
  expect(topbar).toMatchSnapshot();
});

it("renders text and data", () => {
  const topbar = mount(
    <Topbar
      settings={settings}
      toggleSettingsUnits={toggleSettingsUnits}
      toggleAddCitySidebar={toggleAddCitySidebar}
    />
  );
  const name = topbar.find(styles.Name);
  expect(name.text()).toEqual("Weather");
});
