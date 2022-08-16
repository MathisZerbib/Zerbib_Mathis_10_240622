import React from 'react';
import LogoBanner from "../../assets/banner.png";

function Banner() {
    return (
      <>
      <div className='banner-div bannerDiv'>
        <img className='bannerImage' src={LogoBanner} alt="Logo Banner" />
        <div className='bannerCaption'>Chez vous, partout ailleurs</div>
      </div>
      </>
    );
  }

  export default Banner
