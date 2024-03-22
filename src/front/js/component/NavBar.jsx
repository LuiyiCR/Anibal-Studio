import React, { useContext, useRef } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import logoImgUrl from '../../img/logo/logo-sin-fondo-letras-negras.png';
import logo2ImgUrl from '../../img/logo/logo.png';
import '../../styles/NavBar.css';

export const NavBar = () => {
  const { store, actions } = useContext(Context);
  const navBarRef = useRef(null);

  const handleThemeChange = (e) => {
    actions.toggleTheme();
  };

  const closeNavbar = () => {
    const navBarCollapse = new bootstrap.Collapse(navBarRef.current);
    navBarCollapse.hide();
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <Link to="/" className="navbar-brand mb-0 h1">
          <img src={logoImgUrl} alt="Aníbal Studio Logo" className="logo" />
        </Link>
        <div className="menu-switcher">
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
            ref={navBarRef}
          >
            <div className="navbar-nav">
              <Link
                to="/nuestros-centros"
                className="nav-item nav-link"
                onClick={closeNavbar}
              >
                Nuestros Centros
              </Link>
              <Link
                to="/servicios"
                className="nav-item nav-link"
                onClick={closeNavbar}
              >
                Servicios
              </Link>
              <Link
                to="/productos"
                className="nav-item nav-link"
                onClick={closeNavbar}
              >
                Productos
              </Link>
              <Link
                to="/acerca-de-nosotros"
                className="nav-item nav-link"
                onClick={closeNavbar}
              >
                Acerca De Nosotros
              </Link>
              <Link
                to="/login"
                className="nav-item nav-link"
                onClick={closeNavbar}
              >
                <button className="btn button-primary rounded-1">
                  Iniciar Sesión
                </button>
              </Link>
            </div>
            <input
              className="theme-switch__input"
              type="checkbox"
              id="theme-switch"
              checked={store.theme === 'dark-theme'}
              onChange={handleThemeChange}
            />
            <label htmlFor="theme-switch" className="theme-switch">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};
