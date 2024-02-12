import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Link } from "react-scroll";

export const Nav = styled(Stack)`
  background-color: ${(props) => props.theme.palette.card_light};
  justify-content: center;
  align-items: center;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 10;
  padding: 0 24px;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const NavContainer = styled(Stack)`
  width: 100%;
  height: 60px;
  max-width: 1100px;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

export const NavMenu = styled(Stack)`
  flex-direction: row;
  gap: 32px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: ${(props) => props.theme.palette.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;

  &:hover {
    color: ${(props) => props.theme.palette.primaryColor};
  }

  &:active {
    color: ${(props) => props.theme.palette.primaryColor};
  }
`;

export const ButtonContainer = styled("div")`
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const GithubButton = styled("a")`
  background-color: transparent;
  color: ${(props) => props.theme.palette.primaryColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1.8px solid ${(props) => props.theme.palette.primaryColor};
  border-radius: 20px;
  padding: 0 20px;
  font-size: 1rem;
  font-weight: 500;
  height: 60%;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.primaryColor};
    color: ${(props) => props.theme.palette.white};
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const MobileIcon = styled("div")`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${(props) => props.theme.palette.text_primary};
  }
`;
