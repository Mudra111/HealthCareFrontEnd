import React, { useState } from "react";
import "./BloodConform.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Axios from "axios";

export default function BloodConform() {
  const [disTextarea, setDisTextarea] = useState(false);

  const display = () => {
    setDisTextarea(!disTextarea);
  };
  const notDisplay = () => {
    setDisTextarea(false);
  };
  return (
    <div className="body">
      <div className="main-form1">
        <div className="head">Book for Blood test</div>
        <br />
        <div className="input">
          <label>
            <b>USERNAME / EMAIL:</b>
          </label>
          <input
            style={{ width: "25vw", padding: "10px", marginLeft: "10px" }}
            // className="inpbox1"
            type="email"
          />
        </div>
        <form action="#">
          <div className="user-det1">
            <div className="gender">
              <label htmlFor="">
                <h4> Do yo have any disease?</h4>
              </label>
              <br />
              <div className="cat">
                <input
                  type="radio"
                  id="Male"
                  name="gender"
                  value="Male"
                  onChange={display}
                />
                <label htmlFor="Yes">Yes</label>
                <br />
                <input
                  type="radio"
                  id="Female"
                  name="gender"
                  value="Female"
                  onChange={notDisplay}
                />
                <label htmlFor="No">No</label>
              </div>
            </div>

            <div className={`input notvis ${disTextarea ? "visible" : ""}`}>
              <label htmlFor="Address">
                <h4>Describe Your Disease</h4>
              </label>
              <textarea
                name="message"
                rows={5}
                cols={70}
                required
                id="Disease"
              ></textarea>
            </div>
          </div>
          <div className="button">
            <button>Book Now</button>
          </div>
        </form>
      </div>
    </div>
  );
}
