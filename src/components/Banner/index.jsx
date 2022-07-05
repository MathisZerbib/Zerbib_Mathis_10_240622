import React from 'react';
import styled from "styled-components";
import LogoBanner from "../../assets/banner.png";



const BannerDiv = styled.div`
  height: 220px;
  border-radius: 10px;
  position: relative;
  background: black;
  overflow: hidden;
  margin: 0 auto;
  max-width: 1200px;
`;

const BannerImage = styled.img`
opacity: 0.4;
  `

const BannerCaption = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    color: white;
    position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Banner() {
    return (
      <>
      <BannerDiv>
        <BannerImage src={LogoBanner}></BannerImage>
        <BannerCaption>Chez vous, partout ailleurs</BannerCaption>
      </BannerDiv>
      </>
    );
  }

  export default Banner
