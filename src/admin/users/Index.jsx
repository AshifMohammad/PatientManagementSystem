import React from "react";
import { Route, Switch, Router } from "react-router-dom";
import { List } from "./List";
import { AddEdit } from "./AddEdit";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ forceRefresh: true });

function Users({ match }) {
  const { path } = match;

  return (
    <Router history={history}>
      <Switch>
        <Route exact path={path} component={List} />
        <Route path={`${path}/add`} component={AddEdit} />
        <Route path={`${path}/edit/:id`} component={AddEdit} />
      </Switch>
    </Router>
  );
}

export { Users };
