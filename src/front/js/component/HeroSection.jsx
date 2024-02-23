import React from 'react';
import { Link } from 'react-router-dom';

export const HeroSection = ({ heroImgUrl }) => {
  return (
    <div className="hero text-center">
      <div className="container mt-3 mb-3">
        <div className="row align-items-center">
          <div className="col-lg-6 p-5">
            <h1 className="hero-title">
              <span className="header-text">Aníbal Studio</span>...
              <br /> ¡Todo lo que tu cabello necesita, ahora a tan solo un
              click!
            </h1>
            <p className="lead text-muted">
              Mantén al día tus citas, tratamientos, productos favoritos y más.
              Todo en un solo lugar, porque tu belleza merece la mejor atención.
            </p>

            <div className="btn-group gap-3">
              <Link
                to="/productos"
                className="btn btn-primary rounded-3"
                type="button"
              >
                Ver Productos
              </Link>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-image">
              <img
                className="img-fluid hero-image"
                src={heroImgUrl}
                alt="Foto de portada"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
