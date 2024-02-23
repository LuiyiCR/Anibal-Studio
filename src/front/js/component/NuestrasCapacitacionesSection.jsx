import React from 'react';

export const NuestrasCapacitacionesSection = ({ cap1ImgUrl, cap2ImgUrl }) => {
  return (
    <div className="container-cards mb-4 pt-4">
      <div className="row align-items-center">
        <div className="col-lg-12 text-center">
          <h2 className="mb-3">¡Nuestras Capacitaciones!</h2>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 text-center mb-2 ">
          <p>¡Algunos seminarios... 📚</p>
        </div>
      </div>
      <div
        id="carouselNuestrasCapacitacionesIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card">
              <img
                src={cap1ImgUrl}
                className="card-img-top img-example"
                alt="Imagen 1"
              />
              <div className="card-body">
                <p className="card-text">Seminario: ¡Morrocanoil! 🇨🇷</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img
                src={cap2ImgUrl}
                className="card-img-top img-example"
                alt="Imagen 2"
              />
              <div className="card-body">
                <p className="card-text">Seminario: ¡Morrocanoil! 🇨🇷</p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselNuestrasCapacitacionesIndicators"
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
          data-bs-target="#carouselNuestrasCapacitacionesIndicators"
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
