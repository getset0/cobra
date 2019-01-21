import React from "react";
import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withBackgrounds } from "@storybook/addon-backgrounds";
import { backgroundOptions } from "./util";
import { Modal, Button } from "../lib";

class TestModal extends React.Component {
    state = {
      isModalOpen: false
    };
    handleOpenModal = () => this.setState({ isModalOpen: true });
    handleCloseModal = () => this.setState({ isModalOpen: false });
    render() {
      return (
        <React.Fragment>
          <Button onClick={this.handleOpenModal}>Open Modal</Button>
          <Modal
            isOpen={this.state.isModalOpen}
            handleCloseModal={this.handleCloseModal}
            title="I am a modal title"
          >
            I am a modal content!
          </Modal>
        </React.Fragment>
      );
    }
}

storiesOf("Modal", module)
  .addDecorator(withInfo)
  .addDecorator(withBackgrounds(backgroundOptions))
  .add("Modal", () => <TestModal />);
