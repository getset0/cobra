import styled, { css } from "styled-components";

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

export default ListItem;
