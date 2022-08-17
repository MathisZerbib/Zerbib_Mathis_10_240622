import React, { useState } from "react";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Caroussel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

    return (
        <div className="styledSlider">
        { length <= 1 ? '': 
          <FontAwesomeIcon
            icon={faAngleLeft}
            color="white"
            onClick={prevSlide}
            size="4x"
            style={{ cursor: "pointer",
            top: '50%',
            transform:' translateY(-50%)',
            position: 'absolute',
            zIndex: '1' }}
          />
          }
{ length <= 1 ? '': 
          <FontAwesomeIcon
            icon={faAngleRight}
            color="white"
            onClick={nextSlide}
            size="4x"
            style={{ cursor: "pointer",
            top: '50%',
            transform:' translateY(-50%)',
            position: 'absolute',
            zIndex: '1' }}
          />
        }
          {slides.map((slide, index) => {
            return (
              <div key={index}>
                {index === current && <div className="slideImage" style={{backgroundImage:  `url(${slide})`}}><p className="counterSlide"> {index+1 +"/"+length}</p> </div>}
              </div>
            );
          })}
           
        </div>
    );
  };

export default Caroussel;