import React from "react";
import { HeroContainer } from "./HeroStyle";
import { Box } from "@mui/material";
import HeroBgAnimation from "./component/HeroBgAnimation";
import HeroDetail from "./component/HeroDetail";

const Hero = () => {
  return (
    <Box id="about">
      <HeroContainer>
        <HeroBgAnimation />
        <HeroDetail />
      </HeroContainer>
    </Box>
  );
};

export default Hero;
