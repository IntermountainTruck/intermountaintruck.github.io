import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./Main";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Main />
        </Route>
        {/* <Route path="/generate-quote">
          <QuotePage />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
