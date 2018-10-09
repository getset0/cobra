import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;

Image.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  src: PropTypes.string.isRequired
};

export default Image;
