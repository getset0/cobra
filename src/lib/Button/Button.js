import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

const Button = styled.button`
  line-height: 40px;
  border-radius: 5px;
  height: 40px;
  width: auto;
  font-weight: 600;
  letter-spacing: 1px;
  text-decoration: none;
  white-space: nowrap;
  font-size: 1em;
  appearance: none;
  padding: 0em 2em;
  background: transparent;
  margin: 0 2px 15px;
  outline: 0;
  transition: all .1s ease-out;

  ${props => !props.disabled && css`
    &:hover {
      opacity: 0.9;
      cursor: pointer;
      transform: scale(1.02);
    }

    &:active {
        opacity: 1;
        transform: scale(1);
    }
  `}

  ${props => props.small && css`
    height: 30px;
    line-height: 30px;
    padding: 0em 1em;
    font-size: 0.85em;
  `}

  ${props => props.large && css`
    height: 48px;
    line-height: 48px;
    padding: 0em 2.5em;
    font-size: 1.15em;
  `}

  color: ${props => props.theme.primaryColor};
  border: 2px solid ${props => props.theme.primaryColor};

  ${props => props.uppercase && css`
    text-transform: uppercase;
  `}

  ${props => props.primary && css`
    background: ${props => props.theme.primaryColor};
    color: ${props => props.theme.whiteColor};
  `}

  ${props => props.secondary && css`
    border: 2px solid ${props => props.theme.secondaryColor};
    background: ${props => props.theme.secondaryColor};
    color: ${props => props.theme.whiteColor};
  `}

  ${props => props.disabled && css`
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
