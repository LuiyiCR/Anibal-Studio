import React from 'react';
import { Link } from 'react-router-dom';
import logoImgUrl from '../../img/logo/logo-sin-fondo-letras-negras.png';
import '../../styles/NavBar.css';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link to="/" className="navbar-brand mb-0 h1">
          <img src={logoImgUrl} alt="Your Logo" className="logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <div className="navbar-nav">
            <Link to="/nuestros-centros" className="nav-item nav-link">
              Nuestros Centros
            </Link>
            <Link to="/servicios" className="nav-item nav-link">
              Servicios
            </Link>
            <Link to="/productos" className="nav-item nav-link">
              Productos
            </Link>
            <Link to="/acerca-de-nosotros" className="nav-item nav-link">
              Acerca De Nosotros
            </Link>
            <Link to="/iniciar-sesion" className="nav-item nav-link">
              <button className="btn btn-primary">Iniciar Sesión</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
