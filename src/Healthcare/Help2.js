import React from 'react'
import mainPic from "./images/Blood-Donation.png";

export const Help2 = () => {
  return (
    <div>
        <div className="display">
                <img src={mainPic} alt="" />
            </div>
            <h1 className='center'>Who Can You Help By Donating Blood ?</h1>

            <h1 className='title1'>Cancer Patients</h1>

            <div className="slder">
                <div className="load"></div>
                <div className="content">
                    <div className="principal">
                        <h2>Ideal Donation Type</h2>
                        <p>Platelets donation, because certain cancers and cancer treatments prevent patients from producing their own.</p>
                    </div>
                </div>
            </div>
    </div>
  )
}
