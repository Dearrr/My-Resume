import React from "react";
import Card from "../Util/Card/Card";
import { Stack } from "@mui/material";
import Title from "../Util/Title/Title";
import About from "./component/About/About";
import Experience from "./component/Experience/Experience";
import Skill from "./component/Skills/Skill";
import EducationHistory from "./component/EducationHistory/EducationHistory";

const Profile = () => {
  return (
    <Stack width={{xs:'100%',md:'875px'}} style={{ gap: "30px" }}>
      <About />
      <Experience />
      <Skill />
      <EducationHistory />
    </Stack>
  );
};

export default Profile;
