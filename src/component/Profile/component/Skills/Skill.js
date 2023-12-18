import React, { Fragment } from "react";
import Card from "../../../Util/Card/Card";
import Title from "../../../Util/Title/Title";
import { Stack } from "@mui/material";
import Text from "../../../Util/Text/Text";

const Skill = () => {
  const skills = [
    { title: "Programming", list: ["HTML", "CSS", "JavaScript", "TypeScript", "SQL", "Node (Studying)"] },
    { title: "Database", list: ["MySQL", "MongoDB (Studying)"] },
    { title: "Framework&Library", list: ["React"] },
  ];
  return (
    <Card>
      <Title>Skills</Title>
      <Stack flexDirection={{xs:'column',md:'row'}} justifyContent={"space-between"} style={{ marginTop: "20px", marginRight: "20px" }}>
        {skills.map((item, index) => (
          <Fragment key={index}>
            <Stack>
              <Text fontWeight="600">{item.title}</Text>
              <ul>
                {item.list.map((listItem, index) => (
                  <li key={index}>
                    <Text>{listItem}</Text>
                  </li>
                ))}
              </ul>
            </Stack>
          </Fragment>
        ))}
      </Stack>
    </Card>
  );
};

export default Skill;
