import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const ExperienceContainer = styled(Stack)`
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 40px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

export const ExperienceWrapper = styled(Stack)`
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 80px 0;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
