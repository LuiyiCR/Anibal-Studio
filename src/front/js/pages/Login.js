import React, { useContext, useEffect, useState } from 'react';
import { Context } from '../store/appContext';
import { useNavigate, Link } from 'react-router-dom';
import { WhatsAppButton } from '../component/WhatsAppButton.jsx';
import '../../styles/Login.css';

const Login = () => {
  const { store, actions } = useContext(Context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, ingrese un correo electrónico válido');
    } else if (password.length < 6) {
      setErrorMessage('La contraseña debe tener al menos 6 caracteres');
    } else {
      setErrorMessage('');
      console.log('Email:', email);
      console.log('Password:', password);
    }
  };

  useEffect(() => {
    document.body.className = store.theme;
  }, [store.theme]);

  return (
    <div className="container div-signup d-flex align-items-center flex-column background-container-forms h-100">
      {errorMessage && (
        <div className="alert alert-danger error-message" role="alert">
          {errorMessage}
        </div>
      )}
      <div className="signup-header mb-2">
        <h2 className="mt-3">
          Iniciar Sesión
          <i className="fas fa-sign-in-alt"></i>
        </h2>
      </div>
      <form className="contenedor-form mb-5" onSubmit={submitHandler}>
        <div className="d-flex justify-content-center flex-column align-items-center">
          <div className="div-input-interno w-100">
            <label htmlFor="inputEmail" className="form-label"></label>
            <input
              type="email"
              className="form-control"
              id="inputEmail"
              aria-describedby="emailHelp"
              autoComplete="off"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setErrorMessage('');
              }}
              required
              placeholder="Correo Electrónico"
            />
          </div>
        </div>
        <div className="mb-4 d-flex justify-content-center flex-column align-items-center">
          <div className="div-input-interno w-100">
            <label htmlFor="inputPassword1" className="form-label"></label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Contraseña"
            />
          </div>
        </div>

        <div className="question-mark">
          <div>
            ¿Aún no tienes cuenta? <Link to={'/signup'}>¡Regístrate!</Link>
          </div>
        </div>

        <button
          type="submit"
          className="btn button-primary rounded-1 w-100 mt-5"
        >
          Iniciar Sesión
        </button>
      </form>
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
