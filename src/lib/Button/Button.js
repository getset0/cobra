import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

const Button = styled.button`
  border-radius: 5px;
  font-weight: 400;
  letter-spacing: 1px;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1rem;
  appearance: none;
  padding: 1em 2em;
  background: transparent;
  margin: 0 2px 15px;
  outline: 0;
  transition: transform 100ms ease-out, box-shadow 100ms ease-out;

  ${props =>
    !props.disabled &&
    css`
      &:hover {
        opacity: 0.9;
        cursor: pointer;
        transform: scale(1.02);
        box-shadow: 1px 2px 7px ${props => props.theme.mediumGrayColor};
      }

      &:active {
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 0 0;
      }
    `}

  ${props =>
    props.small &&
    css`
      font-size: 0.8rem;
    `}

  ${props =>
    props.large &&
    css`
      font-size: 1.2rem;
    `}

  color: ${props => props.theme.primaryColor};
  border: 1px solid ${props => props.theme.primaryColor};

  ${props =>
    props.uppercase &&
    css`
      text-transform: uppercase;
    `}

  ${props =>
    props.primary &&
    css`
      background: ${props => props.theme.primaryColor};
      color: ${props => props.theme.whiteColor};
    `}

  ${props =>
    props.secondary &&
    css`
      border: 2px solid ${props => props.theme.secondaryColor};
      background: ${props => props.theme.secondaryColor};
      color: ${props => props.theme.whiteColor};
    `}

  ${props =>
    props.disabled &&
    css`
      opacity: 0.5;
      &:hover {
        cursor: not-allowed;
      }
    `}
`;

Button.propTypes = {
  disabled: PropTypes.bool,
  secondary: PropTypes.bool,
  primary: PropTypes.bool,
  uppercase: PropTypes.bool,
  large: PropTypes.bool,
  small: PropTypes.bool,
  children: PropTypes.any.isRequired,
  theme: PropTypes.object
};

Button.defaultProps = {
  disabled: false,
  secondary: false,
  primary: false,
  uppercase: false,
  large: false,
  small: false,
  theme: theme
};

export default Button;
