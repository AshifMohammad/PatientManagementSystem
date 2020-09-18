import React, { Fragment } from "react";

export default function CompanySearchBox({
  handleSearch,
  handleClear,
  onCompanySearchChange,
  onEmailSearchChange,
  companySearchValue
}) {
  return (
    <div className="company-search-box">
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3">
          <div className="form-group ">
            <label className="focus-label font-weight-bold">Company Name</label>
            <input
              value={companySearchValue}
              type="text"
              placeholder="Enter company to search"
              className="form-control floating"
              onChange={e => {
                onCompanySearchChange(e);
              }}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="form-group  select-focus">
            <label className="focus-label font-weight-bold">Role</label>
            <select className="custom-select custom-select-lg mb-3">
              <option value={"admin"}>Admin</option>
              <option value={"client"}>Client</option>
              <option value={"employee"}>Employee</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="form-group ">
            <label className="focus-label font-weight-bold">
              Company Email
            </label>
            <input
              placeholder="Enter email to search"
              type="text"
              className="form-control floating"
              onChange={e => {
                onEmailSearchChange(e);
              }}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-3 d-flex justify-content-center">
          <div className="form-group ">
            <label className="focus-label font-weight-bold" />
            <a
              onClick={() => {
                handleClear();
              }}
              className="btn btn-success btn-block"
            >
              Clear
            </a>
          </div>
          <div className="mr-1 ml-1" />
          <div className="form-group ">
            <label className="focus-label font-weight-bold" />
            <a
              onClick={() => {
                handleSearch();
              }}
              className="btn btn-success btn-block"
            >
              Search
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
