import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions } from "./util";
import { Input } from "../lib";

storiesOf("Text Input", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Input Text/Password", () => (
    <React.Fragment>
      <Input label="Email" placeholder="type@email.com" />
      <Input label="Password" type="password" placeholder="******" />
    </React.Fragment>
  ))
  .add("Input Number", () => (
    <React.Fragment>
      <Input label="Age" type="number" placeholder="18" />
    </React.Fragment>
  ))
  .add("Input without label", () => (
    <React.Fragment>
      <Input placeholder="Type Here" />
    </React.Fragment>
  ))
  .add("Input errored", () => (
    <React.Fragment>
      <Input
        error="Email can't be blank"
        label="Email"
        placeholder="type@email.com"
      />
    </React.Fragment>
  ))
  .add("Input valid", () => (
    <React.Fragment>
      <Input
        valid={true}
        label="Email"
        value="my@email.com"
        placeholder="type@email.com"
      />
    </React.Fragment>
  ));
