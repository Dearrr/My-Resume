import React from "react";
import "./Card.css";
import styled from "styled-components";

const Card = (props) => {
  return <CustomCard {...props}>{props.children}</CustomCard>;
};

export default Card;

const CustomCard = styled.div`
  width: ${(props) => (props.width ? props.width : '')};
  height: 100%;
  padding: 30px;
  border-radius: 20px;
  background-color: ${(props) => (props.backgroundcolor ? props.backgroundcolor : "#fffff")};
  color: ${(props) => (props.color ? props.color : "black")};
  box-shadow: 0 6px 15px 0 rgba(0, 0, 0, 0.2);
  
`;
