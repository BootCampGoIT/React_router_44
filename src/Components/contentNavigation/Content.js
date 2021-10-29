import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";

const Content = ({ routes, match, children }) => {
  return (
    <Switch>
      {children}
   
      {routes.map(({ path, exact, component }) => (
        <Route
          path={match.path === "/" ? path : match.path + path}
          exact={exact}
          component={component}
        />
      ))}
    </Switch>
  );
};

export default withRouter(Content);
