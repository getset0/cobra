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
    padding: 2px 14px 4px;
    font-size: 18px;
    ${props =>
    props.error ? css`
            border: 1px solid lightcoral;
    ` : props.valid ? css`
            border: 1px solid ${theme.greenColor}
    ` : ""}
`;
const LabelSpan = styled.span`
    padding: 4px 0;
    font-size: 14px;
    font-weight: bold;
    color: ${theme.mediumGrayColor}
`;

const Errorspan = styled.span`
    padding: 2px 0;
    color: lightcoral;
    font-size: 12px;
`;

const CustomInput = ({
  label,
  valid,
  error,
  width,
  ...props
}) => (
  <InputWrapperSpan width={width}>
    {label && <LabelSpan>{label}</LabelSpan>}
    <Input valid={valid} error={error} {...props} />
    {error && <Errorspan>{error}</Errorspan>}
  </InputWrapperSpan>
);

CustomInput.propTypes = {
  label: PropTypes.oneOf([ PropTypes.string, PropTypes.element ]),
  error: PropTypes.oneOf([ PropTypes.string, PropTypes.element ]),
  valid: PropTypes.bool,
  width: PropTypes.number
};

CustomInput.defaultProps = {
  width: 240
};

export default CustomInput;
