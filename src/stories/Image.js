import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions, testImageSrc } from "./util";
import { Image } from "../lib";

storiesOf("Image", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Image", () => (
    <Image src={testImageSrc} width={200} height={100} />
  ));
