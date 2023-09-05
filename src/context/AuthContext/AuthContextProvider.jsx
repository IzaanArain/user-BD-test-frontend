import React from 'react'
import { authContext } from './AuthContext'
import { useState } from 'react'
const AuthContextProvider = ({children}) => {
    const userAuth=JSON.parse(localStorage.getItem("user"))
  return (
    <>
    <authContext.Provider value={userAuth}> 
    {children}
    </authContext.Provider>
    </>
  )
}

export default AuthContextProvider