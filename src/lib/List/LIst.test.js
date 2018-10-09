import React from "react";
import ListItem from "./ListItem";
import List from "./List";
import "jest-styled-components";
import { shallow, mount } from "enzyme";
import toJson from "enzyme-to-json";

const ListOfItems = () =>
  <List>
    <ListItem>1</ListItem>
    <ListItem>2</ListItem>
    <ListItem>3</ListItem>
  </List>;

it("renders List with ListItems without crashing", () => {
  mount(ListOfItems());
});

it("renders List with ListItems correctly", () => {
  const wrapper = shallow(ListOfItems());
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
