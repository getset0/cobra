import styled, { css } from "styled-components";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import { theme } from "../constants";

// the width of the input border is controled by the padding attribute
const InputWrapperSpan = styled.span`
  position: relative;
  margin: 7px 4px;
  background: linear-gradient(
    21deg,
    ${props => props.theme.darkestBlueColor},
    ${props => props.theme.lightBlueColor}
  );
  padding: 3px;
  display: inline-block;
  border-radius: 9999em;

  ${props =>
    props.disabled &&
    css`
      background: ${props => props.theme.lightGrayColor};
    `}
`;

// margin should be a bit bigger then InputWrapperSpan padding
const InputInnerSpan = styled.span`
  transform: scale(0.993, 0.94);
  transition: transform 0.3s, opacity 0.2s;
  opacity: 0;

  position: absolute;
  z-index: 0;
  margin: 4px;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  border-radius: inherit;
  pointer-events: none;

  box-shadow: inset 0 0 0 3px #fff, 0 0 0 4px #fff,
    3px -3px 22px ${props => props.theme.darkestBlueColor},
    -3px 3px 22px ${props => props.theme.lightBlueColor};

  ${props =>
    props.disabled &&
    css`
      box-shadow: 0;
    `}
`;

// z-index should be above InputInnerSpan
const Input = styled.input`
  position: relative;
  display: inherit;
  border-radius: inherit;
  line-height: 1.5em;
  margin: 0;
  width: ${props => props.width}px;
  border: none;
  outline: none;
  font: 300 1em system-ui;
  padding: 0.3em 0.75em;
  z-index: 1;
  ${props =>
    props.type === "search" &&
    css`
      padding: 0.3em 0.75em 0.3em 1.7em;
    `}

  &:focus + span {
    opacity: 1;
    transform: scale(1);
  }
`;

const InputIconWrapper = styled.span`
  position: absolute;
  width: 14px;
  left: 9px;
  top: 9px;
  right: 0;
  bottom: 0;
  z-index: 2;
`;

const CustomInput = ({ disabled, ...props }) => (
  <InputWrapperSpan theme={theme} disabled={disabled}>
    {props.type === "search" && (
      <InputIconWrapper>
        <FontAwesomeIcon icon={faSearch} />
      </InputIconWrapper>
    )}
    <Input disabled={disabled} {...props} />
    <InputInnerSpan theme={theme} disabled={disabled} />
  </InputWrapperSpan>
);

CustomInput.propTypes = {
  disabled: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  type: PropTypes.string,
  theme: PropTypes.object
};

CustomInput.defaultProps = {
  disabled: false,
  theme: theme,
  width: 200
};

export default CustomInput;
