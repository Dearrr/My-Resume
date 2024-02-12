import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ButtonContainer, GithubButton, MobileIcon, Nav, NavContainer, NavLink, NavMenu } from "./NavBarStyle";
import MobileMenu from "./MobileMenu";
import { animateScroll } from "react-scroll";
import { NavList } from "../../DataSource/data";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };
  return (
    <Nav>
      <NavContainer>
        <NavLink to="" color="text_primary" onClick={scrollToTop}>
          Portfolio
        </NavLink>
        <NavMenu>
          {NavList.map((list, index) => (
            <NavLink to={list.href} spy={true} smooth={true} offset={-10} duration={500} key={index}>
              {list.title}
            </NavLink>
          ))}
        </NavMenu>
        <ButtonContainer>
          <GithubButton href="https://github.com/Dearrr" target="_blank">
            Github Profile
          </GithubButton>
        </ButtonContainer>
        <MobileIcon>
          <FaBars
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        </MobileIcon>
        {isOpen && <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} navList={NavList}></MobileMenu>}
      </NavContainer>
    </Nav>
  );
};

export default NavBar;
