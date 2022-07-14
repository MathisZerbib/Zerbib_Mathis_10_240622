import React from 'react';
import styled from "styled-components";
import LogoBanner from "../../assets/banner.png";



const BannerDiv = styled.div`
  border-radius: 25px;
  position: relative;
  background: black;
  overflow: hidden;
  margin: 30px auto;
  max-width: 90%;
`;

const BannerImage = styled.img`
  opacity: 0.7;
  width: 100%;
  height: inherit;
  `

const BannerCaption = styled.h2`
  font-size: 2rem;
  color: white;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function Banner() {
    return (
      <>
      <BannerDiv className='banner-div'>
        <BannerImage src={LogoBanner}></BannerImage>
        <BannerCaption>Chez vous, partout ailleurs</BannerCaption>
      </BannerDiv>
      </>
    );
  }

  export default Banner
