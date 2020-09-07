import { Dropdown } from "react-bootstrap";

import React from "react";

export const columns = editCompanyFormatter => [
  {
    dataField: "id",
    text: "Company ID",
    sort: true,
    headerStyle: (_, colIndex) => {
      return { width: "10rem" };
    }
  },
  {
    dataField: "companyName",
    text: "Company Name",

    sort: true
  },
  {
    dataField: "email",
    text: "Company Email",
    sort: true
  },
  {
    dataField: "companyAdmin",
    text: "Company Admin",
    sort: true
  },
  {
    dataField: "primaryContactCellNo",
    text: "Mobile #",
    sort: true
  },
  {
    dataFieldId: "",
    text: "Action",
    align: "center",
    headerStyle: (_, colIndex) => {
      return { width: "8rem", textAlign: "center" };
    },
    sort: false,
    formatter: editCompanyFormatter,
    events: {}
  }
];

// function editCompanyFormatter(
//   cell,
//   row,
//   rowIndex,
//   formatExtraData,
//   handleOnEdit,
//   handleOnRedirect
// ) {
//   // const handleOnEdit = () => {
//   //   console.log(rowIndex);
//   // };
//   // const handleOnRedirect = () => {
//   //   console.log(rowIndex);
//   // };
//
//   return (
//     <Dropdown>
//       <Dropdown.Toggle>
//         <div className="threedots">. . .</div>
//       </Dropdown.Toggle>
//       <Dropdown.Menu size="sm" title="">
//         <a onClick={handleOnEdit} className="dropdown-item" role="button">
//           Edit
//         </a>
//         <a onClick={handleOnRedirect} className="dropdown-item" role="button">
//           Redirect to Company
//         </a>
//       </Dropdown.Menu>
//     </Dropdown>
//   );
// }

export const defaultSorted = [
  {
    dataField: "name",
    order: "desc"
  }
];
