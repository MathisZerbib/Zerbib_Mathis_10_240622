import styled from "styled-components";
import Logo from "../../assets/logo_white.png";
import React from "react";

const FooterContainer = styled.div`
  height: 150px;
  border-radius: 0px;
  background: black;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: auto;
`;

const FooterLogo = styled.img`
  margin: auto;
`;

const Copyright = styled.p`
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 0;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo src={Logo} />
      <Copyright>© 2020 Kasa. All rights reserved</Copyright>
    </FooterContainer>
  );
}

export default Footer;
