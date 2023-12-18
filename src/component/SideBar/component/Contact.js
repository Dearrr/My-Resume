import { Stack } from "@mui/material";
import React from "react";
import Text from "../../Util/Text/Text";

const Contact = () => {
  return (
    <Stack>
      <Text color="#ffff" fontSize={"18px"} fontWeight={"600"}>
        Contact
      </Text>
      <Text fontSize={"16px"} color="#ffff">
        Phone : 082-9253550
      </Text>
      <Text fontSize={"16px"} color="#ffff">
        Email : worapon.boonchoo @gmail.com
      </Text>
      <Text fontSize={"16px"} color="#ffff">
        Bangsue,Bangkok, Thailand
      </Text>
    </Stack>
  );
};

export default Contact;
