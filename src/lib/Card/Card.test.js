import React from "react";
import Card from "./Card";
import "jest-styled-components";
import { shallow } from "enzyme";

it("renders card without crashing", () => {
  shallow(<Card>I am a nice card</Card>);
});


