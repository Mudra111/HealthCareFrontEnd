import React, { useState } from "react";
import "./Userlogin.css";
import { Link } from "react-router-dom";

export default function Userlogin() {
  return (
    <div className="body">
      <div className="main-form1">
        <div className="head">Login</div>
        <form action="#">
          <div className="user-det1">
            <div className="input">
              <label htmlFor="Email_ID">Email_ID</label>
              <input
                type="text"
                placeholder="Enter Your Email_ID"
                required
                id="Email_ID"
              />
            </div>
            <div className="input">
              <label htmlFor="Password">Password</label>
              <input
                type="text"
                placeholder="Enter Your Password"
                required
                id="Password"
              />
            </div>
          </div>

          <div className="ask">
            <span>Not having an Account?</span>
            <Link to="/registration">Register</Link>
          </div>

          <div className="button">
            <button>Log In</button>
          </div>
        </form>
      </div>
    </div>
  );
}
