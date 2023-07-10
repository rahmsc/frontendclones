import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  font-size: 36px;
  /* padding: 25px 60px; */
  margin-right: 20px;
  background-color: ${(props) => props.color || "blue"};
  color: white;
  border: 3px solid white;
  border-radius: 20px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const Button = ({ text, color }) => {
  return <StyledButton color={color}>{text}</StyledButton>;
};

export default Button;
