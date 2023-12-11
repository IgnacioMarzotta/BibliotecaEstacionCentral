import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { ButtonLink } from "./ui/ButtonLink";

import '../assets/styles/navbar.css';

import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();
  var profile_url = "/login";

  if(isAuthenticated)
  {
    profile_url = "/user/"+user.id;
  }

  return (
    <nav className="px-5">
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
          <NavLink to={profile_url}>Perfil</NavLink>
        </li>
      </ul>
      <ul className="flex gap-x-2">
        {isAuthenticated ? (
          <>
            {user.admin === 1 ? (
            <>
              <li>
                <ButtonLink to="/add-document">Add Doc</ButtonLink>
              </li>
              <li>
                <ButtonLink to="/documents_admin">Ejemplares</ButtonLink>
              </li>
              </>) : (<>
            </>)}
            {user.admin === 2 ? (
              <>
                <li>
                  <ButtonLink to="/add-document">Add Doc</ButtonLink>
                </li>
                <li>
                  <ButtonLink to="/documents_admin">Ejemplares</ButtonLink>
                </li>
              </>) : (<>
            </>)}
            <li>
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <ButtonLink to="/login">Login</ButtonLink>
            </li>
            <li>
              <ButtonLink to="/register">Register</ButtonLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};