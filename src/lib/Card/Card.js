import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

const CardTitle = styled.h3`
  color: ${props => props.theme.primaryColor};
  padding-bottom: 3px;
`;

const CustomCard = ({ title, children, theme, ...props }) => (
  <div {...props}>
    {title && typeof title === "string" ? (
      <CardTitle theme={theme}>{title}</CardTitle>
    ) : (
      title
    )}
    {children}
  </div>
);

const Card = styled(CustomCard)`
    margin: 15px;
    padding: 25px;
    background: ${props =>
    props.backgroundColor || props.theme.whiteBackgroundColor};
    color: ${props => props.textColor || props.theme.darkGrayColor}
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 1px 2px 10px 1px ${props => props.theme.lightGrayColor};
    width: ${props => props.width}px;
    height: ${props => props.height}px;
`;

Card.propTypes = {
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  theme: PropTypes.object,
  children: PropTypes.any.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node
  ])
};

Card.defaultProps = {
  theme: theme
};

export default Card;
