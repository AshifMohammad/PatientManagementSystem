import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";

const columns = [
  {
    dataField: "id",
    text: "Product ID",
    sort: true
  },
  {
    dataField: "name",
    text: "Product Name",
    sort: true
  },
  {
    dataField: "price",
    text: "Product Price",
    sort: true
  }
];

const products = [
  {
    id: 1,
    text: "ABC Product"
  },
  {
    id: 2,
    text: "BC Product"
  },
  {
    id: 3,
    text: "C Product"
  },
  {
    id: 4,
    text: "D Product"
  },
  {
    id: 5,
    text: "EFG Product"
  },
  {
    id: 6,
    text: "EFG Product"
  },
  {
    id: 7,
    text: "EFG Product"
  },
  {
    id: 8,
    text: "EFG Product"
  }
];

const defaultSorted = [
  {
    dataField: "name",
    order: "desc"
  }
];

export default function DataTable() {
  return (
    <BootstrapTable
      bootstrap4
      keyField="id"
      data={products}
      columns={columns}
      defaultSorted={defaultSorted}
    />
  );
}
