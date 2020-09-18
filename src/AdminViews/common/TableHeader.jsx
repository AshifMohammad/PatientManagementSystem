import React, { useState } from "react";
import { AddModal, TableSearchArea } from "@/AdminViews/common/index";
import { roles } from "@/_services/mockData/mockData";

export default function TableHeader({
  pathName,
  title,
  buttonName,
  modalTitle
}) {
  const [showModal, setShowModal] = useState(false);
  const handleOnClick = () => {
    setShowModal(!showModal);
  };
  const handleOnClose = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="pt-4 pl-2 pb-2">
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col">
            <h3 className="page-title">{title}</h3>
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <a href={pathName}>{`Dashboard / ${title}`}</a>
              </li>
            </ul>
          </div>
          <div className="col-auto  align-item-center ml-auto btn-primary mt-4">
            <button
              className="btn add-btn"
              data-toggle="modal"
              data-target="#add_user"
              onClick={handleOnClick}
            >
              <i className="fa fa-plus"></i> {buttonName}
            </button>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <TableSearchArea />
      </div>
      <AddModal
        show={showModal}
        handleOnClose={handleOnClose}
        modalTitle={modalTitle}
      />
    </div>
  );
}
