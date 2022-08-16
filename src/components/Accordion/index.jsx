import React, { useState } from "react";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordionCard">
      <div className="accordionTitle" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>
          {isActive ? (
            <FontAwesomeIcon icon={faAngleUp} color="white" />
          ) : (
            <FontAwesomeIcon icon={faAngleDown} color="white" />
          )}
        </div>
      </div>

      {/* TODO If Received array Then map it for equipments */}

      {isActive && Array.isArray(content) && content.map((el, index) => {
        return (<div className="accordionContentList" key={index}>{el}
          </div>)
      })
    }
      {isActive && !Array.isArray(content) && <div className="accordionContent">{content}</div>}
    </div>
  );
};

export default Accordion;
