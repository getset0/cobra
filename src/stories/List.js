import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions, testImageSrc } from "./util";
import { Image, List, ListItem } from "../lib";

const CustomListItem = () => (
  <React.Fragment>
    <Image src={testImageSrc} width={200} height={100} />
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginLeft: "10px"
      }}
    >
        Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text
        Text Text Text
    </div>
  </React.Fragment>
);

storiesOf("List", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Text", () => (
    <List>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </List>
  ))
  .add("Horizontal", () => (
    <List orientation="horizontal">
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </List>
  ))
  .add("Centered", () => (
    <List center>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
      <ListItem>Item</ListItem>
    </List>
  ))
  .add("Custom Component", () => (
    <List>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
    </List>
  ))
  .add("Custom Component Space Around", () => (
    <List spaceAround>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
    </List>
  ))
  .add("Custom Component Space Between", () => (
    <List spaceBetween>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
      <ListItem>
        <CustomListItem />
      </ListItem>
    </List>
  ));


