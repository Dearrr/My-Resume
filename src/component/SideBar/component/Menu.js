import React from "react";
import styled from "styled-components";

const Menu = () => {
  const menuList = ["About Me", "Skills", "Skills", "Experience", "Education History"];
  return (
    <MenuListWrapper>
      {menuList.map((menu, index) => (
        <ListItem key={index}>
          <MenuActive />
          {menu}
        </ListItem>
      ))}
    </MenuListWrapper>
  );
};

export default Menu;

const MenuListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ListItem = styled.li`
  position: relative;
`;

const MenuActive = styled.div`
  position: absolute;
  background: #ff5959;
  display: block;
  height: 18px;
  left: -30px;
  top: 2px;
  width: 5px;
`;
