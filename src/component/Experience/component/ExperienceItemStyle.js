import { styled } from "@mui/material/styles";

export const ExperienceImage = styled("img")`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

export const Role = styled("div")`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.palette.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Company = styled("div")`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.palette.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Date = styled("div")`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.palette.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Description = styled("div")`
  width: 100%;
  font-size: 15px;
  font-weight: 400;
  color: ${(props) => props.theme.palette.text_primary + 99};
  margin-bottom: 10px;
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;
export const Span = styled("span")`
  /* overflow: hidden; */
  display: -webkit-box;
  max-width: 100%;
  /* -webkit-line-clamp: 4;
  -webkit-box-orient: vertical; */
  /* text-overflow: ellipsis;

  &:hover {
    overflow: visible;
    -webkit-line-clamp: unset;
  } */
`;

export const ExperienceSkillItem = styled("div")`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Card = styled("div")`
  width: 650px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 12px 16px;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    transform: translateY(-5px);
  }

  @media only screen and (max-width: 768px) {
    padding: 10px;
    gap: 8px;
    width: 300px;
  }

  border: 0.1px solid #306ee8;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`;
