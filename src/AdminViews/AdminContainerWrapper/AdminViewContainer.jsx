import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import { PrivateRoute } from "@/_components";
import { NotAvailablePage } from "@/AdminViews/common/Pages";
import { Constants } from "@/Constants";
import { CompanyContainer } from "@/AdminViews/CompanyContainter";
import { UserManagement } from "@/AdminViews/UserManagement";
import { CustomerManagement } from "@/AdminViews/CustomerManagement";

export default function AdminViewContainer({ history, match }) {
  const { path } = match;
  console.log(path, "at container");
  return (
    <Fragment>
      <Switch>
        <PrivateRoute
          exact
          path={`${path}:companyId`}
          component={NotAvailablePage}
        />
        <PrivateRoute
          exact
          path={`${path}/${Constants.COMPANY_MANAGEMENT}`}
          component={CompanyContainer}
        />
        <PrivateRoute
          exact
          path={`${path}/${Constants.USER_MANAGEMENT}`}
          component={UserManagement}
        />
        <PrivateRoute
          exact
          path={`${path}/${Constants.CUSTOMER_MANAGEMENT}`}
          component={CustomerManagement}
        />
      </Switch>
    </Fragment>
  );
}
