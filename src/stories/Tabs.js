import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions } from "./util";
import { Tabs, TabButtons, TabButton, TabItem, TabItems } from "../lib";

storiesOf("Tabs", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Tabs", () => (
    <Tabs>
      {({ selectedItem, handleItemClick }) => (
        <React.Fragment>
          <TabButtons>
            {testTabItems.map((item, index) => (
              <TabButton
                width={100 / testTabItems.length}
                key={item.title}
                isSelected={selectedItem === index}
                onClick={() => handleItemClick(index)}
              >
                {item.title}
              </TabButton>
            ))}
          </TabButtons>
          <TabItems>
            {testTabItems.map((item, index) => (
              <TabItem key={index} isSelected={selectedItem === index}>
                {item.contents}
              </TabItem>
            ))}
          </TabItems>
        </React.Fragment>
      )}
    </Tabs>
  ));

const testTabItems = [
  {
    title: "Tab1 ",
    contents: (
      <div style={{ backgroundColor: "red" }}>
        <h1>Tab 1</h1>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
        <p>BC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC ABC</p>
      </div>
    )
  },
  {
    title: "Tab 2",
    contents: (
      <div style={{ backgroundColor: "blue" }}>
            DEF ABC DEF DEF DEF DEF DEF DEF DEF DEFDEFDEFDEFDEFDEFDEFDEFDEF
      </div>
    )
  },
  {
    title: "Tab 3",
    contents: (
      <div style={{ backgroundColor: "yellow" }}>
            GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI
            GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI GHIGHIGHIGHIGHIGHIGHIGHIGHIGHI
      </div>
    )
  }
];

