import React from "react";
import styled from "styled-components";
import { Accordion, Banner } from "../../components";

const AccordionContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`;
function About() {
  return (
    <>
      <div className="main-container">
        <Banner></Banner>

        <AccordionContainer>
          <Accordion
            title="Fiabilité"
            content={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />

          <Accordion
            title="Respect"
            content={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />

          <Accordion
            title="Service"
            content={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />

          <Accordion
            title="Responsabilité"
            content={
              "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
            }
          />
        </AccordionContainer>
      </div>
    </>
  );
}

export default About;
