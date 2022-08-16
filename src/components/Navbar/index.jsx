import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo_red.png";
import React from "react";

function Navbar() {
  const isLinkActive = (isActive) =>
    "nav-link" + (!isActive ? " unselected" : "");

  return (
    <nav className="nav-container navContainer">
      <NavLink to={"/"}>
        <img className="homeLogo" src={Logo} alt="Kasa Logo" />
      </NavLink>
      <div>
        <NavLink className={isLinkActive} to={"/"}>
          Accueil
        </NavLink>
        <NavLink className={isLinkActive} to={"about"}>
          A Propos
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
