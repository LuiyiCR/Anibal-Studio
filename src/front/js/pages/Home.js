import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useNavigate } from 'react-router-dom';
import heroImgUrl from '../../img/portada-facebook.png';
import cap1ImgUrl from '../../img/capacitaciones/cap1.jpeg';
import cap2ImgUrl from '../../img/capacitaciones/cap2.jpeg';
import buen1ImgUrl from '../../img/buen-dia/buen1.jpg';
import buen2ImgUrl from '../../img/buen-dia/buen2.jpg';
import cob1ImgUrl from '../../img/trabajos/cob1.jpeg';
import rub1ImgUrl from '../../img/trabajos/rub1.jpg';
import camb1ImgUrl from '../../img/trabajos/camb1.jpg';
import '../../styles/home.css';

export const Home = () => {
  const { store, actions } = useContext(Context);

  const testimonios = [
    {
      id: 1,
      nombre: 'Gustavo Santos',
      foto: 'gusTestimonioImgUrl',
      redSocial: 'Facebook',
      puntuacion: 5,
    },
    {
      id: 2,
      nombre: 'Paola Rodríguez',
      foto: 'paoTestimonioImgUrl',
      redSocial: 'Instagram',
      puntuacion: 4,
    },
    {
      id: 3,
      nombre: 'Rosaura Pérez',
      foto: 'rosTestimonioImgUrl',
      redSocial: 'Facebook',
      puntuacion: 5,
    },
    {
      id: 4,
      nombre: 'Soledad Gómez',
      foto: 'soleTestimonioImgUrl',
      redSocial: 'Instagram',
      puntuacion: 5,
    },
  ];

  return (
    <div className="container">
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
                Mantén al día tus citas, tratamientos, productos favoritos y
                más. Todo en un solo lugar, porque tu belleza merece la mejor
                atención.
              </p>

              <div className="btn-group gap-3">
                <button className="btn btn-primary rounded-3" type="button">
                  Ver Productos
                </button>
                <Link
                  to="/login"
                  className="btn btn-light rounded-3"
                  type="button"
                >
                  Ver Servicios
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
      <div className="divider-section">
        <div>
          <i className="fas fa-cut"></i>
          <p>Cortes</p>
        </div>
        <div>
          <i className="fas fa-oil-can"></i>
          <p>Keratinas</p>
        </div>
        <div>
          <i className="fas fa-spa"></i>
          <p>Tratamientos</p>
        </div>
        <div>
          <div>
            <i className="fas fa-ellipsis-h"></i>
            <p>Y mucho más...</p>
          </div>
        </div>
      </div>
      {/* Nuestros Trabajos */}
      <div className="container my-4">
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <h2 className="mb-3">¡Nuestros Trabajos!</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 text-center mb-2 ">
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
                  <p className="card-text">
                    Cambio extremo: ¡Corte y color! 🌈
                  </p>
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
      {/* Nuestra Trayectoria */}
      <div className="container my-4">
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
      {/* Nuestras Capacitaciones */}
      <div className="container my-4">
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
      <div className="row align-items-center">
        <div className="col-lg-12 text-center mb-5">
          <Link
            to="/login"
            className="btn btn-light text-black rounded-3"
            type="button"
          >
            Únete ahora
          </Link>
        </div>
      </div>
      {/* Testimonios */}
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
      <a href="https://wa.me/50672362847" className="whatsapp-button">
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
};
