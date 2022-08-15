import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "utils/style/colors";

const BigTitle = styled.h1`
  margin-top: 50px;
  color: ${colors.primary};
`;


const Subtitle = styled.p`
  font-size: 2.25rem;
  color: ${colors.primary};
`;


const ReturnToHome = styled.p`
  font-size: 1.25rem;
  color: ${colors.primary};
`;

const PageContainer = styled.div`
  margin: 100px auto;
  `;





function NotFound() {
  return (
    <>
      <main>
        <PageContainer>
            <BigTitle className="big404">404</BigTitle>
            <Subtitle className="sub404">Oups! La page que vous demandez n'existe pas.</Subtitle>
            <NavLink to="/"><ReturnToHome>Retourner sur la page d’accueil</ReturnToHome></NavLink>
        </PageContainer>
      </main>
    </>
  );
}

export default NotFound;
