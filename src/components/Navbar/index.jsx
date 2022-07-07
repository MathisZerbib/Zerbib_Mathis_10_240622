import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/Logo.png";
import React from "react";

const HomeLogo = styled.img`
max-height: 70px;
max-width: 200px;
`;

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <NavContainer>
      <NavLink to="/">
        <HomeLogo src={Logo} />
      </NavLink>
      <div>
        <NavLink
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={(isActive) =>
            "nav-link" + (!isActive ? " unselected" : "")
          }
          to="/about"
        >
          A propos
        </NavLink>
      </div>
    </NavContainer>
  );
}

export default Header;
