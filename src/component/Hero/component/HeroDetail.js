import React from "react";
import {
  HeroDetailContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Img,
  ResumeButton,
  RoleText,
  Span,
  SubTitle,
  Title,
} from "./HeroDetailStyle";
import { bio } from "../../../DataSource/data";
import Typewriter from "typewriter-effect";
import profile from "../../../Asset/profile.jpg";
const HeroDetail = () => {
  return (
    <HeroDetailContainer>
      <HeroLeftContainer>
        <Title>
          Hi, I am <br /> {bio.name}
        </Title>
        <RoleText>
          {" "}
          I am a{" "}
          <Span>
            <Typewriter
              options={{
                strings: bio.roles,
                autoStart: true,
                loop: true,
              }}
            />
          </Span>
        </RoleText>
        <SubTitle>{bio.description}</SubTitle>
        <ResumeButton href={bio.resume} target="display">
          Check Resume
        </ResumeButton>
      </HeroLeftContainer>
      <HeroRightContainer>
        <Img src={profile} />
      </HeroRightContainer>
    </HeroDetailContainer>
  );
};

export default HeroDetail;
