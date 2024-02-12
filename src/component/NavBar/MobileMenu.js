import React from "react";
import { MobileLink, MobileMenuContainer } from "./MobileMenuStyle";
import { Stack, useTheme } from "@mui/material";
import { GithubButton } from "./NavBarStyle";

const MobileMenu = ({ isOpen, navList, setIsOpen }) => {
  const theme = useTheme();
  return (
    <MobileMenuContainer isOpen={isOpen}>
      <Stack gap="16px" padding={"12px 40px 24px 40px"}>
        {navList.map((item, index) => (
          <MobileLink
            key={index}
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
            to={item.href}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {item.title}
          </MobileLink>
        ))}
        <GithubButton
          style={{ padding: "10px 16px", background: `${theme.primary}`, color: "white", width: "max-content" }}
          href="https://github.com/Dearrr"
          target="_blank"
        >
          Github Profile
        </GithubButton>
      </Stack>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
