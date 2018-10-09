import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import { theme } from "../constants";

const ListItem = styled.li`
  padding: 12px 10px 12px 10px;
  ${props => props.onClick && css`
    cursor: pointer;
  `}
  border-top: 1px solid ${props => props.theme.lightGrayColor};
  &:first-child {
    border-top: 0;
  }
`;

ListItem.propTypes = {
  onClick: PropTypes.func,
  theme: PropTypes.object
};

ListItem.defaultProps = {
  theme: theme
};

export default ListItem;
