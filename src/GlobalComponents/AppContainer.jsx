import React, { useEffect, useState } from "react";
import { GlobalHeader, SideBar } from "@/GlobalComponents/index";
import { accountService } from "@/_services";
import "bootstrap/dist/css/bootstrap.css";
import "./style.less";

export default function AppContainer({
  children,
  sideBarItemList,
  permissions
}) {
  const [user, setUser] = useState({});

  useEffect(() => {
    const subscription = accountService.user.subscribe(x => setUser(x));
    return subscription.unsubscribe;
  }, []);

  // only show nav when logged in
  // user is an object with permissions
  if (!user) return null;
  return (
    <div className="container-fluid main-app-container">
      <div id="main-wrapper">
        <GlobalHeader permissions={permissions} />
        <SideBar sideBarItemList={sideBarItemList} />
        <div className="page-wrapper">
          <div className="content container-fluid">{children}</div>
        </div>
      </div>
    </div>
  );
}
