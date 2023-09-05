import React from 'react'
import { Navigate } from 'react-router-dom'
const LogoutButton = () => {
    
  return (
   <>
   <button onClick={()=>{
    localStorage.setItem("user","{}")
   }}>Logout</button>
   </>
  )
}

export default LogoutButton