import React, { useState, useEffect, useContext } from 'react';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const { store, actions } = useContext(Context);

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    document.body.className = store.theme;
  }, [store.theme]);

  return (
    <div className="container div-signup mt-5 mb-5 d-flex align-items-center flex-column background-container-forms h-100">
      <div className="signup-header mb-2">
        <h2 className="mt-3">
          Registro
          <i className="fas fa-sign-in-alt"></i>
        </h2>
      </div>
      <form onSubmit={handleSubmit} className="container-form">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            value={name}
            placeholder="Nombre:"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="floatingName" className="form-label text-muted">
            Nombre: <span className="text-danger">* </span>
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingLastName"
            value={lastName}
            placeholder="Apellido"
            onChange={(e) => setLastName(e.target.value)}
            required
          />
          <label htmlFor="floatingLastName" className="form-label text-muted">
            Apellido: <span className="text-danger">* </span>
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="tel"
            className="form-control"
            id="floatingPhone"
            value={phone}
            placeholder="Teléfono"
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          <label htmlFor="floatingPhone" className="form-label text-muted">
            Teléfono: (Opcional)
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingEmail"
            value={email}
            placeholder="Correo Electrónico"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label htmlFor="floatingEmail" className="form-label text-muted">
            Correo Electrónico: <span className="text-danger">* </span>
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            value={password}
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="floatingPassword" className="form-label text-muted">
            Contraseña: <span className="text-danger">* </span>
          </label>
        </div>
        <div className="form-floating mb-3">
          <input
            type="password"
            className="form-control"
            id="floatingConfirmPassword"
            value={password}
            placeholder="Confirmar contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label
            htmlFor="floatingConfirmPassword"
            className="form-label text-muted"
          >
            Confirmar contraseña: <span className="text-danger">* </span>
          </label>
        </div>
        <p className="text-danger">* Campos requeridos</p>
        <div className="already-user d-flex justify-content-center">
          <div>
            ¿Ya tienes cuenta? <Link to={'/login'}>¡Inicia Sesión!</Link>
          </div>
        </div>

        <button
          type="submit"
          className="btn button-primary rounded-1 w-100 mt-5"
        >
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default SignUp;
