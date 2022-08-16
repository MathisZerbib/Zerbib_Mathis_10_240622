import Logo from "../../assets/logo_white.png";
import React from "react";

function Footer() {
  return (
    <div className="footerContainer">
      <img className="footerLogo" src={Logo} alt="Kasa Logo" />
      <p className="copyright">© 2020 Kasa. All rights reserved</p>
    </div>
  );
}

export default Footer;
