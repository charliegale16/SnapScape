import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Popup.css'

const Popup = ({show,handleClose}) => {


  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Creating New Canvas Session</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Press Create New Canvas Session
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Popup