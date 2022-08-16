import React from "react";
import { Accordion, Banner } from "../../components";


function About() {
  return (
    <>
      <div className="main-container">
        <Banner></Banner>

        <div className="aboutAccordionContainer">
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
        </div>
      </div>
    </>
  );
}

export default About;
