import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions } from "./util";
import { Message } from "../lib";

storiesOf("Message", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Messages", () => (
    <React.Fragment>
      <Message text="I am a default" />
      <Message text="I am a warning" type="warning" />
      <Message text="I am a success" type="success" />
      <Message text="I am an error" type="error" />
      <Message text="Test" width={100} />

      <Message text="I am a default" hasShadow={false} />
      <Message text="I am a warning" type="warning" hasShadow={false} />
      <Message text="I am a success" type="success" hasShadow={false} />
      <Message text="I am an error" type="error" hasShadow={false} />
      <Message text="Test" width={100} hasShadow={false} />
    </React.Fragment>
  ));
