import styled from "styled-components";
import React from "react";

const HeaderItemWrapper = styled.a`
  text-decoration: none;
  line-height: 40px;
  color: ${props => props.theme.primaryColor};
`;

const CustomHeader = ({ Logo, RightComponent, user, ...props }) => (
  <header {...props}>
    <div>
      <HeaderItemWrapper href="/">
        {Logo || "Brand"}
      </HeaderItemWrapper>
    </div>
    {
      RightComponent ?
        <div>
          {RightComponent}
        </div> :
        <HeaderItemWrapper>
          {user || "John Doe"}
        </HeaderItemWrapper>
    }
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

export default Header;
