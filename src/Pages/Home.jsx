import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios';
import UserCard from '../components/UserCard';
import { useUserContext } from '../Hooks/useUserContext';
import { useAuthContext } from '../Hooks/useAuthContext';

const Home = () => {
const users=useUserContext();
// console.log(users)
const {userAuth}=useAuthContext()
const token=userAuth.userAuth
  return (
    <>
    <div className="userList">
    {
     users.map((user,i)=>{
        return(
          <Fragment key={i}>
            <UserCard user={user}/>
          </Fragment>
        )
      }) 
    }
    </div>
    </>
  )
}

export default Home