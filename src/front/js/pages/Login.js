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
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setErrorMessage('Por favor, ingrese un correo electrónico válido');
    } else if (password.length < 6) {
      setErrorMessage('La contraseña debe tener al menos 6 caracteres');
    } else {
      setErrorMessage('');
      setLoading(true);

      const serverResponse = await mockLoginRequest(email, password);

      setLoading(false);

      if (serverResponse.success) {
        console.log('Login successful');
        navigate('/productos');
      } else {
        setErrorMessage(serverResponse.message);
      }
    }
  };

  const mockLoginRequest = (email, password) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (email === 'test@test.com' && password === 'password') {
          resolve({ success: true });
        } else {
          resolve({
            success: false,
            message: 'Usuario o contraseña incorrectos',
          });
        }
      }, 1000);
    });
  };

  useEffect(() => {
    document.body.className = store.theme;
  }, [store.theme]);

  return (
    <div className="container div-signup mt-5 mb-5 d-flex align-items-center flex-column background-container-forms h-100">
      <div>
        {loading ? (
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Iniciando Sesión...</span>
          </div>
        ) : (
          errorMessage && (
            <div className="alert alert-danger error-message" role="alert">
              {errorMessage}
            </div>
          )
        )}
      </div>
      <div className="signup-header mb-2">
        <h2 className="mt-3">
          Iniciar Sesión
          <i className="fas fa-sign-in-alt"></i>
        </h2>
      </div>
      {!loading && (
        <form className="container-form mb-5" onSubmit={submitHandler}>
          <div className="d-flex justify-content-center flex-column align-items-center">
            <div className="form-floating div-input-interno w-100 mb-4">
              <input
                type="email"
                className="form-control"
                id="floatingMail"
                aria-describedby="emailHelp"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrorMessage('');
                }}
                required
                placeholder="Correo Electrónico"
              />
              <label htmlFor="floatingMail" className="form-label">
                Correo Electrónico:
              </label>
            </div>
          </div>
          <div className="mb-4 d-flex justify-content-center flex-column align-items-center">
            <div className="form-floating div-input-interno w-100">
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                placeholder="Contraseña"
              />
              <label htmlFor="floatingPassword" className="form-label">
                Contraseña:
              </label>
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
      )}
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
