import { Stack } from "@mui/material";
import React from "react";
import Text from "../../Util/Text/Text";

const Language = () => {
  return (
    <Stack>
      <Text color="#ffff" fontSize={"18px"} fontWeight={"600"}>
        Language skills
      </Text>
      <Text fontSize={"16px"} color="#ffff">
        Thai (native)
      </Text>
      <Text fontSize={"16px"} color="#ffff">
        English (Intermediate)
      </Text>
    </Stack>
  );
};

export default Language;
