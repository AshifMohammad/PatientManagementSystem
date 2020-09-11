import React from "react";
import { TextField } from "@/AdminViews/common/TextField";

import get from "lodash/get";

export default function AddCompanyModalBody(props) {
  const { rowData } = props;
  return (
    <form>
      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <TextField
              id="company-name"
              name="company-name"
              value={get(rowData, "companyName", "")}
              onChange={() => {}}
              label={"Company Name"}
              isRequired
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <TextField
              id="company-admin-name"
              name="company-admin-name"
              label={"Company Admin"}
              value={get(rowData, "companyAdmin", "")}
              onChange={() => {}}
              isRequired
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <TextField
              id="company-admin-phone"
              name="company-admin-phone"
              label={"Primary Phone"}
              value={get(rowData, "primaryContactCellNo", "")}
              onChange={() => {}}
              isRequired
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <TextField
              id="company-url"
              label={"Company Url"}
              value={`company/${get(rowData, "companyUrl", "")}`}
              onChange={() => {}}
              isRequired
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <TextField
              id="company-admin-email"
              name={"company-admin-email"}
              label={"Email"}
              value={get(rowData, "email", "")}
              onChange={() => {}}
              isRequired
            />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Role</label>
            <select className="custom-select custom-select-lg mb-3">
              <option value={"admin"}>Admin</option>
              <option value={"client"}>Client</option>
              <option value={"employee"}>Employee</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Company</label>
            <select className="custom-select custom-select-lg mb-3">
              <option value={"GlobalTechnologies"}>Global Technologies</option>
              <option value={"DeltaInfotech"}>Delta Infotech</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>
              Employee ID <span className="text-danger">*</span>
            </label>
            <input type="text" className="form-control floating" />
          </div>
        </div>
      </div>
      <div className="table-responsive m-t-15">
        <table className="table table-striped custom-table">
          <thead>
            <tr>
              <th>Module Permission</th>
              <th className="text-center">Read</th>
              <th className="text-center">Write</th>
              <th className="text-center">Create</th>
              <th className="text-center">Delete</th>
              <th className="text-center">Import</th>
              <th className="text-center">Export</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Employee</td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>Holidays</td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>Leaves</td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
            </tr>
            <tr>
              <td>Events</td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
              <td className="text-center">
                <input checked="" type="checkbox" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </form>
  );
}
