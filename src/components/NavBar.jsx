import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";
import LogoutButton from "./LogoutButton";
const NavBar = () => {
  const user=useAuthContext()
  console.log(user)
  return (
    <>
      <header>
        <nav>
        <div id="logo">
          <p>Izaan</p>
        </div>
          <ul>
          {
            user.userAuth ? (<li>
              <Link to="/">Home</Link>
            </li>) : null
          }
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
            {
            !user.userAuth ? null : (<li>
              <Link to="/edit">Edit</Link>
            </li>)
          }
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
