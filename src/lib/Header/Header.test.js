import React from "react";
import Header from "./Header";
import "jest-styled-components";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

it("renders header without crashing", () => {
  shallow(<Header />);
});

it("renders header correctly", () => {
  const wrapper = shallow(<Header />);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

