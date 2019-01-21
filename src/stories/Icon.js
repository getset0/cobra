import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions } from "./util";
import { Link, Paragraph } from "../lib";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faCheckSquare } from "@fortawesome/free-solid-svg-icons";

storiesOf("Icon", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Icon", () => (
    <React.Fragment>
      <FontAwesomeIcon icon={faCoffee} />
      <FontAwesomeIcon icon={faCheckSquare} />
      <Paragraph>
        We should create a library for that. See{" "}
        <Link
          href="https://github.com/FortAwesome/react-fontawesome"
          target="_blank"
        >
          react-fontawesome docs
        </Link>{" "}
        for more details. In the future future we will create our own icons and
        remove this.
      </Paragraph>
    </React.Fragment>
  ));

