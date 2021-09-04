import React from "react";
import "./App.css";
import { HomeScreen, LoginScreen } from "./screens";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const user = null;

  return (
    <div className="app">
      <Router>
          {!user ? (
            <LoginScreen />
          ): (
            <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
              <Route exact path="/login">
                <HomeScreen />
              </Route>
              <Route exact path="/profile">
                <HomeScreen />
              </Route>
            </Switch>
          )}
      </Router>
    </div>
  );
}

export default App;
