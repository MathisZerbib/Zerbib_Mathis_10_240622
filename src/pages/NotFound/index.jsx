import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import colors from "utils/style/colors";

const BigTitle = styled.h1`
  margin-top: 50px;
  font-size: 18rem;
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





function NotFound() {
  return (
    <>
      <main>
        <div>
            <BigTitle>404</BigTitle>
            <Subtitle>Oups! La page que vous demandez n'existe pas.</Subtitle>
            <NavLink to="/"><ReturnToHome>Retourner sur la page d’accueil</ReturnToHome></NavLink>
        </div>
      </main>
    </>
  );
}

export default NotFound;
