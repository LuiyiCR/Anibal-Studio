import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/home.css';

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="background-container">
      <div
        className="container"
        style={{ maxWidth: '1200px', position: 'relative' }}
      >
        <div className="hero text-center">
          <div className="container mt-3 mb-3">
            <div className="row align-items-center">
              <div className="col-lg-6 p-5">
                <h1 className="hero-title">
                  <span className="header-pet-text">Aníbal Studio</span>...
                  <br /> tu mejor aliado en el cuidado de tu cabello
                </h1>
                <p className="lead text-muted">
                  Registra, controla, y disfruta de la salud de tus mascotas con
                  Pet+. Mantén al día sus vacunas, peso, citas y más. Todo en un
                  solo lugar, su bienestar merece la mejor atención.
                </p>

                <div className="btn-group gap-3">
                  <button
                    className="button btn text-white rounded-3"
                    type="button"
                    onClick={'handelInvitado'}
                  >
                    Explorar como invitado
                  </button>
                  <Link
                    to="/login"
                    className="btn btn-light text-black rounded-3"
                    type="button"
                  >
                    Iniciar sesión
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="hero-image">
                  <img
                    className="img-fluid hero-image"
                    src={'rigoImageUrl'}
                    alt="Picture of pets"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divider-section">
        <div>
          <i className="fas fa-dog"></i>
          <p>Perros</p>
        </div>
        <div>
          <i className="fas fa-cat"></i>
          <p>Gatos</p>
        </div>
        <div>
          <i className="fas fa-dove"></i>
          <p>Aves</p>
        </div>
        <div>
          <i className="fas fa-paw"></i>
          <p>Otras mascotas</p>
        </div>
      </div>

      <div className="container my-4">
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <h2 className="mb-3">¿Eres dueño de una o varias mascotas?</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 text-center mb-2 ">
            <p>Inicia sesión y podrás...</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img
                src={'exampleOneImgUrl'}
                className="card-img-top img-example"
                alt="Imagen 1"
              />
              <div className="card-body">
                <p className="card-text">
                  🐾 Ingresar tantas mascotas como gustes.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={'exampleTwoImgUrl'}
                className="card-img-top img-example"
                alt="Imagen 2"
              />
              <div className="card-body">
                <p className="card-text">
                  📓 Llevar un control separado de cada una de ellas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div
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
                  src={testimonio.foto}
                  className="rounded-circle"
                  style={{ width: '30%', maxWidth: '100px' }}
                  alt={`Foto de ${testimonio.nombre}`}
                />
                <div className="mt-3 text-center testimonios-name">
                  <h5>{testimonio.nombre}</h5>
                  <p>{testimonio.pais}</p>
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
                <p className="text-center testimonios-text">
                  <span style={{ fontSize: '1.7rem', padding: '0.1rem' }}>
                    "
                  </span>
                  {testimonio.testimonio.slice(
                    1,
                    testimonio.testimonio.length - 1
                  )}
                  <span style={{ fontSize: '1.7rem', padding: '0.1rem' }}>
                    "
                  </span>
                </p>
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
      </div> */}

      <div className="container my-5">
        <div className="row align-items-center">
          <div className="col-lg-12 text-center">
            <h2 className="mb-3">¿Eres veterinario?</h2>
          </div>
        </div>
        <div className="row align-items-center">
          <div className="col-lg-12 text-center mb-2 ">
            <p>Como veterinario, puedes...</p>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card">
              <img src={'docImgUrl'} className="card-img-top" alt="Imagen 1" />
              <div className="card-body">
                <p className="card-text">
                  <i className="fas fa-book-medical"></i> Registrar a tus
                  pacientes y llevar un control de su historial clínico.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src={'docsImgUrl'} className="card-img-top" alt="Imagen 2" />
              <div className="card-body">
                <p className="card-text">
                  <i className="far fa-calendar-alt icon-docs"></i> Programar
                  recordatorios para las citas de tus pacientes.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img
                src={'docCatImgUrl'}
                className="card-img-top"
                alt="Imagen 3"
              />
              <div className="card-body">
                <p className="card-text">★ Y mucho más...</p>
              </div>
            </div>
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
      </div>
    </div>
  );
};
