import React from "react";

export default function AdminViewHeader({ title, pathName }) {
  console.log(pathName);
  return (
    <div className="page-header">
      <div className="row align-items-center">
        <div className="col">
          <h3 className="page-title">{title}</h3>
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a href={pathName}>Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="col-auto float-right ml-auto">
          {/*<a*/}
          {/*  href="#"*/}
          {/*  className="btn add-btn"*/}
          {/*  data-toggle="modal"*/}
          {/*  data-target="#add_user"*/}
          {/*>*/}
          {/*  <i className="fa fa-plus"></i> Add User*/}
          {/*</a>*/}
        </div>
      </div>
    </div>
  );
}
