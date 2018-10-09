import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

const DropdownWrapper = styled.div`
  width: ${props => `${props.width}px`};
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
  constructor(props) {
    super(props);
    this.state = {
      isOpen: this.props.isOpen || false
    };
  }
  handleTriggerClick = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }),  () =>
      this.props.onStateChange && this.props.onStateChange(this.state.isOpen)
    );
  }
  render() {
    return (
      <DropdownWrapper
        isOpen={this.state.isOpen}
        withBorder={this.props.withBorder}
        width={this.props.width}
      >
        {
          this.props.children({
            isOpen: this.state.isOpen,
            handleTriggerClick: this.handleTriggerClick
          })
        }
      </DropdownWrapper>
    );
  }
}

Dropdown.propTypes = {
  withBorder: PropTypes.bool,
  isOpen: PropTypes.bool,
  width: PropTypes.number,
  theme: PropTypes.object,
  onStateChange: PropTypes.func,
  children: PropTypes.any.isRequired
};

Dropdown.defaultProps = {
  withBorder: true,
  isOpen: false,
  width: 130,
  theme: theme
};

export default Dropdown;


