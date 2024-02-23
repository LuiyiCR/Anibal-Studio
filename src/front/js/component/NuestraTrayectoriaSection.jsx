import React from 'react';

export const NuestraTrayectoriaSection = ({ buen1ImgUrl, buen2ImgUrl }) => {
  return (
    <div className="container-cards mb-5 pt-4">
      <div className="row align-items-center">
        <div className="col-lg-12 text-center">
          <h2 className="mb-3">¡Nuestra Trayectoria!</h2>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-12 text-center mb-2 ">
          <p>¡Buen Día! 🎥</p>
        </div>
      </div>
      <div
        id="carouselNuestraTrayectoriaIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="false"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="card">
              <img
                src={buen1ImgUrl}
                className="card-img-top img-example"
                alt="Imagen 1"
              />
              <div className="card-body">
                <p className="card-text">Tema: ¡Rubios cenizos! 🌟</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="card">
              <img
                src={buen2ImgUrl}
                className="card-img-top img-example"
                alt="Imagen 2"
              />
              <div className="card-body">
                <p className="card-text">
                  Tema: ¡Maquillaje para el día a día! 💄
                </p>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselNuestraTrayectoriaIndicators"
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
          data-bs-target="#carouselNuestraTrayectoriaIndicators"
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
