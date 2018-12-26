import React from "react";
import CobraInput from "./CobraInput";
import "jest-styled-components";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

it("renders Input without crashing", () => {
  shallow(<CobraInput />);
});

it("renders normal Input correctly", () => {
  const wrapper = shallow(<CobraInput />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("correctly renders disabled input", () => {
  const wrapper = shallow(
    <CobraInput placeholder="test" disabled />
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("correctly renders search input", () => {
  const wrapper = shallow(
    <CobraInput placeholder="test" type="search" />
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("correctly renders password input", () => {
  const wrapper = shallow(
    <CobraInput placeholder="test" type="password" />
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("correctly renders password input", () => {
  const wrapper = shallow(
    <CobraInput placeholder="test" type="number" />
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
