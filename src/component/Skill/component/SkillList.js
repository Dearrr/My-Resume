import React from "react";
import { Skill, SkillImage, SkillItem, SkillTitle, SkillsContainer, SkillListContainer } from "./SkillListStyle";
import { skills } from "../../../DataSource/data";

const SkillList = () => {
  return (
    <SkillsContainer>
      {skills.map((skill, index) => (
        <Skill key={index}>
          <SkillTitle>{skill.title}</SkillTitle>
          
            <SkillListContainer>
              {skill.skills.map((item, index) => (
                <SkillItem key={index}>
                  <SkillImage src={item.image} />
                  {item.name}
                </SkillItem>
              ))}
            </SkillListContainer>
          
        </Skill>
      ))}
    </SkillsContainer>
  );
};

export default SkillList;
