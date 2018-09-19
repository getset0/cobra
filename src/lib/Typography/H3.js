import styled, { css } from "styled-components";

const H3 = styled.h3`
  color: ${props => props.color || props.theme.darkestGrayColor};
  ${props => props.center && css`
    text-align: center;
  `}
`;

export default H3;
