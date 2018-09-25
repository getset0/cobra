import React from "react";
import styled, { css } from "styled-components";

const DropdownWrapper = styled.div`
  width: ${props => props.maxWidth || "130px"};
  max-width: 180px;
  border-radius: 3px;
  transition: all .3s ease-out;
  z-index: 99;
  ${props => props.withBorder && (
    props.isOpen ? css`
      border: 1px solid #D8D8D8;
      box-shadow: 1px 2px 3px #D8D8D8;
      background: ${props.theme.whiteColor};
    ` : css`
      border: 1px solid transparent;
      background: transparent;
      box-shadow: 1px 2px 3px transparent;
  `)}
`;

class Dropdown extends React.Component {
  state = { isOpen: false };
  getState(state = this.state) {
    return {
      isOpen:
        this.props.isOpen || state.isOpen
    };
  }
  handleTriggerClick = index => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }),  () =>
      this.props.onStateChange && this.props.onStateChange(index)
    );
  }
  render() {
    return (
      <DropdownWrapper
        isOpen={this.getState().isOpen}
        withBorder={this.props.withBorder}
        maxWidth={this.props.maxWidth}
      >
        {
          this.props.children({
            isOpen: this.getState().isOpen,
            handleTriggerClick: this.handleTriggerClick
          })
        }
      </DropdownWrapper>
    );
  }
}

export default Dropdown;


