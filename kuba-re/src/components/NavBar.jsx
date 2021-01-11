import React from 'react';
import { NavLink } from 'react-router-dom';
import '../style/index.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid my-2">
        <ul className="nav navbar-nav">
          <NavLink className="nav-link text-dark" to="/">
            Greetings
          </NavLink>
          <NavLink className="nav-link text-dark" to="/places">
            Places
          </NavLink>
        </ul>
        <ul className="nav navbar-nav navbar-right">
          <NavLink className="nav-link navbar-right" to="/admin">
            Admin
          </NavLink>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
