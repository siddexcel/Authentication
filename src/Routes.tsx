import React from "react";
import Login from "./Pages/Login";
import Verification from "./Pages/Verification";
import HomePage from './Pages/HomePage';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/verify" component={Verification} />
        <Route exact path="/home" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
