import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HomeScreen, LoginScreen, ProfileScreen } from "./screens";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "firebase";
import { login, logout, selectUser } from "features/userSlice";
import "./App.css";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        console.log(user);
        dispatch(login({
          uid: user.uid,
          email: user.email,
        }));
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]);

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
              <Route exact path="/profile">
                <ProfileScreen />
              </Route>
            </Switch>
          )}
      </Router>
    </div>
  );
}

export default App;
