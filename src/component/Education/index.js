import React from "react";
import { EducationContainer, EducationWrapper } from "./EducationStyle";
import TitleAndDescription from "../../Utils/TitleAndDescription";
import EducationTimelineSection from "./component/EducationTimelineSection";

const Education = () => {
  return (
    <EducationContainer id="education">
      <EducationWrapper>
        <TitleAndDescription title="Education" description={"My educational details are as follows."} />
        <EducationTimelineSection />
      </EducationWrapper>
    </EducationContainer>
  );
};

export default Education;
