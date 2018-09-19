import styled, { css } from "styled-components";

const H2 = styled.h2`
  color: ${props => props.color || props.theme.darkestGrayColor};
  ${props => props.center && css`
    text-align: center;
  `}
`;

export default H2;
