import React from "react";
import Button from "./Button";
import "jest-styled-components";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

it("renders button without crashing", () => {
  shallow(<Button>Test</Button>);
});

it("renders normal button correctly", () => {
  const wrapper = shallow(<Button>Test</Button>);
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});
