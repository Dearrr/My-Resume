import React from "react";
import Card from "../../Util/Card/Card";
import { Stack } from "@mui/material";
import { Degree, Image, Name, EducationDate, Grade, Description, Span } from "./EducationItemStyle";

const EducationItem = ({ education }) => {
  return (
    <Card>
      <Stack gap={"12px"} flexDirection={"row"}>
        <Image src={education.img} />
        <Stack>
          <Name>{education.school}</Name>
          <Degree>{education.degree}</Degree>
          <EducationDate>{education.date}</EducationDate>
        </Stack>
      </Stack>
      <Grade>
        <b>Grade: </b>
        {education.grade}
      </Grade>
      <Description>
        <Span>{education.desc}</Span>
      </Description>
    </Card>
  );
};

export default EducationItem;
