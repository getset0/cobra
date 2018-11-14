import React from "react";
import Message from "./Message";
import "jest-styled-components";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

it("renders message without crashing", () => {
  shallow(<Message />);
});

it("renders default message correctly", () => {
  const wrapper = shallow(<Message />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("renders warning message correctly", () => {
  const wrapper = shallow(<Message type="warning" />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("renders success message correctly", () => {
  const wrapper = shallow(<Message type="success" />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("renders error message correctly", () => {
  const wrapper = shallow(<Message type="error" />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
