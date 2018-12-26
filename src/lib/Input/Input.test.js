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

it("renders an errored input", () => {
  const wrapper = shallow(<Input error="field can't be blank" />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("renders an validated input", () => {
  const wrapper = shallow(<Input valid={true} />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("renders Input with label", () => {
  const wrapper = shallow(<Input label="test label" />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

