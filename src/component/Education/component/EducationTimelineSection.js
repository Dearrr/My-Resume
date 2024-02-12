import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import React from "react";
import { education } from "../../../DataSource/data";
import EducationItem from "./EducationItem";
import { EducationTimelineSectionContainer } from "./EducationTimelineSectionStyle";

const EducationTimelineSection = () => {
  return (
    <EducationTimelineSectionContainer>
      <Timeline>
        {education.map((education, index) => (
          <TimelineItem key={index}>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <EducationItem education={education} />
            </TimelineContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              {index !== education.length && <TimelineConnector style={{ background: "#854CE6" }} />}
            </TimelineSeparator>
          </TimelineItem>
        ))}
      </Timeline>
    </EducationTimelineSectionContainer>
  );
};

export default EducationTimelineSection;
