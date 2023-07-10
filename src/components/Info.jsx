import styled from "styled-components";
import DataDisplay from "./DataDisplay";

const StyledContainer = styled.div`
  background-color: white;
  height: auto;
`;

function Info() {
  return (
    <StyledContainer>
      <DataDisplay />
    </StyledContainer>
  );
}

export default Info;
