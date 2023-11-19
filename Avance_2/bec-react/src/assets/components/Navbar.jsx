import React, { useState } from "react";

import '../styles/navbar.css';

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        Biblioteca Estacion Central
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/catalogo">Catalogo</NavLink>
        </li>
        <li>
          <NavLink to="/perfil">Perfil</NavLink>
        </li>
        <li>
          <NavLink to="/producto">Producto</NavLink>
        </li>
      </ul>
    </nav>
  );
};