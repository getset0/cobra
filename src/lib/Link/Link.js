import styled from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.primaryColor};
  font-weight: 400;
  transition: opacity .2s ease-out;
  cursor: pointer;

  &:visited {
    color: ${props => props.theme.primaryColor};
  }

  &:focus,
    &:hover {
        opacity: 0.75;
    }

  &:active {
      opacity: 1;
  }
`;

Link.propTypes = {
  children: PropTypes.any.isRequired,
  theme: PropTypes.object
};

Link.defaultProps = {
  theme: theme
};

export default Link;
