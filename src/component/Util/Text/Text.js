import React from "react";
import styled from "styled-components";

const Text = (props) => {
  return <CustomText {...props}>{props.children}</CustomText>;
};

export default Text;

const CustomText = styled.span`
  font-size: ${(props) => (props.fontSize ? props.fontSize : "18px")};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : "400")};
  color: ${(props) => (props.color ? props.color : "black")};
`;
