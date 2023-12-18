import { Stack } from "@mui/material";
import React from "react";
import Text from "../../Util/Text/Text";

const PersonalProfile = () => {
  return (
    <Stack>
      <Text color="#ffff" fontSize={"18px"} fontWeight={"600"}>
        Personal Profile
      </Text>
      <Text fontSize={"16px"} color="#ffff">
        Name : Worapon
      </Text>
      <Text fontSize={"16px"} color="#ffff">
        SurName : Boonchoo
      </Text>
      <Text fontSize={"16px"} color="#ffff">
        Gender : Male
      </Text>
      <Text fontSize={"16px"} color="#ffff">
        Age : 24
      </Text>
    </Stack>
  );
};

export default PersonalProfile;
