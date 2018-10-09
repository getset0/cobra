import React from "react";
import Tabs from "./Tabs";
import {
  TabButtons,
  TabItems,
  TabItem,
  TabButton
} from "./aux";
import "jest-styled-components";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const testTabItems = [
  {
    id: "test",
    title: "Test",
    content: <div>test</div>
  },
  {
    id: "test2",
    title: "Test2",
    content: <div>test2</div>
  }
];

const BasicTabs = (props) =>
  <Tabs {...props}>
    {({ selectedItem, handleItemClick }) => (
      <React.Fragment>
        <TabButtons>
          {testTabItems.map((item, index) => (
            <TabButton
              width={100/testTabItems.length}
              key={item.title}
              id={item.id}
              isSelected={selectedItem === index}
              onClick={() => handleItemClick(index)}
            >
              {item.title}
            </TabButton>
          ))}
        </TabButtons>
        <TabItems>
          {testTabItems.map((item, index) => (
            <TabItem
              key={index}
              isSelected={selectedItem === index}
            >
              {item.contents}
            </TabItem>
          ))}
        </TabItems>
      </React.Fragment>
    )}
  </Tabs>;

it("renders without crash", () => {
  shallow(BasicTabs());
});

it("renders Tabs correctly", () => {
  const wrapper = shallow(BasicTabs());
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("test Tabs click", () => {
  const mockStateChange = jest.fn(x => x);
  const wrapper = shallow(
    BasicTabs({ onStateChange: mockStateChange })
  );

  // has 2 TabButton Component
  const buttons = wrapper.find(TabButton);
  expect(buttons).toHaveLength(2);

  const firstButton = wrapper.find("#test");
  const secondButton = wrapper.find("#test2");

  expect(firstButton).toHaveLength(1);
  expect(secondButton).toHaveLength(1);

  // click 3 times on trigger
  firstButton.prop("onClick")();
  secondButton.prop("onClick")();
  firstButton.prop("onClick")();

  // expect to have called mock 3 times
  expect(mockStateChange.mock.calls).toHaveLength(3);

  // expect mock params to be consistent
  expect(mockStateChange.mock.calls[0][0]).toBe(0);
  expect(mockStateChange.mock.calls[1][0]).toBe(1);
  expect(mockStateChange.mock.calls[2][0]).toBe(0);
});
