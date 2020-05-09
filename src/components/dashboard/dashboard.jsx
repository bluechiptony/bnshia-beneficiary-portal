import React from "react";
import { BrowserRouter as HomeRouter, Link, Route } from "react-router-dom";
import "./dashboard.scss";
import { Overview } from "../overview/overview";
import { Contributions } from "../contributions/contributions";
import { Visits } from "../visits/visits";
export const Dashboard = () => {
  return (
    <div>
      <NavigationBar />
      <div className="container-fluid">
        <HomeRouter>
          <Route path="/home" exact component={Overview} />
          <Route path="/home/contributions" component={Contributions} />
          <Route path="/home/visits" component={Visits} />
        </HomeRouter>
      </div>
    </div>
  );
};

export const NavigationBar = () => {
  return (
    <header className="app-header">
      <span className="logo-text">BNSHIA</span>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/home/contributions">Contributions</Link>
          </li>
          <li>
            <Link to="/home/visits">Visits</Link>
          </li>
          <li>
            <Link to="/home/profile">Profile</Link>
          </li>
        </ul>
      </nav>
      <Link to="">
        <button>Action</button>
      </Link>
    </header>
  );
};
