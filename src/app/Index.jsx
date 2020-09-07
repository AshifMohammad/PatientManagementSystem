import React, { useState, useEffect, lazy, Suspense } from "react"
import { Route, Switch, useLocation } from "react-router-dom"
import { Role } from "@/_helpers"
import { accountService } from "@/_services"
import { Nav, PrivateRoute, Alert } from "@/_components"
import { UserManagement } from "@/AdminViews/UserManagement"
import { Profile } from "@/profile"
import { Admin } from "@/admin"
import { Account } from "@/account"
import { Constants } from "@/Constants"
import { CustomerManagement } from "@/AdminViews/CustomerManagement"
import { NotAvailablePage } from "@/AdminViews/common/Pages"

function App() {
  const { pathname } = useLocation()
  const [user, setUser] = useState({})

  useEffect(() => {
    const subscription = accountService.user.subscribe(x => setUser(x))
    return subscription.unsubscribe
  }, [])

  // to improve performance we can import lazy all the components at the routes level
  const lazyContainer = lazy(() =>
    import(
      /* webpackChunkName: "companyContainerChunk" */ /* webpackPrefetch: true */ "../AdminViews/CompanyContainter/CompanyContainer"
    )
  )
  return (
    <div className={"app-container " + (user && " bg-light")}>
      <Alert />
      <Suspense fallback={() => "...Loading"}>
        <Switch>
          <PrivateRoute
            exact
            path="/"
            roles={Role.Admin}
            component={lazyContainer}
          />
          <PrivateRoute
            exact
            path="/company-management/:companyId"
            component={NotAvailablePage}
          />
          <PrivateRoute
            exact
            path={`/${Constants.COMPANY_MANAGEMENT}`}
            component={lazyContainer}
          />
          <PrivateRoute
            exact
            path={`/${Constants.USER_MANAGEMENT}`}
            component={UserManagement}
          />
          <PrivateRoute
            exact
            path={`/${Constants.CUSTOMER_MANAGEMENT}`}
            component={CustomerManagement}
          />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/admin" roles={[Role.Admin]} component={Admin} />
          <Route path="/account" component={Account} />
          <Route path="*" component={NotAvailablePage} />
        </Switch>
      </Suspense>
    </div>
  )
}

export { App }
