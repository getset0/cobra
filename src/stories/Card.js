import React from "react";
import {
  Card
} from "../lib";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions } from "./util";


export default storiesOf("Card", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Card", () => (
    <div style={{ padding: "20px" }}>
      <Card>Simple Card</Card>
      <Card title="Card title">I am a card with title</Card>
      <Card title="Card title" subtitle="card subtitle">I am a card with title and subtitle</Card>
      <Card title={<h1>Custom title</h1>}>I am a card with custom title</Card>
      <Card
        title={<h1>I am a custom title</h1>}
        subtitle={<h3>I am a custom subtitle</h3>}
      >
        I am another card with custom title and subtitle
      </Card>
    </div>
  ));
