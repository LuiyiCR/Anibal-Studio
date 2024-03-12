import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { useNaigate, Link } from 'react-router-dom';
import { WhatsAppButton } from '../component/WhatsAppButton.jsx';

const Login = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    document.body.className = store.theme;
  }, [store.theme]);

  return (
    <div className="container-fluid div-signup d-flex align-items-center flex-column background-container-forms h-100">
      {'errorMessage' && (
        <div className="alert alert-danger error-message" role="alert">
          {'errorMessage'}
        </div>
      )}

      <div className="signup-header mb-3">
        <img src={'logo'} />
        <h2 className="mt-3">Iniciar Sesión</h2>
      </div>

      <form className="contenedor-form mb-5 h-100">
        <div className="mb-3 d-flex justify-content-center flex-column align-items-center">
          <div className="div-input-interno">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Correo Electrónico
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              autoComplete="off"
              value={'email'}
              onChange={'setEmailValue'}
              placeholder="email@email.com"
            />
          </div>
        </div>
        <div className="mb-4 d-flex justify-content-center flex-column align-items-center">
          <div className="div-input-interno">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Contraseña
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete="off"
              value={'password'}
              onChange={'setPasswordValue'}
              placeholder="*******"
            />
          </div>
        </div>

        <button
          type="submit"
          className="btn btn-primary boton-signup"
          onClick={'submitHandler'}
        >
          Iniciar Sesión
        </button>
      </form>

      <div className="question-mark">
        <div>
          ¿Aún no tienes cuenta? <Link to={'/signup'}>¡Regístrate!</Link>
        </div>
      </div>
      <WhatsAppButton
        handleOpenWhatsApp={actions.handleOpenWhatsApp}
        showModal={store.showModal}
        handleCloseWhatsApp={actions.handleCloseWhatsApp}
        handleConfirmWhatsApp={actions.handleConfirmWhatsApp}
      />
    </div>
  );
};

export default Login;
