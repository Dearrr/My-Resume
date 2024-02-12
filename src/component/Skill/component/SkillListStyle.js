import { Box, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

export const SkillsContainer = styled(Stack)`
  flex-direction: row;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

export const Skill = styled(Box)`
  width: 100%;
  max-width: 500px;
  background: ${(props) => props.theme.palette.card};
  border: 0.1px solid #854ce6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 0px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 0px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
  }
`;

export const SkillTitle = styled("h2")`
  font-size: 28px;
  font-weight: 600;
  color: ${(props) => props.theme.palette.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

export const SkillListContainer = styled(Stack)`
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

export const SkillItem = styled(Box)`
  font-size: 16px;
  font-weight: 400;
  color: ${(props) => props.theme.palette.text_primary + 80};
  border: 1px solid ${(props) => props.theme.palette.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

export const SkillImage = styled("img")`
  width: 24px;
  height: 24px;
`;
