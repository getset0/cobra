import React from "react";
import Modal, { ModalWrapper, CustomModalContent } from "./Modal";
import "jest-styled-components";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

it("renders without crash", () => {
  shallow(
    <Modal
      isOpen={true}
      handleCloseModal={jest.fn(x => x)}
      title="I am a modal title"
    >
    I am a modal content!
    </Modal>
  );
});

it("renders Tabs correctly", () => {
  const wrapper = shallow(
    <Modal
      isOpen={true}
      handleCloseModal={jest.fn(x => x)}
      title="I am a modal title"
    >
    I am a modal content!
    </Modal>
  );
  const tree = toJson(wrapper);
  expect(tree).toMatchSnapshot();
});

it("test Modal close", () => {
  const mockState = {
    isOpen: true
  };
  const mockStateChange = jest.fn(() => {
    mockState.isOpen = false;
  });
  const wrapper = shallow(
    <Modal
      isOpen={mockState.isOpen}
      handleCloseModal={mockStateChange}
      title="I am a modal title"
    >
    I am a modal content!
    </Modal>
  );

  // has ModalWrapper Component
  const overlay = wrapper.find(ModalWrapper);
  expect(overlay).toHaveLength(1);

  // has ModalContent Component
  const content = wrapper.find(CustomModalContent);
  expect(content).toHaveLength(1);

  // click on overlay
  overlay.prop("onClick")();

  // expect to have called mock 1 time
  expect(mockStateChange.mock.calls).toHaveLength(1);

  // ModalWrapper Component undefined
  const overlay2 = wrapper.find(ModalWrapper);
  expect(overlay2).toBeUndefined;

  // ModalContent Component undefined
  const content2 = wrapper.find(CustomModalContent);
  expect(content2).toBeUndefined;
});
