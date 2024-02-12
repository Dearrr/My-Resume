import React from "react";
import TitleAndDescription from "../../Utils/TitleAndDescription";
import { SkillSectionContainer, SkillSectionWrapper } from "./SkillStyle";
import SkillList from "./component/SkillList";

const Skill = () => {
  return (
    <SkillSectionContainer id="skills">
      <SkillSectionWrapper>
        <TitleAndDescription
          title="Skills"
          description={"Here are some of my skills on which I have been working on for the past 1 years."}
        />
        <SkillList />
      </SkillSectionWrapper>
    </SkillSectionContainer>
  );
};

export default Skill;
