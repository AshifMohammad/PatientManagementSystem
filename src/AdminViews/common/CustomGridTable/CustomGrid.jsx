import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import paginationFactory from "react-bootstrap-table2-paginator";
import "./style.less";

class CustomGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        console.log(e, row, rowIndex);
      }
    };
    return (
      <div className="custom-table-grid">
        <BootstrapTable
          bootstrap4
          hover
          keyField="id"
          data={this.props.data}
          columns={this.props.columns}
          filter={filterFactory()}
          defaultSorted={this.props.defaultSorted}
          pagination={paginationFactory()}
          rowEvents={rowEvents}
        />
      </div>
    );
  }
}

export default CustomGrid;
