import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

export const TabButtons = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-around;
  text-transform: uppercase;
`;

TabButtons.propTypes = {
  children: PropTypes.array.isRequired
};

export const TabButton = styled.div`
  cursor: pointer;
  padding: 10px 3px 6px 3px;
  text-align: center;
  border-bottom: 2px solid transparent
  transition: all .3s ease-out;
  color: ${props => props.theme.lightBlueColor};
  width: ${props => props.width}%
  &:hover {
    opacity: 0.75;
    color: ${props => props.theme.primaryColor}
  }

  &:active {
    opacity: 1;
    color: ${props => props.theme.primaryColor}
  }

  ${props =>
    props.isSelected &&
    css`
    opacity: 1;
    border-bottom: 2px solid ${props => props.theme.primaryColor}
    color: ${props => props.theme.primaryColor}
  `}
`;

TabButton.propTypes = {
  theme: PropTypes.object,
  width: PropTypes.number.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

TabButton.defaultProps = {
  theme: theme
};

export const TabItems = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

TabButtons.propTypes = {
  children: PropTypes.array.isRequired
};

export const TabItem = styled.div`
  position: absolute;
  transition: transform 350ms ease;
  width: 100%;
  ${props =>
    props.isSelected
      ? css`
          transform: translateX(0px);
        `
      : css`
          transform: translateX(-3000px);
        `}
`;

TabButton.propTypes = {
  isSelected: PropTypes.bool.isRequired
};
