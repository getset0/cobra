import styled, { css } from "styled-components";
import { theme } from "../constants";
import React from "react";
import PropTypes from "prop-types";

const InputWrapperSpan = styled.span`
  display: flex;
  flex-direction: column;
  width: ${props => props.width}px;
`;
const Input = styled.input`
  padding: 5px 10px;
  font-size: 16px;
  ${props =>
    props.error
      ? css`
          border: 1px solid lightcoral;
        `
      : props.valid
        ? css`
          border: 1px solid ${theme.greenColor};
        `
        : ""}
`;
const Textarea = styled.textarea`
  padding: 5px 10px;
  font-size: 16px;
  resize: vertical;
  ${props =>
    props.error
      ? css`
          border: 1px solid lightcoral;
        `
      : props.valid
        ? css`
          border: 1px solid ${theme.greenColor};
        `
        : ""}
`;
const LabelSpan = styled.span`
  padding: 4px 0;
  font-size: 14px;
  font-weight: bold;
  color: ${theme.mediumGrayColor};
`;

const ErrorSpan = styled.span`
  padding: 2px 0;
  color: lightcoral;
  font-size: 12px;
`;

const CustomInput = ({ label, valid, error, width, isTextarea, ...props }) => (
  <InputWrapperSpan width={width}>
    {label && <LabelSpan>{label}</LabelSpan>}
    {isTextarea ? (
      <Textarea valid={valid} error={error} {...props} />
    ) : (
      <Input valid={valid} error={error} {...props} />
    )}
    {error && <ErrorSpan>{error}</ErrorSpan>}
  </InputWrapperSpan>
);

CustomInput.propTypes = {
  label: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
  error: PropTypes.oneOfType([ PropTypes.string, PropTypes.element ]),
  valid: PropTypes.bool,
  isTextarea: PropTypes.bool,
  width: PropTypes.number
};

CustomInput.defaultProps = {
  width: 240,
  isTextarea: false
};

export default CustomInput;
