import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const TitleAndDescription = ({ title, description }) => {
  return (
    <Box>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Box>
  );
};

export default TitleAndDescription;

export const Title = styled(Box)`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${(props) => props.theme.palette.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Description = styled(Box)`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${(props) => props.theme.palette.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
