import React from "react";
import { storiesOf } from "@storybook/react";

import { Button } from "../lib";

storiesOf("Button", module)
  .add("with text", () => (
    <Button>Hello Button</Button>
  ))
  .add("with text small", () => (
    <Button small>Hello Button</Button>
  ))
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
