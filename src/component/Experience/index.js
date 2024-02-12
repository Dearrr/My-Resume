import React from "react";
import { ExperienceContainer, ExperienceWrapper } from "./ExperienceStyle";
import TitleAndDescription from "../../Utils/TitleAndDescription";
import TimelineSection from "./component/TimelineSection";

const Experience = () => {
  return (
    <ExperienceContainer id="experience">
      <ExperienceWrapper>
        <TitleAndDescription
          title="Experience"
          description="My work experience as a frontend developer and working on different companies and projects."
        />
        <TimelineSection />
      </ExperienceWrapper>
    </ExperienceContainer>
  );
};

export default Experience;
