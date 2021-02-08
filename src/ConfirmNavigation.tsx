import React, { FC, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Prompt, useHistory } from "react-router-dom";

const ConfirmNavigation: FC = ({ children }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();
  const [nextLocation, setNextLocation] = useState<string | null>(null);

  const handleCancel = () => {
    setShow(false);
    setNextLocation(null);
  };

  const handleConfirm = () => {
    setShow(false);
    if (nextLocation) {
      history.push(nextLocation);
      setNextLocation(null);
    }
  };

  const handleBlockedNavigation = (location: any) => {
    setNextLocation(location);
    setShow(true);
    return false;
  };

  return (
    <>
      <Prompt when={!nextLocation} message={handleBlockedNavigation} />
      <Modal show={show} onHide={handleCancel}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Navigate</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to navigate?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
      {children}
    </>
  );
};
export default ConfirmNavigation;
