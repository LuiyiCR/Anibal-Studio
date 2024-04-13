import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/appContext';
import InputMask from 'react-input-mask';
import { set } from 'firebase/database';

const SignUp = () => {
  const { store, actions } = useContext(Context);
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('¡Las contraseñas no coinciden!');
    }

    if (!isValidEmail(email)) {
      return setError('¡El correo electrónico no es válido!');
    }

    if (password.length < 6) {
      return setError('¡La contraseña debe tener al menos 6 caracteres!');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password);
      setLoading(false);
      setSuccess('¡Tu usuario se ha registrado exitosamente!');
      setTimeout(() => {
        navigate('/products');
      }, 3000);
    } catch (error) {
      console.error(error);
      setError('¡Error al crear la cuenta!');
      setSuccess('');
      setLoading(false);
    }
  };

  useEffect(() => {
    document.body.className = store.theme;
  }, [store.theme]);

  return (
    <div className="container div-signup mt-5 mb-5 d-flex align-items-center flex-column background-container-forms h-100">
      {loading && (
        <React.Fragment>
          <div className="spinner-border text-primary" role="status"></div>
          <span className="text-primary">¡Registrando tu cuenta...!</span>
        </React.Fragment>
      )}
      {success && <div className="alert alert-success">{success}</div>}
      <div className="signup-header mb-2">
        <h2 className="mt-3">
          Registro
          <i className="fas fa-sign-in-alt"></i>
        </h2>
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
      <form onSubmit={handleSubmit} className="container-form">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="floatingName"
            value={name}
            placeholder="Nombre:"
            onChange={(e) => setName(e.target.value.toUpperCase())}
            onKeyPress={(e) => {
              if (!/[a-zA-Z\s]/.test(e.key)) {
                e.preventDefault();
              }
            }}
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
            onChange={(e) => setLastName(e.target.value.toUpperCase())}
            onKeyPress={(e) => {
              if (!/[a-zA-Z\s]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            required
          />
          <label htmlFor="floatingLastName" className="form-label text-muted">
            Apellido: <span className="text-danger">* </span>
          </label>
        </div>
        <div className="form-floating mb-3">
          <InputMask
            mask="(506) 9999-9999"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          >
            {(inputProps) => (
              <input
                {...inputProps}
                type="tel"
                className="form-control"
                id="floatingPhone"
                placeholder="Teléfono"
              />
            )}
          </InputMask>
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
            onChange={(e) => {
              setEmail(e.target.value.toLowerCase());
              setError('');
            }}
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
            onChange={(e) => {
              setPassword(e.target.value);
              setError('');
            }}
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
            value={confirmPassword}
            placeholder="Confirmar contraseña"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
              setError('');
            }}
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
          disabled={loading}
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
