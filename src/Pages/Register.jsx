import React from 'react'
import {FaUser,FaPhone} from "react-icons/fa"
import {TfiEmail}from 'react-icons/tfi'
import {RiLockPasswordFill as PasswordIcon} from 'react-icons/ri'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const Register = () => {
  const [newUser,setNewUser]=useState({
    name:"",
    email:"",
    password:"",
    phone:"",
  });
  // console.log(newUser)

  const postUser=async(data)=>{
    try{
      const res=await axios.post("http://localhost:5000/api/v1/users/create",
      {...data},
      {
        headers:{
          'Content-Type':'application/json'
        }
      })
      console.log(res)
    }catch(err){
      console.error("Error: ",err.message);
    }
  }

  const CreateUser=(e)=>{
    e.preventDefault()
    console.log("click")
    postUser(newUser)
  }

  const OnChangeHandler=(e)=>{
    const {value,name}=e.target
    setNewUser((prev)=>({...prev,[name]:value}));
  }
  return (
    <>
    <div className="submit_page">
      <div className="submit_form">
        <form onSubmit={CreateUser}>
          <div className="form_heading">
          <p>Register</p>
          </div>
          <div className="form-group">
            <label htmlFor="name"><FaUser/></label>
            <input type="text"
            name='name'
            id='name'
            value={newUser.name}
            onChange={OnChangeHandler}
            placeholder='user name'
            required />
          </div>
          <div className="form-group">
            <label htmlFor="email"><TfiEmail/></label>
            <input type="email"
            name='email'
            id='email'
            value={newUser.email}
            onChange={OnChangeHandler}
            placeholder='user email'
            required />
          </div>
          <div className="form-group">
            <label htmlFor="password"><PasswordIcon/></label>
            <input type="password"
            name='password'
            id='password'
            value={newUser.password}
            onChange={OnChangeHandler}
            placeholder='user password'
            required />
          </div>
          <div className="form-group">
            <label htmlFor="phone"><FaPhone/></label>
            <input type="tel"
            name='phone'
            id='phone'
            value={newUser.phone}
            onChange={OnChangeHandler}
            maxLength="11"
            placeholder='user phone number'
            required />
          </div>

          <input type="submit" id='submit_btn' value="SUBMIT"/>
        </form>
      </div>
    </div>
    </>
  )
}

export default Register