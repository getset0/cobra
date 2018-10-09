import React from "react";
import Link from "./Link";
import { mount } from "enzyme";

it("renders Link without crashing", () => {
  mount(<Link>test</Link>);
});
