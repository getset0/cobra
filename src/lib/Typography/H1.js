import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

const H1 = styled.h1`
  color: ${props => props.color || props.theme.darkestGrayColor};
  ${props => props.center && css`
    text-align: center;
  `}
`;

H1.propTypes = {
  color: PropTypes.string,
  theme: PropTypes.object,
  center: PropTypes.bool
};

H1.defaultProps = {
  theme: theme,
  center: false
};

export default H1;
