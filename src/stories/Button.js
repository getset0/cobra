import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions } from "./util";
import { Button } from "../lib";

storiesOf("Button", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Normal", () => (
    <React.Fragment>
      <Button small>Small Button</Button>
      <Button>Normal Button</Button>
      <Button large>Large Button</Button>
      <Button uppercase>Normal Uppercase Button</Button>
    </React.Fragment>
  ))
  .add("Primary", () => (
    <React.Fragment>
      <Button primary small>
      Small Button
      </Button>
      <Button primary>Primary Button</Button>
      <Button primary large>
      Large Button
      </Button>
      <Button primary uppercase>
      Primary Button
      </Button>
    </React.Fragment>
  ))
  .add("Secondary", () => (
    <React.Fragment>
      <Button secondary small>
      Small Button
      </Button>
      <Button secondary>Secondary Button</Button>
      <Button secondary large>
      Large Button
      </Button>
      <Button secondary uppercase>
      Secondary Button
      </Button>
    </React.Fragment>
  ))
  .add("Disabled", () => (
    <React.Fragment>
      <Button disabled>Disabled Button</Button>
      <Button disabled uppercase>
      Disabled Button
      </Button>
    </React.Fragment>
  ));
