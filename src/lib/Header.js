import styled from "styled-components";
import React from "react";

const LogoWrapper = styled.a`
  color: inherit;
  text-decoration: none;
`;

const CustomHeader = ({ Logo, user, ...props }) => (
  <header {...props}>
    <div>
      <LogoWrapper href="/">
        {Logo || "Brand"}
      </LogoWrapper>
    </div>
    <div>
      {user || "John Doe"}
    </div>
  </header>
);

const Header = styled(CustomHeader)`
  background-color: ${props => props.theme.whiteColor};
  border-bottom: 1px solid ${props => props.theme.lightGrayColor};
  color: ${props => props.theme.primaryColor};
  position: relative;
  padding: 10px 15px;
  display: flex;
  height: 40px;
  align-items: center;
  justify-content: space-between
`;

export default Header;
