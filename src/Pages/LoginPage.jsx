import React from "react";
import { TfiEmail } from "react-icons/tfi";
import { RiLockPasswordFill as PasswordIcon } from "react-icons/ri";
const LoginPage = () => {
  return (
    <>
      <div className="submit_page">
        <div className="submit_form">
          <form>
            
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
                placeholder="user email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="name">
                <PasswordIcon />
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="user password"
                required
              />
            </div>
            <input type="button" id="submit_btn" value="SUBMIT" />
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
