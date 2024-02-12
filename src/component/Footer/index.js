import React from "react";
import {
  Copyright,
  FooterContainer,
  FooterWrapper,
  Logo,
  Nav,
  NavLink,
} from "./FooterStyle";
import { NavList } from "../../DataSource/data";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <Logo>Worapon Boonchoo</Logo>
        <Nav>
          {NavList.map((item, index) => (
            <NavLink to={item.href} spy={true} smooth={true} offset={-10} duration={500} key={index}>
              {item.title}
            </NavLink>
          ))}
        </Nav>
        <Copyright>&copy; 2024 All rights reserved.</Copyright>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
