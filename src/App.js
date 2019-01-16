import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./component/layouts/Navbar";
import Dashboard from "./component/dashboard/Dashboard";
import ProjectDetails from "./component/projects/ProjectDetails";
import SingedIn from "./component/auth/SingedIn";
import SingedUp from "./component/auth/SingedUp";
import CreateProject from "./component/projects/CreateProject";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
            <Route path="/login" component={SingedIn} />
            <Route path="/signup" component={SingedUp} />
            <Route path="/create" component={CreateProject} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
