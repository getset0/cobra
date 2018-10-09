import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

const H3 = styled.h3`
  color: ${props => props.color || props.theme.darkestGrayColor};
  ${props => props.center && css`
    text-align: center;
  `}
`;

H3.propTypes = {
  color: PropTypes.string,
  theme: PropTypes.object,
  center: PropTypes.bool
};

H3.defaultProps = {
  theme: theme,
  center: false
};

export default H3;
