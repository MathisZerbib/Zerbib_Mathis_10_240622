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
  padding: 1rem;
  background: #f6f6f6;
  color: ${colors.primary};
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
      {isActive && <AccordionContent>{content}</AccordionContent>}
    </AccordionCard>
  );
};

export default Accordion;
