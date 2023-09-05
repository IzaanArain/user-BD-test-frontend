import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";
import LogoutButton from "./LogoutButton";
const NavBar = () => {
  const userAuth=useAuthContext()
  // console.log(userAuth)
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
           <li>
           <LogoutButton/>
           </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
