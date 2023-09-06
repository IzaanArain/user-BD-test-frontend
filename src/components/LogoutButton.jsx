import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";
const LogoutButton = () => {
  const {userAuth,setUserAuth}=useAuthContext()
  const navigate = useNavigate();

 const Logout=()=>{
  const user = JSON.parse(localStorage.getItem("user"));
  delete user.userAuth;
 localStorage.setItem("user", JSON.stringify(user));
 const logoutState=localStorage.getItem("user")
  setUserAuth(logoutState)
  navigate("/login");
 }



  return (
    <>
      <button onClick={Logout}>Logout</button>
    </>
  );
};

export default LogoutButton;
