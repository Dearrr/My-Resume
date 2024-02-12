import React from "react";
import { TimelineSectionContainer } from "./TimelineStyleSection";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@mui/lab";
import { experiences } from "../../../DataSource/data";
import ExperienceItem from "./ExperienceItem";

const TimelineSection = () => {
  return (
    <TimelineSectionContainer>
      <Timeline>
        {experiences.map((experiences, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="secondary" />
              {index !== experiences.length - 1 && <TimelineConnector style={{ background: "#854CE6" }} />}
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <ExperienceItem experience={experiences}  />
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </TimelineSectionContainer>
  );
};

export default TimelineSection;
