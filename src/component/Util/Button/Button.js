import React from "react";
import styled from "styled-components";

const Button = (props) => {
  return <CustomButton>{props.children}</CustomButton>;
};

export default Button;

const CustomButton = styled.button`
  display: flex;
  justify-content: center;
  justify-items: center;
  background-color: #ff5959;
  color: #ffff;
  border-radius: 20px;
  border: none;
  padding: 8px 20px;
  font-size: 16px;
  font-family: "Prompt", sans-serif;
  cursor: pointer;

  a {
    text-decoration: none;
    color: #ffff;
  }
`;
