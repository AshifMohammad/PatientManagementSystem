import React, { Fragment, useEffect, useState } from "react";
import { AdminViewContainer } from "@/AdminViews";
import { UserData } from "@/_services/mockData/mockData";
import { AppContainer } from "@/GlobalComponents";
import { Table } from "@/AdminViews/common";
import "./style.less";

export function UserManagement() {
  const [userData, setUserData] = useState();
  useEffect(() => {
    //fetch user data from api
    setUserData(UserData);
  }, []);

  return (
    <AppContainer>
      <AdminViewContainer isActive />
      <Table
        data={UserData}
        title={"User Management"}
        pathName={"user-management"}
        buttonName={"Add User"}
        modalTitle="Add User"
      />
    </AppContainer>
  );
}
