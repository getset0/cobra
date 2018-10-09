import React from "react";
import Input from "./Input";
import "jest-styled-components";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

it("renders Input without crashing", () => {
  shallow(<Input />);
});

it("renders normal Input correctly", () => {
  const wrapper = shallow(<Input />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("correctly renders disabled input", () => {
  const wrapper = shallow(
    <Input placeholder="test" disabled />
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("correctly renders search input", () => {
  const wrapper = shallow(
    <Input placeholder="test" type="search" />
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("correctly renders password input", () => {
  const wrapper = shallow(
    <Input placeholder="test" type="password" />
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("correctly renders password input", () => {
  const wrapper = shallow(
    <Input placeholder="test" type="number" />
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
