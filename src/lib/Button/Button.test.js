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

it("correctly renders small button with text child", () => {
  const wrapper = shallow(
    <Button small>
      Small Button
    </Button>
  );
  const tree = toJson(wrapper);
  expect(tree).toHaveStyleRule("height", "30px");
  expect(tree).toHaveStyleRule("line-height", "30px");
  expect(tree).toHaveStyleRule("padding", "0em 1em");
  expect(tree).toHaveStyleRule("font-size", "0.85em");
});

it("correctly renders large button with text child", () => {
  const wrapper = shallow(
    <Button large>
      Large Button
    </Button>
  );
  const tree = toJson(wrapper);
  expect(tree).toHaveStyleRule("height", "48px");
  expect(tree).toHaveStyleRule("line-height", "48px");
  expect(tree).toHaveStyleRule("padding", "0em 2.5em");
  expect(tree).toHaveStyleRule("font-size", "1.15em");
});


it("renders normal button with uppercase", () => {
  const wrapper = shallow(
    <Button uppercase>
      uppercase
    </Button>
  );
  const tree = toJson(wrapper);
  expect(tree).toHaveStyleRule("text-transform", "uppercase");
});

it("renders disabled button", () => {
  const wrapper = shallow(
    <Button disabled>
      uppercase
    </Button>
  );
  const tree = toJson(wrapper);
  expect(tree).toHaveStyleRule("opacity", "0.5");
  expect(tree).toHaveStyleRule("cursor", "not-allowed", {
    modifier: ":hover"
  });
});
