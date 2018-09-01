import styled from "styled-components";

const Button = styled.button`
  background-color: palevioletred
  padding: ${props => props.small ? "0.25em 1em" : "0.5em 2em"};
`;

export default Button;
