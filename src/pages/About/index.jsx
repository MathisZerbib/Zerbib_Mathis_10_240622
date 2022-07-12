import Banner from 'components/Banner';
import React from 'react';
import styled from 'styled-components';
import Accordion  from '../../components/Accordion';

const AccordionContainer = styled.div`
margin: 0 auto;
display:flex;
flex-direction: column;
`;
function About() {
    return (
      <>
        <main>
        <Banner></Banner>

          <AccordionContainer>
                  
                  <Accordion title="Fiabilité" content={['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.']} />
                  
                  <Accordion title="Respect" content={['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.']} />
                
                  <Accordion title="Service" content={['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.']}  />

                  <Accordion title="Responsabilité" content={['La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.']}  />

              </AccordionContainer>
        </main>
      </>
    );
  }

  export default About
