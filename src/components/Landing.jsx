import React from "react";
import styled from "styled-components";

const StyledBG = styled.div`
  background-color: lightsteelblue;
  height: 600px;
  width: 100vw;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledH2 = styled.h2`
  font-size: 100px;
  color: black;
  font-weight: normal;
  align-items: center;
  margin-top: 150px;
`;

const StyledInput = styled.input`
  width: 1200px;
  height: 90px;
  background-color: whitesmoke;
  color: black;
  font-size: 60px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.5);
`;

function Landing() {
  return (
    <StyledBG>
      <StyledDiv>
        <StyledH2>How can we help? </StyledH2>

        <StyledInput placeholder="Search"></StyledInput>
      </StyledDiv>
    </StyledBG>
  );
}

export default Landing;
