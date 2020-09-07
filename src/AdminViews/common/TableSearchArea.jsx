import React from "react";
import { roles, companies } from "@/_services/mockData/mockData";

export default function TableSearchArea({ name, company }) {
  return (
    <div>
      <div className="row d-flex pl-2">
        <h4>Search Filters</h4>
      </div>
      <div className="row filter-row">
        <div className="col-sm-6 col-md-3">
          <div className="form-group form-focus">
            <label className="focus-label">Name</label>
            <input type="text" className="form-control floating" />
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <label className="focus-label">Company</label>
          <div className="form-group form-focus select-focus width-auto">
            <select className="select floating ">
              {companies &&
                companies.map((company, index) => {
                  return <option key={index}>{company.companyName}</option>;
                })}
            </select>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <label className="focus-label">Role</label>
          <div className="form-group form-focus select-focus">
            <select className="select floating">
              {roles &&
                roles.map((role) => {
                  return <option key={role.permission}>{role.roleName}</option>;
                })}
            </select>
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <button href="#" className="btn btn-success btn-block">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
