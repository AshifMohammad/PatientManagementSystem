import React, { useState } from "react";
import { TableHeader } from "@/AdminViews/common/index";
import { Constants } from "@/Constants";

export default function Table({
  data,
  title,
  pathName,
  buttonName,
  modalTitle,
}) {
  return (
    <div>
      <TableHeader
        pathName={`/${pathName}`}
        title={title}
        buttonName={buttonName}
        modalTitle={modalTitle}
      />
      <div className="table-responsive">
        <table className="table table-striped custom-table datatable">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Created Date</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.name}</td>
                    <td>{user.emailAddress}</td>
                    <td>{user.company}</td>
                    <td>{user.createdAt}</td>
                    <td>
                      <span className="badge bg-inverse-danger ">
                        {user.role}
                      </span>
                    </td>
                    <td>
                      <span className="badge bg-inverse-danger ">
                        <a onClick={() => console.log(index)}>Edit/View</a>
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
