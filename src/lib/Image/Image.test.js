import React from "react";
import Image from "./Image";
import "jest-styled-components";
import { shallow } from "enzyme";

it("renders image without crashing", () => {
  shallow(<Image src="testsrc" />);
});


