import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";
import LogoutButton from "./LogoutButton";
const NavBar = () => {
  const {userAuth}=useAuthContext()
  const token=userAuth.userAuth;
  // console.log(user)
  return (
    <>
      <header>
        <nav>
        <div id="logo">
          <p>Izaan</p>
        </div>
          <ul>
          {
            token ? (<li>
              <Link to="/">Home</Link>
            </li>) : null
          }
            {
              token ?  null : <li>
              <Link to="/login">Login</Link>
            </li>
            }
           {
            token ?  null : <li>
            <Link to="/register">Register</Link>
          </li> 
           }
            {
            !token ? null : (<li>
              <Link to="/edit">Edit</Link>
            </li>)
          }
           <li>
           {token ? <LogoutButton/>:null}
           </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
