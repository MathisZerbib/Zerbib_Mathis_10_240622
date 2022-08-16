import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo_red.png";
import React from "react";

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 77rem;
  max-width: 90%;
`;

const HomeLogo = styled.img`
  max-height: 4.375rem;
  max-width: 12.5rem;
`;

function Navbar() {
  const isLinkActive = (isActive) =>
    "nav-link" + (!isActive ? " unselected" : "");

  return (
    <NavContainer className="nav-container">
      <NavLink to={"/"}>
        <HomeLogo src={Logo} />
      </NavLink>
      <div>
        <NavLink className={isLinkActive} to={"/"}>
          Accueil
        </NavLink>
        <NavLink className={isLinkActive} to={"about"}>
          A Propos
        </NavLink>
      </div>
    </NavContainer>
  );
}

export default Navbar;
