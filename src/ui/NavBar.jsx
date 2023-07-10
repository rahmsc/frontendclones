import styled from "styled-components";
import abstractLogo from "../assets/logo/Abstract.png";
import Button from "./Button";

const StyledBG = styled.div`
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 0 20px;
`;

const StyledHeader = styled.div`
  padding-left: 100px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const StyledLogo = styled.img`
  height: 50px;
  width: auto;
`;

const StyledH3 = styled.h3`
  font-size: 35px;
  padding: 20px;
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 150px;
`;
const StyledLink = styled.a`
  font-size: 32px;
  color: white;
  font-weight: semibold;
`;

function NavBar() {
  return (
    <StyledBG>
      <StyledHeader>
        <StyledLogo src={abstractLogo} alt="Logo" />

        <StyledH3> | </StyledH3>
        <StyledLink href="#"> Help Center</StyledLink>
      </StyledHeader>

      <StyledButtonContainer>
        <Button color="black" text="Submit a request"></Button>
        <Button color="blue" text="Sign in"></Button>
      </StyledButtonContainer>
    </StyledBG>
  );
}

export default NavBar;
