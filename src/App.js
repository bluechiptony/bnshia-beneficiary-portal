import React from "react";
import "./App.scss";
import { BrowserRouter, Route } from "react-router-dom";
import { Login, ForgotPassword, SignUp, SetPassword } from "./components/login/login";
import { Dashboard } from "./components/dashboard/dashboard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path="/" exact component={Login} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/reset-password" component={SetPassword} />
        <Route path="/activate-password" component={SetPassword} />
        <Route path="/home" component={Dashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
