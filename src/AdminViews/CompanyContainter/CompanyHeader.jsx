import React from "react";

export default function CompanyHeader({ handleAddCompanyModal }) {
  return (
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title mb-2">Company</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item font-weight-bold ">
              <a>Dashboard</a>
            </li>
            <li className="breadcrumb-item active">Company</li>
          </ul>
        </div>
        <div className="col-auto float-right ml-auto">
          <a
            className="btn add-btn btn-success"
            data-toggle="modal"
            data-target="#add_company"
            onClick={() => handleAddCompanyModal()}
          >
            <i className="fa fa-plus"></i> Add Company
          </a>
        </div>
      </div>
    </div>
  );
}
