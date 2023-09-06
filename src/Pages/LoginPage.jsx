import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordFill as PasswordIcon } from "react-icons/ri";
import { useState } from "react";
import axios from "axios";
import { useNavigate  } from "react-router-dom";
import { useAuthContext } from "../Hooks/useAuthContext";

const LoginPage = () => {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const {setUserAuth}=useAuthContext()
  const navigate=useNavigate();

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserLogin((prev) => ({ ...prev, [name]: value }));
  };

  const login_api = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        { ...data },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const userData=await res.data;
      localStorage.setItem("user",JSON.stringify(userData.user));
      setUserAuth(userData.user)
    } catch (err) {
      console.error("Error: ", err.message);
    }
  };

  const loginOnSubmit = (e) => {
    e.preventDefault();
    login_api(userLogin);
    navigate("/")
    // setUserLogin({
    //   email:"",
    //   password:""
    // });
  };
  return (
    <>
      <div className="submit_page">
        <div className="submit_form">
          <form onSubmit={loginOnSubmit}>
            <div className="form_heading">
              <p>Login</p>
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <TfiEmail />
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={userLogin.email}
                onChange={onChangeHandler}
                placeholder="user email"
                autoComplete="on"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">
                <PasswordIcon />
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={userLogin.password}
                onChange={onChangeHandler}
                placeholder="user password"
                required
              />
            </div>
            <input type="submit" id="submit_btn" value="SUBMIT" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
