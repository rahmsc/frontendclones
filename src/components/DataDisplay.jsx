import React from "react";
import styled from "styled-components";
import infoData from "../data/info";

const InfoContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(2, 600px);
  gap: 100px;
  color: black;
  font-size: 30px;
  padding: 150px;
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  /* padding: 200px; */
`;

const InfoIcon = styled.img`
  width: 100px;
  height: 100px;
`;

const InfoContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5px;
`;

const InfoTitle = styled.h3`
  margin: 0;
`;

const InfoDescription = styled.p`
  margin: 10px 0;
`;

const InfoLink = styled.a`
  color: blue;
  text-decoration: underline;
`;

const InfoSection = ({ icon, title, description, link }) => (
  <InfoItem>
    <InfoIcon src={icon} alt="Icon" />
    <InfoContent>
      <InfoTitle>{title}</InfoTitle>
      <InfoDescription>{description}</InfoDescription>
      <InfoLink href={link}>{link}</InfoLink>
    </InfoContent>
  </InfoItem>
);

const InfoList = ({ info }) => (
  <InfoContainer>
    {info.map((item) => (
      <InfoSection
        key={item.id}
        icon={item.icon}
        title={item.title}
        description={item.description}
        link={item.link}
      />
    ))}
  </InfoContainer>
);

function DataDisplay() {
  const info = infoData;

  return <InfoList info={info} />;
}

export default DataDisplay;
