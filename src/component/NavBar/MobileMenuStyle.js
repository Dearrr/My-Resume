import { styled } from "@mui/material/styles";
import { Link } from "react-scroll";


export const MobileMenuContainer = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  background: ${(props) => props.theme.palette.card_light + 99};
  transition: all 0.6s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-100%)")};
  border-radius: 0 0 20px 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  z-index: ${({ isOpen }) => (isOpen ? "1000" : "-1000")};
`;

export const MobileMenuItems = styled("ul")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  list-style: none;
  width: 100%;
  height: 100%;
`;

export const MobileMenuLink = styled(Link)`
  color: ${(props) => props.theme.palette.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${(props) => props.theme.palette.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ props }) => props.theme.palette.primary};
  }
`;

export const MobileMenuButton = styled("a")`
  border: 1.8px solid ${({ props }) => props.theme.palette.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${(props) => props.theme.palette.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;

  :hover {
    background: ${(props) => props.theme.palette.primary};
    color: ${(props) => props.theme.palette.white};
  }
`;

export const MobileLink = styled(Link)`
  color: ${(props) => props.theme.palette.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${(props) => props.theme.palette.primary};
  }

  &.active {
    border-bottom: 2px solid ${(props) => props.theme.palette.primary};
  }
`;

export const MobileNavLogo = styled(Link)`
  width: 80%;
  padding: 0 6px;
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  @media (max-width: 640px) {
    padding: 0 0px;
  }
`;
