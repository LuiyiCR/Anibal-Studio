import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../../firebase.js';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const resetPassword = async (e) => {
    e.preventDefault();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailRegex.test(email)) {
      setMessage({
        type: 'danger',
        text: '¡Por favor, ingrese un correo electrónico válido!',
      });
      return;
    }

    setLoading(true);
    try {
      await auth.sendPasswordResetEmail(email);
      setMessage({
        type: 'success',
        text: 'Podés revisar tu correo para restablecer tu contraseña',
      });
      setTimeout(() => {
        navigate('/login');
      }, 6000);
    } catch (error) {
      setMessage({
        type: 'danger',
        text: 'Se produjo un error al intentar restablecer tu contraseña',
      });
    }
    setLoading(false);
  };

  return (
    <div className="container div-forgot-password mt-5 mb-5 d-flex align-items-center flex-column background-container-forms h-100">
      <div className="row">
        <div className="col-md-6 offset-md-3 mb-5 d-flex align-items-center flex-column">
          <h1>Restablecer contraseña</h1>
          {loading ? (
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">
                Restableciendo contraseña...
              </span>
            </div>
          ) : (
            <>
              {message && (
                <div className={`alert alert-${message.type}`} role="alert">
                  {message.text}
                </div>
              )}
              <form onSubmit={resetPassword}>
                <input
                  type="email"
                  className="form-control mb-3"
                  placeholder="Ingresa tu correo electrónico"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <button
                  className="btn button-primary rounded-1 w-100 mt-2 mb-4"
                  type="submit"
                >
                  Restablecer contraseña
                </button>
              </form>
            </>
          )}
          <Link to="/">¡Volver al Inicio!</Link>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
