import React from "react";
import Login from "./Pages/Login";
import Verification from "./Pages/Verification";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/verify" component={Verification} />
      </Switch>
    </Router>
  );
};

export default Routes;
