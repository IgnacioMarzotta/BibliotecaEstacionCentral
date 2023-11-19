import React from "react";

import '../styles/footer.css';

import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer>
        <div className="inner-footer">
            <div className="footer-items">
                <h1>Biblioteca Estacion Central</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, iusto ipsam harum veritatis, unde ex aliquid in recusandae quos nihil, repellat delectus veniam ullam fugit quo? Reiciendis ratione nesciunt libero!</p>
            </div>
            
            <div className="footer-items">
                <h3>Links</h3>
                <div className="border1"></div>
                <ul className="footer-list">
                    <li><NavLink to="/perfil">Perfil</NavLink></li>
                    <li><NavLink to="/producto">Producto</NavLink></li>
                    <li><NavLink to="/catalogo">Catalogo</NavLink></li>
                </ul>
            </div>
            
            <div className="footer-items">
                <h3>XXXXXX</h3>
                <div className="border1"></div>
                <ul className="footer-list">
                    <li>XXXXXX</li>
                    <li>XXXXXX</li>
                    <li>XXXXXX</li>
                    <li>XXXXXX</li>
                </ul>
            </div>
            
            <div className="footer-items">
                <h3>XXXXXX</h3>
                <div className="border1"></div>
                <ul className="footer-list">
                    <li><i className="fa fa-map-marker" aria-hidden="true"></i>XXXXXXXXXXXX</li>
                    <li><i className="fa fa-phone" aria-hidden="true"></i>XXXXXXXXXXXX</li>
                    <li><i className="fa fa-envelope" aria-hidden="true"></i>XXXXXXXXXXXX</li>
                </ul> 
            </div>
        </div>
        
        <div className="footer-bottom">
            Ignacio Marzotta - 23.601.779-6 &copy; Biblioteca Estacion Central 2023.
        </div>
    </footer>
  );
};