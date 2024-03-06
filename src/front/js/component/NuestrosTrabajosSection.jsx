import React from 'react';
import '../../styles/NuestrosTrabajosSection.css';

export const NuestrosTrabajosSection = ({
  rub1ImgUrl,
  cob1ImgUrl,
  camb1ImgUrl,
}) => {
  return (
    <div className="container-cards mb-5 pt-4">
      <div className="row align-items-center">
        <div className="col-lg-12 text-center">
          <h2 className="mb-3">¡Nuestros Trabajos!</h2>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 text-center mb-2">
          <p>¡Algunas de nuestras creaciones...! ♥️</p>
        </div>
      </div>
      <div
        id="carouselNuestrosTrabajosIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card">
              <img
                src={rub1ImgUrl}
                className="card-img-top img-example"
                alt="Imagen 1"
              />
              <div className="card-body">
                <p className="card-text">Coloración: ¡Rubio! 💛</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img
                src={cob1ImgUrl}
                className="card-img-top img-example"
                alt="Imagen 2"
              />
              <div className="card-body">
                <p className="card-text">Coloración: ¡Cobrizo! 🧡</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img
                src={camb1ImgUrl}
                className="card-img-top img-example"
                alt="Imagen 2"
              />
              <div className="card-body">
                <p className="card-text">Cambio extremo: ¡Corte y color! 🌈</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselNuestrosTrabajosIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselNuestrosTrabajosIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};
