import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { Link } from "../lib";

storiesOf("Link", module)
  .addDecorator(withInfo)
  .add("Simple Link", () => (
    <Link href="/?selectedKind=Link&selectedStory=Simple%20Link">
    My simple link
    </Link>
  ));
