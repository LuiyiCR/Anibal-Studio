import React from 'react';
import '../../styles/Footer.css';

export const Footer = () => (
  <footer className="footer mt-auto py-3 text-center">
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <h5>Contacto</h5>
          <p>
            <i className="far fa-envelope"></i> Correo electrónico:
            anibalstudio@live.com
          </p>
          <p>
            <i className="fab fa-whatsapp"></i> Teléfono: (506) 7236-2847
          </p>
        </div>
        <div className="col-md-4">
          <h5>Enlaces útiles</h5>
          <ul className="list-unstyled">
            <li>
              <a href="#">Términos de servicio</a>
            </li>
            <li>
              <a href="#">Política de privacidad</a>
            </li>
          </ul>
        </div>
        <div className="col-md-4">
          <h5>Síguenos</h5>
          <div className="d-flex justify-content-center">
            <a href="https://www.facebook.com/studioanibal" className="me-2">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="me-2">
              <i className="fab fa-tiktok"></i>
            </a>
            <a href="https://www.instagram.com/anibal_studio/" className="me-2">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
