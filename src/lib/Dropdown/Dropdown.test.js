import React from "react";
import Dropdown from "./Dropdown";
import {
  DropdownTrigger,
  DropdownBody
} from "./aux";
import "jest-styled-components";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const BasicDropdown = (props) =>
  <Dropdown withBorder {...props}>
    {({ isOpen, handleTriggerClick }) => (
      <React.Fragment>
        <DropdownTrigger onClick={handleTriggerClick}>
          Trigger
        </DropdownTrigger>
        <DropdownBody isOpen={isOpen}>
          Body
        </DropdownBody>
      </React.Fragment>
    )}
  </Dropdown>;

it("renders Dropdown without crashing", () => {
  shallow(BasicDropdown());
});

it("renders Dropdown correctly", () => {
  const wrapper = shallow(BasicDropdown());
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("test Dropdown toggle", () => {
  const mockStateChange = jest.fn(x => x);
  const wrapper = shallow(
    BasicDropdown({ onStateChange: mockStateChange })
  );
  // has a trigger
  const ddTrigger = wrapper.find(DropdownTrigger);
  expect(ddTrigger).toHaveLength(1);

  // click 3 times on trigger
  ddTrigger.prop("onClick")();
  ddTrigger.prop("onClick")();
  ddTrigger.prop("onClick")();

  // expect to have called mock 3 times
  expect(mockStateChange.mock.calls).toHaveLength(3);

  // expect mock params to be consistent
  expect(mockStateChange.mock.calls[0][0]).toBeTruthy();
  expect(mockStateChange.mock.calls[1][0]).toBeFalsy();
  expect(mockStateChange.mock.calls[2][0]).toBeTruthy();
});
