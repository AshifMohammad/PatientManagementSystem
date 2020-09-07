import React, { useState, Fragment, useEffect } from "react";
import classNames from "classnames";
import { createBrowserHistory } from "history";
import { withRouter } from "react-router-dom";
import { AdminViewHeader } from "@/AdminViews/index";
import { Constants } from "@/Constants";
import { accountService } from "@/_services";

function AdminViewContainer({ history }) {
  const [activeTab, setTabActive] = useState("user");
  const [pathName, setPathName] = useState(Constants.USER_MANAGEMENT);
  const [title, setTitle] = useState("");
  const [user, setUser] = useState({});

  const withRefresh = createBrowserHistory({ forceRefresh: true });
  const handleClick = (_, tabName, pathname, tabTitle) => {
    setTimeout(() => {
      setTabActive(tabName);
    }, 2000);
    setPathName(pathname);
    setTitle(tabTitle);
    withRefresh.push({ pathname });
  };

  useEffect(() => {
    setPathName(pathName);
  }, [pathName]);

  useEffect(() => {
    const subscription = accountService.user.subscribe(x => setUser(x));
    return subscription.unsubscribe;
  }, []);

  // only show nav when logged in
  if (!user) return null;
  return (
    <div className="content container-fluid">
      <nav className="nav nav-pills nav-justified">
        <a
          className={classNames(
            "nav-item nav-link",
            activeTab === "user" && "active"
          )}
          href={Constants.USER_MANAGEMENT}
          name="user-management"
          onClick={e =>
            handleClick(e, "user", Constants.USER_MANAGEMENT, "User Management")
          }
        >
          User Management
        </a>
        <a
          className={classNames(
            "nav-item nav-link",
            activeTab === "customer" && "active"
          )}
          href={Constants.CUSTOMER_MANAGEMENT}
          onClick={e =>
            handleClick(
              e,
              "customer",
              Constants.CUSTOMER_MANAGEMENT,
              "Customer Management"
            )
          }
        >
          Customer Management
        </a>
        <a
          href={Constants.ROLE_MANAGEMENT}
          className={classNames(
            "nav-item nav-link",
            activeTab === "role" && "active"
          )}
          onClick={e =>
            handleClick(e, "role", Constants.ROLE_MANAGEMENT, "Role Management")
          }
        >
          Role Management
        </a>
      </nav>
    </div>
  );
}

export default withRouter(AdminViewContainer);
