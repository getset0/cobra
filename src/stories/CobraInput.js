import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions } from "./util";
import { CobraInput } from "../lib";

storiesOf("CobraInput", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("CobraInput Text", () => (
    <React.Fragment>
      <CobraInput placeholder="test" />
      <CobraInput placeholder="test" disabled />
    </React.Fragment>
  ))
  .add("CobraInput Search", () => (
    <CobraInput placeholder="Search" type="search" />
  ))
  .add("CobraInput Password", () => (
    <CobraInput placeholder="password" type="password" />
  ))
  .add("CobraInput Number", () => (
    <CobraInput placeholder="number" type="number" />
  ));
