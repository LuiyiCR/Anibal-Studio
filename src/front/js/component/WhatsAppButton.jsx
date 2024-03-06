import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../../styles/WhatsAppButton.css';

export const WhatsAppButton = ({
  handleOpenWhatsApp,
  showModal,
  handleCloseWhatsApp,
  handleConfirmWhatsApp,
}) => {
  return (
    <React.Fragment>
      <button className="whatsapp-button" onClick={handleOpenWhatsApp}>
        <i className="fab fa-whatsapp"></i>
      </button>

      <Modal show={showModal} onHide={handleCloseWhatsApp}>
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
          <Button variant="secondary" onClick={handleCloseWhatsApp}>
            ¡No!
          </Button>
          <Button
            className="yes-btn"
            variant="primary"
            onClick={handleConfirmWhatsApp}
          >
            ¡Sí!
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};
