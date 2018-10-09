import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

export const DropdownTrigger = styled.div`
  cursor: pointer;
  padding: 10px;
`;

export const DropdownButton = styled.div`
  display: flex;
  justify-content: flex-end;
  ${props => props.isOpen && css`
    color: ${props => props.theme.primaryColor}
  `}
`;

DropdownButton.propTypes = {
  isOpen: PropTypes.bool,
  theme: PropTypes.object
};

DropdownButton.defaultProps = {
  theme: theme
};

export const DropdownBody = styled.div`
  transition: all .3s ease-out;
  overflow: hidden;
  width: 100%;
  height: 100%;
  z-index: 99;
  background: ${props => props.theme.whiteColor};
  ${props => props.isOpen ? css`
    max-height: 200px;
  ` : css`
    max-height: 0;
  `}
`;

DropdownBody.propTypes = {
  isOpen: PropTypes.bool,
  theme: PropTypes.object,
  children: PropTypes.any.isRequired
};

DropdownBody.defaultProps = {
  theme: theme
};
