import React from "react"
import { Router } from "react-router-dom"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { history } from "./_helpers"
import { accountService } from "./_services"
import { App } from "./app"
import store from "@/redux/store/store"
import "bootstrap/dist/css/bootstrap.css"
import "./styles.less"
import "font-awesome/css/font-awesome.min.css"

// setup fake backend
import { configureFakeBackend } from "./_helpers"
configureFakeBackend()

// attempt silent token refresh before startup
accountService.refreshToken().finally(startApp)

function startApp() {
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>,
    document.getElementById("app")
  )
}
