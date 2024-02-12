import { styled } from "@mui/material/styles";

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
  -webkit-box-orient: vertical;
  text-overflow: ellipsis; */
`;

export const Image = styled("img")`
  height: 50px;
  background-color: #000;
  border-radius: 10px;
  margin-top: 4px;
  @media only screen and (max-width: 768px) {
    height: 40px;
  }
`;

export const Body = styled("div")`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const Name = styled("div")`
  font-size: 18px;
  font-weight: 600;
  color: ${(props) => props.theme.palette.text_primary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Degree = styled("div")`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.palette.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

export const EducationDate = styled("div")`
  font-size: 12px;
  font-weight: 400;
  color: ${(props) => props.theme.palette.text_secondary + 80};
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

export const Grade = styled("div")`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => props.theme.palette.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;


