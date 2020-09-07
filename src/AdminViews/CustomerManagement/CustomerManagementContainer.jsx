import React, { Fragment } from "react";
import { AdminViewContainer } from "@/AdminViews";
import { Table } from "@/AdminViews/common";
import { AppContainer } from "@/GlobalComponents";
import { UserData } from "@/_services/mockData/mockData";

export function CustomerManagement() {
  return (
    <AppContainer>
      <AdminViewContainer isActive />
      <Table
        data={UserData}
        title={"Customer Management"}
        pathName={"customer-management"}
      />
    </AppContainer>
  );
}
