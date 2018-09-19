import styled, { css } from "styled-components";

const Paragraph = styled.p`
  color: ${props => props.color};
  ${props => props.center && css`
    text-align: center;
  `}
  ${props => props.justify && css`
    text-align: justify;
  `}
  ${props => props.magnify && css`
    font-size: 1.1em;
    line-height: 1.18em;
  `}
`;

export default Paragraph;
