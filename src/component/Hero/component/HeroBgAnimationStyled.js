import { styled } from "@mui/material/styles";

export const HeroBg = styled("div")`
  position: absolute;
  display: flex;
  justify-content: end;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-width: 1360px;
  overflow: hidden;
  /*  padding: 0 30px; */
  left: 48%;
  top: 53%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);

  @media (max-width: 1024px) {
    left: 30%;
    top: 48%;
  }

  @media (max-width: 960px) {
    justify-content: center;
    padding: 0 0px;
    left: 50%;
    top: 50%;
  }

  
`;
