import React, { FC } from "react";
import { Button, Modal } from "react-bootstrap";

interface ComponentProps {
  onCancel: () => void;
  onConfirm: () => void;
}

const NavigationConfirmModal: FC<ComponentProps> = ({
  onCancel,
  onConfirm,
}) => {
  return (
    <Modal show={true} onHide={onCancel}>
      <Modal.Header closeButton>
        <Modal.Title>Confirm Navigate</Modal.Title>
      </Modal.Header>
      <Modal.Body>Are you sure you want to navigate?</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onCancel}>
          Cancel
        </Button>
        <Button variant="primary" onClick={onConfirm}>
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default NavigationConfirmModal;
