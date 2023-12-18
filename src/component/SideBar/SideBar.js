import React from "react";
import Card from "../Util/Card/Card";
import "./SideBar.css";
import { Stack } from "@mui/material";
import styled from "styled-components";
import Profile from "../../Asset/profile.jpg";
import Text from "../Util/Text/Text";
import SocialList from "./component/SocialList";
import PersonalProfile from "./component/PersonalProfile";
import Language from "./component/Language";

const SideBar = () => {
  return (
    <Card backgroundcolor="#4a63e7" color="#ffff">
      <Stack flexDirection={"column"} alignItems={{ xs: "center", sm: "start" }} gap={5}>
        <Stack flexDirection={"column"} alignItems={{ xs: "center", sm: "start" }}>
          <Image src={Profile} style={{ marginBottom: "10px" }} />
          <Text color="#ffff" fontSize={"20px"} fontWeight={"600"}>
            Worapon BoonChoo
          </Text>
          <Text color="#ffff" fontSize={"12px"}>
            WEB DEVELOPER
          </Text>
        </Stack>
        <PersonalProfile />
        <Language />
        {/* <Menu /> */}
        <SocialList />
      </Stack>
    </Card>
  );
};

export default SideBar;

/* const FixedSideBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`; */

const Image = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 50%;
`;
