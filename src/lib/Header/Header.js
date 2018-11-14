import styled from "styled-components";
import React from "react";
import PropTypes from "prop-types";
import { theme } from "../constants";

const HeaderItemWrapper = styled.a`
  text-decoration: none;
  line-height: 40px;
  color: ${props => props.theme.primaryColor};
`;

const CustomHeader = ({ logo, headerCustomRight, user, theme, ...props }) => (
  <header {...props}>
    <div>
      <HeaderItemWrapper href="/" theme={theme}>
        {logo}
      </HeaderItemWrapper>
    </div>
    {headerCustomRight ? (
      <div>{headerCustomRight}</div>
    ) : user ? (
      <HeaderItemWrapper>{user}</HeaderItemWrapper>
    ) : null}
  </header>
);

const Header = styled(CustomHeader)`
  background-color: ${props => props.backgroundColor || props.theme.whiteColor};
  border-bottom: 1px solid ${props => props.theme.lightGrayColor};
  position: relative;
  padding: 10px 15px;
  display: flex;
  height: 40px;
  z-index: 98;
  justify-content: space-between;
`;

Header.propTypes = {
  backgroundColor: PropTypes.string,
  user: PropTypes.string,
  logo: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ]),
  headerCustomRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
    PropTypes.element
  ]),
  theme: PropTypes.object
};

Header.defaultProps = {
  logo: "Brand",
  theme: theme
};

export default Header;
