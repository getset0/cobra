import styled, { css } from "styled-components";
import PropTypes from "prop-types";

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

Paragraph.propTypes = {
  color: PropTypes.string,
  center: PropTypes.bool,
  justify: PropTypes.bool,
  magnify: PropTypes.bool
};

Paragraph.defaultProps = {
  center: false,
  justify: false,
  magnify: false
};



export default Paragraph;
