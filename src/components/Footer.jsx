import React from "react";
import styled from "styled-components";
import abstractLogo from "../assets/logo/Abstract.png";

const FooterContainer = styled.footer`
  background-color: black;
  display: flex;
  gap: 150px;
  justify-content: space-between;
  align-items: center;
`;

const ColumnContainer = styled.div`
  display: flex;
  margin-left: 150px;
  margin-top: -150px;
`;

const Column = styled.div`
  margin-right: 100px;
`;

const LogoContainer = styled.div`
  position: relative;
  margin-right: 190px;
`;

const StyledH4 = styled.h4`
  font-size: 36px;
  color: white;
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  display: block;
  font-size: 20px;
  color: white;
  text-decoration: none;
  margin-bottom: 5px;

  &:hover {
    text-decoration: underline;
  }
`;

const EmailLink = styled.a`
  display: block;
  font-size: 18px;
  color: white;
  text-decoration: none;
  margin-top: 20px;

  &:hover {
    text-decoration: underline;
  }
`;

const CopyrightContainer = styled.div`
  color: white;
  font-size: 25px;
  margin-top: 500px;
  margin-right: 120px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
`;

const StyledLogo = styled.img`
  height: 50px;
  width: auto;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <ColumnContainer>
        <Column>
          <StyledH4>Abstract</StyledH4>
          <FooterLink href="#">Start trial</FooterLink>
          <FooterLink href="#">Pricing</FooterLink>
          <FooterLink href="#">Download</FooterLink>
        </Column>
        <Column>
          <StyledH4>Resources</StyledH4>
          <FooterLink href="#">Blog</FooterLink>
          <FooterLink href="#">Help Center</FooterLink>
          <FooterLink href="#">Release Notes</FooterLink>
          <FooterLink href="#">Status</FooterLink>
        </Column>
        <Column>
          <StyledH4>Community</StyledH4>
          <FooterLink href="#">Twitter</FooterLink>
          <FooterLink href="#">LinkedIn</FooterLink>
          <FooterLink href="#">Facebook</FooterLink>
          <FooterLink href="#">Dribble</FooterLink>
          <FooterLink href="#">Podcast</FooterLink>
        </Column>
        <Column>
          <StyledH4>Company</StyledH4>
          <FooterLink href="#">About Us</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Legal</FooterLink>
          <StyledH4>Contact us</StyledH4>
          <EmailLink href="#">info@randomemail.com</EmailLink>
        </Column>
      </ColumnContainer>
      <CopyrightContainer>
        <LogoContainer>
          <StyledLogo src={abstractLogo} alt="Logo" />
        </LogoContainer>
        &copy; {new Date().getFullYear()} Abstract Studio Design, Inc. <br />
        All rights reserved.
      </CopyrightContainer>
    </FooterContainer>
  );
};

export default Footer;
