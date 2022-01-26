import React from 'react';
import Blooddon from "./images/blood-donation.jpg";
import "./BloodBank.css";

export const BloodBank = () => {
  return <div>
    <div className="d-flex don-blood">
          <div>
            <img src={Blooddon} alt="" className="don-img1" />
          </div>
          <div className="requ">
            <h1>Requirment For Donating Blood </h1>
            <ul>
              
            </ul>
          </div>
      </div>
  </div>;
};
