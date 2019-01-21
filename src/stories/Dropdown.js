import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions } from "./util";
import {
  Dropdown,
  DropdownBody,
  DropdownTrigger,
  DropdownButton,
  List,
  ListItem
} from "../lib";

storiesOf("Dropdown", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Dropdown", () => (
    <Dropdown withBorder isOpen>
      {({ isOpen, handleTriggerClick }) => (
        <React.Fragment>
          <DropdownTrigger onClick={handleTriggerClick}>
            <DropdownButton isOpen={isOpen}>Trigger</DropdownButton>
          </DropdownTrigger>
          <DropdownBody isOpen={isOpen}>
            <List>
              <ListItem onClick={() => console.log("item1")}>item1</ListItem>
              <ListItem onClick={() => console.log("item2")}>item2</ListItem>
              <ListItem onClick={() => console.log("item3")}>item3</ListItem>
              <ListItem onClick={() => console.log("item4")}>item4</ListItem>
            </List>
          </DropdownBody>
        </React.Fragment>
      )}
    </Dropdown>
  ));

