import React, { Component } from "react";
import { Modal, ModalDialog } from "react-bootstrap";
import { AddUserFields } from "@/AdminViews/common/AddUserFields";
import { userValues } from "@/_services/mockData";
import Button from "react-bootstrap/Button";
import "./style.less";

class CompanyModalDialog extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      handleClose,
      show,
      modalTitle,
      modalBody,
      saveBtnLabel,
      rowData
    } = this.props;
    const ModalBody = modalBody;
    return (
      <Modal className="w-100 modal-wrapper" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <div className="p-1 font-weight-bold">
            <Modal.Title>{modalTitle}</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className={"modal-body"}>
          <ModalBody rowData={rowData} {...this.props} />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
          <Button onClick={() => {}}>{saveBtnLabel}</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export { CompanyModalDialog };
