import styled, { css } from "styled-components";

const H1 = styled.h1`
  color: ${props => props.color || props.theme.darkestGrayColor};
  ${props => props.center && css`
    text-align: center;
  `}
`;

export default H1;
