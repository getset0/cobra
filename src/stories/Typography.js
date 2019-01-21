import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";

import {
  H1,
  H2,
  H3,
  Paragraph
} from "../lib";

const testParagraphText = `Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
`;

storiesOf("Typography", module)
  .addDecorator(withInfo)
  .add("Headers", () => (
    <React.Fragment>
      <H1>HEADER 1</H1>
      <H2>HEADER 2</H2>
      <H3>HEADER 3</H3>
      <H1 color="#ff0000">Custom Color HEADER 1</H1>
      <H1 center>HEADER 1 CENTERED</H1>
      <H2 center>HEADER 2 CENTERED</H2>
      <H3 center>HEADER 3 CENTERED</H3>
    </React.Fragment>
  ))
  .add("Paragraph", () => (
    <React.Fragment>
      <Paragraph>{testParagraphText}</Paragraph>
      <Paragraph center>{testParagraphText}</Paragraph>
      <Paragraph justify>{testParagraphText}</Paragraph>
      <Paragraph magnify>{testParagraphText}</Paragraph>
      <Paragraph color="#ff0000">{testParagraphText}</Paragraph>
    </React.Fragment>
  ));
