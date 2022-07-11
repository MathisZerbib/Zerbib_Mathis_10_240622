import React, { useState } from "react";
import styled from "styled-components";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SlideImage = styled.img`
width: 100%;
height: inherit;
object-fit: cover;
object-position: center;
`;

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: inherit;
  object-fit: cover;
  object-position: center;
`;

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
      <>
        

        <StyledSlider>
        { length <= 1 ? '': 
          <FontAwesomeIcon
            icon={faAngleLeft}
            color="white"
            onClick={prevSlide}
            size="4x"
            style={{ cursor: "pointer",
            right: '94%',
            position: 'absolute',
            zIndex: '1' }}
          />
          }
          {slides.map((slide, index) => {
            return (
              <div key={index}>
                {index === current && <SlideImage src={slide} alt="" />}
              </div>
            );
          })}
           { length <= 1 ? '': 
          <FontAwesomeIcon
            icon={faAngleRight}
            color="white"
            onClick={nextSlide}
            size="4x"
            style={{ cursor: "pointer",
            left: '94%',
            position: 'absolute' }}
          />
        }
        </StyledSlider>
      </>
    );
  };

export default Caroussel;