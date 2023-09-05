import React from 'react'
import { Navigate } from 'react-router-dom'
const LogoutButton = () => {
    const user=JSON.parse(localStorage.getItem("user"))
    delete user.userAuth;
    // console.log(user)
  return (
   <>
   <button onClick={()=>{
    localStorage.setItem("user",JSON.stringify(user))
   }}>Logout</button>
   </>
  )
}

export default LogoutButton