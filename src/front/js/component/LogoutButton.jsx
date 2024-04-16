import React, { useState, useContext } from 'react';
import { auth } from '../../../firebase.js';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';

const LogoutButton = () => {
  const { actions } = useContext(Context);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogout = async () => {
    if (window.confirm('¿Deseas cerrar sesión?')) {
      try {
        await auth.signOut();
        actions.clearUser();
        navigate('/');
      } catch (error) {
        setError('¡Error al cerrar sesión!');
      }
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>¡Cerrar Sesión!</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default LogoutButton;
