import styled from "styled-components";

const Card = styled.div`
    margin: 15px;
    padding: 25px;
    background: ${props => props.backgroundColor || props.theme.whiteBackgroundColor};
    color: ${props => props.textColor || props.theme.darkGrayColor}
    overflow: hidden;
    border-radius: 5px;
    box-shadow: 0 4px 12px ${props => props.theme.lightGrayColor};
    width: ${props => props.width}
    height: ${props => props.height}
`;

export default Card;
