import { Box, Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Text from "../../../Util/Text/Text";
import Card from "../../../Util/Card/Card";
import Title from "../../../Util/Title/Title";

const EducationHistory = () => {
  return (
    <Card>
      <Title>Education History</Title>
      <Stack padding={"40px 20px 0  0 "} gap={2} style={{ position: "relative" }}>
        <Stack gap={1}>
          <DateBox>Graduate</DateBox>
          <Stack>
            <Text fontWeight="600">Chiang Mai University</Text>
            <Text fontSize="16px" color="#888">
              Bachelor of Arts(Information Studies),Humanities
            </Text>
          </Stack>
          <Text fontSize="17px">Major : Information Studies </Text>
          <Text fontSize="17px">Minor : Computer Science</Text>
          <Text fontSize="17px">GPA:3.16</Text>
        </Stack>
        <Box></Box>
      </Stack>
    </Card>
  );
};

export default EducationHistory;

const DateBox = styled.div`
  width: fit-content;
  border: 1px solid #ff5959;
  padding: 0 5px;
  color: #ff5959;
  border-radius: 3px;
`;
