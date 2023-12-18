import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { ReactComponent as LinkinIcon } from "../../../Asset/linkedinIcon.svg";
import { ReactComponent as GithubIcon } from "../../../Asset/githubIcon.svg";
const SocialList = () => {
  return (
    <Stack flexDirection={"row"} gap={1.5}>
      <SocialIcon href="https://www.linkedin.com/in/worapon-boonchoo-a5875b293/" target="_blank">
        <LinkinIcon style={{ fill: "#ffff", width: "50%", height: "50%", marginBottom: "2px" }} />
      </SocialIcon>
      <SocialIcon href="https://github.com/Dearrr" target="_blank">
        <GithubIcon style={{ fill: "#ffff", width: "70%", height: "70%" }} />
      </SocialIcon>
    </Stack>
  );
};

export default SocialList;

const SocialIcon = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffff;
  background-color: #ff5959;
  border-radius: 50%;
  width: 30px;
  height: 30px;
`;
