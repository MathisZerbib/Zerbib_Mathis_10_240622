import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo_red.png";
import React from "react";

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  margin: 0 auto;
`;

const HomeLogo = styled.img`
  max-height: 70px;
  max-width: 200px;
`;

function Header() {
  const isLinkActive = (isActive) =>
    "nav-link" + (!isActive ? " unselected" : "");
  return (
    <NavContainer>
      <NavLink to="/">
        <HomeLogo src={Logo} />
      </NavLink>
      <div>
        <NavLink className={isLinkActive} to="/">
          Accueil
        </NavLink>
        <NavLink className={isLinkActive} to="/about">
          A propos
        </NavLink>
      </div>
    </NavContainer>
  );
}

export default Header;
