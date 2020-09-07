import React, { useEffect, useState } from "react"
import { Dropdown, Accordion, Button, Card } from "react-bootstrap"

import { AdvanceCustomGrid } from "@/AdminViews/common/CustomGridTable"
import { companies } from "@/_services/mockData/companiesRecords"
import { columns, defaultSorted } from "./columnsDefs"
import { CompanyModalDialog } from "@/AdminViews/common/ModalDialog"
import AddCompanyModalBody from "./AddCompanyModalBody"
import {
  CompanyHeader,
  CompanySearchBox
} from "@/AdminViews/CompanyContainter/index"
import { RecordsNotFoundPage } from "@/AdminViews/common/Pages"

import "./style.less"

export default function CompanyDetails({ companies }) {
  const [adminCompanies, setCompanies] = useState(companies)
  const [companySearchValue, setCompanySearchValue] = useState("")
  const [showAddCompanyDialog, setShowAddCompanyDialog] = useState(false)
  const [showUpdateCompanyModal, setShowUpdateCompanyModal] = useState(false)
  const [companyRowData, setCompanyRowData] = useState({})

  useEffect(
    () => {
      setCompanies(adminCompanies)
    },
    [adminCompanies]
  )

  const selectRow = {
    mode: "radio",
    clickToSelect: true
  }

  const handleAddCompanyModal = () => {
    setShowAddCompanyDialog(true)
  }

  const onRowClick = (e, row, rowIndex) => {
    console.log(row, "on row click")
  }
  const onCompanySearchChange = ({ target: { value } }) =>
    setCompanySearchValue(value)

  const onEmailSearchChange = e => {
    console.log(e, "email changes")
  }

  const handleSearchClick = () => {
    alert("making api call and returning companies to populate the table")
    const searchResult = adminCompanies.filter(
      company => company.name === companySearchValue
    )
    setCompanies(searchResult)
  }
  const handleClearClick = () => {
    setCompanySearchValue("")
    setCompanies(companies && companies)
  }

  const handleOnEdit = (cell, row, rowIndex) => {
    setShowUpdateCompanyModal(true)
    setCompanyRowData(row)
  }

  const handleOnRedirect = (cell, row, rowIndex) => {
    window.open(`/company-management/${row.companyUrl}`)
  }
  const isRecordFound = adminCompanies.length >= 1

  const editCompanyFormatter = (cell, row, rowIndex) => {
    return (
      <Dropdown>
        <Dropdown.Toggle>
          <div className="threedots">. . .</div>
        </Dropdown.Toggle>
        <Dropdown.Menu size="sm" title="">
          <a
            onClick={() => handleOnEdit(cell, row, rowIndex)}
            className="dropdown-item"
            role="button"
          >
            Edit
          </a>
          <a
            onClick={() => handleOnRedirect(cell, row, rowIndex)}
            className="dropdown-item"
            role="button"
          >
            Redirect to Company
          </a>
        </Dropdown.Menu>
      </Dropdown>
    )
  }

  return (
    <div className="company-detail-wrapper">
      <Card>
        <Card>
          <Card.Body>
            <CompanyHeader handleAddCompanyModal={handleAddCompanyModal} />
          </Card.Body>
        </Card>

        <div className="according-filter">
          <Accordion className="pb-1">
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Advance Search
            </Accordion.Toggle>
            <Accordion.Collapse eventKey="0">
              <Card>
                <Card.Body>
                  <CompanySearchBox
                    handleClear={handleClearClick}
                    handleSearch={handleSearchClick}
                    onCompanySearchChange={onCompanySearchChange}
                    onEmailSearchChange={onEmailSearchChange}
                    companySearchValue={companySearchValue}
                  />
                </Card.Body>
              </Card>
            </Accordion.Collapse>
          </Accordion>
        </div>

        <Card className="col-sm-12 ">
          <Card.Body>
            <AdvanceCustomGrid
              data={adminCompanies}
              columns={columns(editCompanyFormatter)}
              defaultSorted={defaultSorted}
              selectRow={selectRow}
              showGlobalSearch={false}
            />
            {!isRecordFound && <RecordsNotFoundPage />}
          </Card.Body>
        </Card>
      </Card>
      {showAddCompanyDialog &&
        <CompanyModalDialog
          show={showAddCompanyDialog}
          handleClose={() => {
            setShowAddCompanyDialog(false)
          }}
          modalBody={AddCompanyModalBody}
          modalTitle={"Add Company"}
          saveBtnLabel="Save"
        />}
      {showUpdateCompanyModal &&
        <CompanyModalDialog
          show={showUpdateCompanyModal}
          handleClose={() => {
            setShowUpdateCompanyModal(false)
          }}
          modalBody={AddCompanyModalBody}
          modalTitle={"Update Company"}
          rowData={companyRowData}
          saveBtnLabel="Update"
        />}
    </div>
  )
}
