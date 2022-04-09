import React, { useState } from "react";
import "./Userlogin.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Userlogin() {
  let userDetails;

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [loginStatus, setLoginStatus] = useState("");
  const baseUrl = "http://localhost:3001/login";

  const navigate = useNavigate();

  Axios.defaults.withCredentials = true;

  const login = () => {
    const loginDetails = { userName, password };
    Axios.post(baseUrl, loginDetails).then((response) => {
      userDetails = response.data;
      // console.log(userDetails);
      console.log(userDetails[0].EMail);
      Redirect();

      function Redirect() {
        let isTrue;
        if (userDetails[0].EMail === userName) {
          isTrue = true;
          navigate("/");
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("user", JSON.stringify(userDetails));
          // HandleRedirect(isTrue);
        } else {
          console.log("Enter valid entry");
        }
        // function HandleRedirect(isTrue){

        // }
      }
    });
  };
  return (
    <div className="body">
      <div className="main-form1">
        <div className="head">Login</div>
        <form action="#">
          <div className="user-det1">
            <div className="input">
              {/*<lable>{location.state.name}</lable>
	<lable>{location.state.id}</lable>*/}
              <label htmlFor="Email_ID">Email_ID</label>
              <input
                type="text"
                placeholder="Enter Your Email_ID"
                required
                id="Email_ID"
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />
            </div>
            <div className="input">
              <label htmlFor="Password">Password</label>
              <input
                type="text"
                placeholder="Enter Your Password"
                required
                id="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="ask">
            <span>Not having an Account?</span>
            <Link to="/registration">Register</Link>
          </div>

          <div className="button">
            <button onClick={login}>Log In</button>
            <p>{userDetails}</p>
          </div>
        </form>
      </div>
    </div>
  );
}
