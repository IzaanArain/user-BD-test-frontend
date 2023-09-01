import React from "react";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <>
      <header>
        <nav>
        <div id="logo">
          <p>Izaan</p>
        </div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            <li>
              <Link to="/edit">Edit</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
