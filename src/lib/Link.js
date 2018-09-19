import styled from "styled-components";

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.primaryColor};
  font-weight: 400;
  transition: opacity .2s ease-out;

  &:visited {
    color: ${props => props.theme.primaryColor};
  }

  &:focus,
    &:hover {
        opacity: 0.75;
    }

  &:active {
      opacity: 1;
  }
`;

export default Link;
