import React from "react";
import Title from "../../../Util/Title/Title";
import Card from "../../../Util/Card/Card";
import ItemBox from "./ItemBox/ItemBox";

const Experience = () => {
  const experienceList = [
    {
      date: "March,2023 - September,2023",
      position: "Front End Developer",
      company: "Make Life Better Solutions Co., Ltd",
      todoList: [
        "Developed website with TypeScript ReactJs",
        "Developed new feature for current internal website with ReactJs",
        "Fix bug in current internal website",
      ],
    },
    {
      date: "May,2022 - Dec,2022",
      position: "Front End Developer",
      company: "Fastfit Sogood Co.,Ltd",
      todoList: ["Developed internal responsive website with TypeScript ReactJs"],
    },
  ];
  return (
    <Card>
      <Title>Experience</Title>
      {experienceList.map((item,index) => (
        <ItemBox key={index} index={index} dataLength={experienceList.length} data={item}></ItemBox>
      ))}
    </Card>
  );
};

export default Experience;
