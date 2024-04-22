import React, { useState, useContext } from 'react';
import { auth } from '../../../firebase.js';
import { Context } from '../store/appContext';
import { useNavigate } from 'react-router-dom';
import { Button, Modal } from 'react-bootstrap';

const LogoutButton = () => {
  const { actions } = useContext(Context);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      actions.clearUser();
      console.log('Logout successful');
      navigate('/');
    } catch (error) {
      console.error(error);
      setError('¡Error al cerrar sesión!');
    }
  };

  return (
    <div>
      <Button onClick={() => setShowModal(true)}>¡Cerrar Sesión!</Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirmación</Modal.Title>
        </Modal.Header>
        <Modal.Body>¿Deseas cerrar sesión?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={handleLogout}>
            Confirmar
          </Button>
        </Modal.Footer>
      </Modal>

      {error && (
        <div className="d-flex justify-content-center">
          <p className="alert alert-danger text-center">{error}</p>
        </div>
      )}
    </div>
  );
};

export default LogoutButton;
