import React from "react";
import { NavLink } from "react-router-dom";

function NotFound() {
  return (
    <>
      <main>
        <div className="pageContainer">
          <h1 className="big404 bigTitle">404</h1>
          <p className="sub404 subtitle">
            Oups! La page que vous demandez n'existe pas.
          </p>
          <NavLink to="/"  style={{ textDecoration: 'none' }}>
            <p className="returnHome">Retourner sur la page d’accueil</p>
          </NavLink>
        </div>
      </main>
    </>
  );
}

export default NotFound;
