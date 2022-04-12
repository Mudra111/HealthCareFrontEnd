import React from "react";
import "./Feedback.css";

export default function Feedback() {
  return (
    <div className="FeedbackMain">
      <div className="feedbackcontainer">
        <h1> Give your feedback</h1>
        <div className="feedbackbox">
          <i className="fa fa-user"></i>
          <input type="text" name="text" id="text" placeholder="Full name" />
        </div>
        <div className="feedbackbox">
        <i className="fa fa-envelope"></i>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email address"
          />
        </div>
        <div className="feedbackdbox">
          <textarea
            cols="70"
            rows="5"
            placeholder="Enter your opinions.... "
          ></textarea>
        </div>
        <button className="feedbackbtn ">Submit</button>
      </div>
    </div>
  );
}
