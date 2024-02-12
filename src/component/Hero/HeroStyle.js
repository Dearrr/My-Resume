import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const HeroContainer = styled(Stack)`
  background: ${(props) => props.theme.palette.card_light};
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640) {
    padding: 32px 16px;
  }
  z-index: 1;

  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%);
`;
