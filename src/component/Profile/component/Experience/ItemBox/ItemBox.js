import { Box, Stack } from "@mui/material";
import React from "react";
import Text from "../../../../Util/Text/Text";
import styled from "styled-components";

const ItemBox = (props) => {
  const { date, position, company, todoList } = props.data;
  return (
    <Stack padding={"40px 0"} gap={2} style={{ position: "relative" }}>
      <Stack gap={1}>
        <DateBox>{date}</DateBox>
        <Stack>
          <Text fontWeight="600">{position}</Text>
          <Text fontSize="16px" color="#888">
            {company}
          </Text>
        </Stack>
      </Stack>
      <Box>
        {todoList.map((item, index) => (
          <ul key={index}>
            <li>
              <Text fontSize="17px">{item}</Text>
            </li>
          </ul>
        ))}
      </Box>
      {props.index !== props.dataLength - 1 && <CustomLine />}
    </Stack>
  );
};

export default ItemBox;

const DateBox = styled.div`
  width: fit-content;
  border: 1px solid #ff5959;
  padding: 0 5px;
  color: #ff5959;
  border-radius: 3px;
`;

const CustomLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2px;
  background: radial-gradient(ellipse at left, #ff5959 0%, rgba(255, 255, 255, 0) 80%);
`;
