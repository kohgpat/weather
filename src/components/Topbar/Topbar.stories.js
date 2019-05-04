import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Topbar from "./index";

storiesOf("Topbar", module).add("default", () => (
  <Topbar
    settings={{
      units: "celcius"
    }}
    toggleSettingsUnits={() => action("toggleSettingsUnits")}
  />
));
