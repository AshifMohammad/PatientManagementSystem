import React, { Component, Fragment } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import ToolkitProvider, {
  Search,
  CSVExport
} from "react-bootstrap-table2-toolkit";

import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "./style.less";

class AdvanceCustomGrid extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { SearchBar, ClearSearchButton } = Search;
    const { ExportCSVButton } = CSVExport;
    const { showGlobalSearch } = this.props;
    const rowEvents = {
      onClick: (e, row, rowIndex) => {
        // console.log(e, row, rowIndex);
      }
    };
    return (
      <div className="custom-table-grid col-sm-12 ">
        <ToolkitProvider
          keyField="id"
          data={this.props.data}
          columns={this.props.columns}
          showGlobalSearch={showGlobalSearch}
          search
        >
          {props => {
            const isRecordsAvailable = props.baseProps.data.length >= 1;
            //hiding default
            const showGlobalSearch = false;
            return (
              <Fragment>
                <div className={"global-table-search"}>
                  <SearchBar
                    {...props.searchProps}
                    placeholder="Search by Company name Or Mobile # etc"
                  />
                  <div className="btn-sm ">
                    <ClearSearchButton {...props.searchProps} />
                  </div>
                </div>
                <BootstrapTable
                  {...props.baseProps}
                  bootstrap4
                  hover
                  keyField="id"
                  data={this.props.data}
                  columns={this.props.columns}
                  filter={filterFactory()}
                  defaultSorted={this.props.defaultSorted}
                  pagination={isRecordsAvailable && paginationFactory()}
                  rowEvents={rowEvents}
                />
              </Fragment>
            );
          }}
        </ToolkitProvider>
      </div>
    );
  }
}

export default AdvanceCustomGrid;
