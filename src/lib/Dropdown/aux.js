import styled, { css } from "styled-components";

export const DropdownTrigger = styled.div`
  cursor: pointer;
  padding: 10px;
`;

export const DropdownButton = styled.div`
  display: flex;
  justify-content: flex-end;
  ${props => props.isOpen && css`
    color: ${props => props.theme.primaryColor}
  `}
`;

export const DropdownBody = styled.div`
  position: relative;
  transition: all .3s ease-out;
  overflow: hidden;
  width: 100%;
  height: 100%;
  ${props => props.isOpen ? css`
    max-height: 200px;
  ` : css`
    max-height: 0;
  `}
`;
