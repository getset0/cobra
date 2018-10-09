import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

const H2 = styled.h2`
  color: ${props => props.color || props.theme.darkestGrayColor};
  ${props => props.center && css`
    text-align: center;
  `}
`;

H2.propTypes = {
  color: PropTypes.string,
  theme: PropTypes.object,
  center: PropTypes.bool
};

H2.defaultProps = {
  theme: theme,
  center: false
};

export default H2;
