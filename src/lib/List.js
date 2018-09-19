import styled, { css } from "styled-components";

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0px;

  > li {
    display: flex;
    justify-content: flex-start;
    ${props => props.center && css`
      justify-content: center;
    `}
    ${props => props.spaceAround && css`
      justify-content: space-around;
    `}
    ${props => props.spaceBetween && css`
      justify-content: space-between;
    `}
    ${props => props.end && css`
      justify-content: flex-end;
    `}
  }
`;

export default List;
