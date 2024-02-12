import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SkillSectionContainer = styled(Stack)`
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 80px 30px;
  @media (max-width: 960px) {
    padding: 66px 16px;
  }
  @media (max-width: 640px) {
    padding: 32px 16px;
  }
`;

export const SkillSectionWrapper = styled(Stack)`
  position: relative;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
`;
