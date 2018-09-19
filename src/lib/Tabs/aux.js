import styled, { css } from "styled-components";

export const TabButtons = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-around;
  text-transform: uppercase;
`;

export const TabButton = styled.div`
  cursor: pointer;
  padding: 10px 3px 6px 3px;
  text-align: center;
  border-bottom: 2px solid transparent
  transition: all .3s ease-out;
  color: ${props => props.theme.lightBlueColor};
  width: ${props => props.width}%
  &:hover {
    opacity: 0.75;
    color: ${props => props.theme.primaryColor}
  }

  &:active {
    opacity: 1;
    color: ${props => props.theme.primaryColor}
  }

  ${props => props.isSelected && css`
    opacity: 1;
    border-bottom: 2px solid ${props => props.theme.primaryColor}
    color: ${props => props.theme.primaryColor}
  `}
`;

export const TabItems = styled.div`
  position: relative;
  min-height: 160px;
`;

export const TabItem = styled.div`
  position: absolute;
  transition: all .3s ease-out;
  height: 100%;
  width: 100%;
  ${props => props.isSelected ? css`
    opacity: 1;
  ` : css`
    opacity: 0;
  `}
`;
