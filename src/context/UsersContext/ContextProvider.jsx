import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import { userContext } from './Context';
import { useAuthContext } from '../../Hooks/useAuthContext';
const ContextProvider = ({children}) => {
  const [users,setUsers]=useState([]);
  const userAuth=useAuthContext()
  const token=userAuth.userAuth
  // console.log(token)
  useEffect(()=>{
    const fetchUsers=async()=>{
      try{
          const res=await axios.get("http://localhost:5000/api/v1/users/allusers",{
            headers:{
              "authorization" : `Bearer ${token}`,
            }
          })
          const data=await res.data;
          // console.log("fetching data...",data)
         setUsers(data);
      }catch(err){
          console.error("Error: ",err.message);
      }
  };
  fetchUsers();
  },[])
  // console.log(users)
  return (
    <>
    <userContext.Provider value={users}>
      {children}
    </userContext.Provider>
    </>
  )
}

export default ContextProvider