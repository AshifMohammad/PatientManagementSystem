import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AddUserFields } from "@/AdminViews/common/AddUserFields";
import { userValues } from "@/_services/mockData/mockData";

export default function AddModal({ show, handleOnClose }) {
  // const onSubmit = () =>

  const handleOnSave = user => {
    setTimeout(() => {
      alert(`posting to api...with payload`);
      handleOnClose();
    }, 1500);
  };
  return (
    <div>
      <Modal size="sl" show={show} onHide={handleOnClose}>
        <Modal.Header closeButton />
        <Modal.Body>
          <AddUserFields userValues={userValues} onSubmit={handleOnSave} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleOnClose}>Close</Button>
          <Button onClick={handleOnSave}>save</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
