import React, { useState } from "react";
import styled from "styled-components";
import colors from "utils/style/colors";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AccordionCard = styled.div`
  width: 600px;
  margin: 2rem auto;
  justify-content: space-between;
`;
const AccordionTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  cursor: pointer;
  background-color: ${colors.primary};
  color: white;
  padding: 10px;
  border-radius: 10px;
`;
const AccordionContent = styled.div`
  color: ${colors.primary};
  padding: 1rem;
  background: #f6f6f6;
  text-align: initial;
  text-decoration: inherit;
  border-radius: 0 0 10px 10px;
  -webkit-animation: fadein 1s;
  list-style: none;
  -moz-animation: fadein 1s;
  -ms-animation: fadein 1s;
  -o-animation: fadein 1s;
  -webkit-animation: fadein 1s;
  animation: fadein 1s;

  -webkit-animation: fadein 1s;
  -moz-animation: fadein 1s; 
   -ms-animation: fadein 1s; 
    -o-animation: fadein 1s; 
       animation: fadein 1s;


@keyframes fadein {
from { opacity: 0; }
to   { opacity: 1; }
}

@-moz-keyframes fadein {
from { opacity: 0; }
to   { opacity: 1; }
}

@-webkit-keyframes fadein {
from { opacity: 0; }
to   { opacity: 1; }
}

@-ms-keyframes fadein {
from { opacity: 0; }
to   { opacity: 1; }
}

`;

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <AccordionCard>
      <AccordionTitle onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <FontAwesomeIcon icon={faAngleUp} color="white" />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} color="white" />
          )}
        </div>
      </AccordionTitle>

      {/* TODO If Received array Then map it for equipments */}

      {isActive && Array.isArray(content) && content.map((el, index) => {
        return (<AccordionContent key={index}><li>{el}
          </li></AccordionContent>)
      })
    }
      {isActive && !Array.isArray(content) && <AccordionContent>{content}</AccordionContent>}
    </AccordionCard>
  );
};

export default Accordion;
