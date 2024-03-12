import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Modal, Button } from 'react-bootstrap';
import '../../styles/WhatsAppButton.css';

export const WhatsAppButton = () => {
  const { store, actions } = useContext(Context);

  return (
    <React.Fragment>
      <button className="whatsapp-button" onClick={actions.handleOpenWhatsApp}>
        <i className="fab fa-whatsapp"></i>
      </button>

      <Modal show={store.showModal} onHide={actions.handleCloseWhatsApp}>
        <Modal.Header closeButton>
          <Modal.Title>¡Confirmación! 💬</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="whatsapp-text">
            ¿Deseas dejar esta página para ponerte en contacto con nosotros vía
            WhatsApp? 📲
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={actions.handleCloseWhatsApp}>
            ¡No!
          </Button>
          <Button
            className="yes-btn"
            variant="primary"
            onClick={actions.handleConfirmWhatsApp}
          >
            ¡Sí!
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
