import React from 'react';

export const TestimoniosSection = ({ testimonios }) => {
  return (
    <div
      id="testimoniosCarousel"
      className="carousel slide text-center"
      data-bs-ride="carousel"
    >
      <h3 className="testimonios-h3">¡Testimonios!</h3>
      <div className="carousel-inner">
        {testimonios.map((testimonio, index) => (
          <div
            key={testimonio.id}
            className={`carousel-item ${index === 0 ? 'active' : ''}`}
          >
            <div className="d-flex flex-column align-items-center">
              <img
                src={'testimonio.foto'}
                className="rounded-circle"
                style={{ width: '30%', maxWidth: '100px' }}
                alt={`Foto de ${testimonio.nombre}`}
              />
              <div className="mt-3 text-center testimonios-name">
                <h5>{testimonio.nombre}</h5>
                <p>{testimonio.redSocial}</p>
              </div>
              <div className="text-center testimonios-stars">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className="star"
                    style={{
                      color: i < testimonio.puntuacion ? 'gold' : 'grey',
                    }}
                  >
                    &#9733;
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#testimoniosCarousel"
        data-bs-slide="prev"
      >
        <i className="fas fa-chevron-left"></i>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#testimoniosCarousel"
        data-bs-slide="next"
      >
        <i className="fas fa-chevron-right"></i>
        <span className="visually-hidden">Siguiente</span>
      </button>
    </div>
  );
};
