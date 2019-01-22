import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions } from "./util";
import { Textarea } from "../lib";

storiesOf("Textarea", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Textarea", () => <Textarea placeholder="Your text ..." label="Text" />)
  .add("Text area full width", () => (
    <Textarea placeholder="Your text ..." label="Text" width="100%" />
  ));
