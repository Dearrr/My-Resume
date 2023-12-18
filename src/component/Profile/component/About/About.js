import React from "react";
import Card from "../../../Util/Card/Card";
import Title from "../../../Util/Title/Title";
import { Box, Stack } from "@mui/material";
import styled from "styled-components";
import profile from "../../../../Asset/profile.jpg";
import Button from "../../../Util/Button/Button";
import Text from "../../../Util/Text/Text";
import Resume from "../../../../Asset/WoraponResume.pdf";
const About = () => {
  return (
    <Card>
      <Title>About Me</Title>
      <Stack flexDirection={{ xs: "column", md: "row" }} gap={5} marginTop={"40px"}>
        <Box width={"25%"}>
          <Image src={profile} />
        </Box>

        <Stack gap={2}>
          <Text fontSize="20px" fontWeight="600">
            Hello
          </Text>
          <Text color="#888" fontSize="16px">
            I am a front-end developer with a keen interest in expanding my skills to encompass full-stack proficiency.
            Currently, I am actively learning Node.js, Express, and MongoDB. I bring over a year and three months of
            hands-on experience in implementing web applications using React.js.
          </Text>
          <Stack gap={2}>
            <Stack flexDirection={{ xs: "column", md: "column" }} gap={5}>
              <Box>
                <Text color="#888" fontSize="16px">
                  Name :{" "}
                </Text>
                <Text fontSize="16px">Worapon BoonChoo</Text>
              </Box>
              <Box>
                <Text color="#888" fontSize="16px">
                  Location :{" "}
                </Text>
                <Text fontSize="16px"> Bang Sue,Bangkok, Thailand</Text>
              </Box>
            </Stack>
            <Stack flexDirection={{ xs: "column", md: "column" }} gap={5}>
              <Box>
                <Text color="#888" fontSize="16px">
                  Birthday :{" "}
                </Text>
                <Text fontSize="16px"> 18 january, 1999</Text>
              </Box>
              <Box>
                <Text color="#888" fontSize="16px">
                  Email :{" "}
                </Text>
                <Text fontSize="16px">Worapon.Boonchoo@gmail.com</Text>
              </Box>
            </Stack>
          </Stack>
          <Stack>
            <Button>
              <a href={Resume} target="_blank">
                Download CV
              </a>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Card>
  );
};

export default About;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;
