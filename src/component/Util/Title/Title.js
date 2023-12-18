import { Stack } from "@mui/material";
import React from "react";
import styled from "styled-components";

const Title = (props) => {
  return (
    <Stack>
      <h2>{props.children}</h2>
      <Underline />
    </Stack>
  );
};

export default Title;

const Underline = styled.div`
  background: #ff5959;
  border-radius: 25px;
  height: 5px;
  width: 35px;
`;
