import React from "react";
import { Stack } from "@mui/material";
import {
  Card,
  ExperienceImage,
  Role,
  Company,
  Date,
  Description,
  Span,
  ExperienceSkillItem,
} from "./ExperienceItemStyle";

const ExperienceItem = ({ experience }) => {
  return (
    <Card>
      <Stack gap={"12px"} flexDirection={"row"}>
        <ExperienceImage src={experience.img} />
        <Stack>
          <Role>{experience.role}</Role>
          <Company>{experience.company}</Company>
          <Date>{experience.date}</Date>
        </Stack>
      </Stack>
      <Description>
        {experience?.desc && <Span id="description">{experience?.desc}</Span>}
        {experience?.skills && (
          <>
            <br />
            <Stack flexDirection={"row"} gap={"12px"} marginTop={"-10px"}>
              <b>Skills:</b>
              <Stack flexDirection={"row"} flexWrap={"wrap"} gap={"8px"}>
                {experience.skills.map((skill, index) => (
                  <ExperienceSkillItem key={index}>• {skill}</ExperienceSkillItem>
                ))}
              </Stack>
            </Stack>
          </>
        )}
      </Description>
    </Card>
  );
};

export default ExperienceItem;
