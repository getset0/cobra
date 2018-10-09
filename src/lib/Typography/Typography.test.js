import React from "react";
import H1 from "./H1";
import H2 from "./H2";
import H3 from "./H3";
import Paragraph from "./Paragraph";
import { shallow } from "enzyme";

it("renders H1 without crashing", () => {
  shallow(<H1>Test</H1>);
});

it("renders H2 without crashing", () => {
  shallow(<H2>Test</H2>);
});

it("renders H3 without crashing", () => {
  shallow(<H3>Test</H3>);
});

it("renders paragraph without crashing", () => {
  shallow(<Paragraph>Test</Paragraph>);
});

