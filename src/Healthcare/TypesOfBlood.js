import React from 'react';
import SideImg from "./images/blood-donation.jpg";
import WholeBlood from "./images/WholeBlood.jpg";
import Plasma from "./images/Plasma.jpg";
import PowerRed from "./images/PowerRed.jpeg";
import Platelet from "./images/Platelet.jpg";
import "./TOF.css";

export const TypesOfBlood = () => {
  return <div>
    <h1 className='center'>Types Of Blood Donations</h1>
    <div>
      <div className="d-flex tobd">
        <img src={WholeBlood} alt="" className='bd1' style={{margin:'2rem'}} />
        <div className='con1'>
          <h2 className='title'>Whole Blood Donation</h2>
          <h4>What is it?</h4>
          <p className='tobd-con'>“Whole blood” is simply the blood that flows through your veins. It contains red cells, white cells, and platelets, suspended in plasma.</p>
          <h4>Who it helps</h4>
          <p className='tobd-con'>Whole blood is frequently given to trauma patients and people undergoing surgery.</p>
          <h4>Time it takes</h4>
          <p className='tobd-con'>About 1 hour</p>
          <h4>Ideal blood types</h4>
          <p className='tobd-con'>All blood types</p>
          <h4>Donation frequency</h4>
          <p className='tobd-con'>Every 56 days, up to 6 times a year</p>
          <button type="button" class="btn but2">Donate Now</button>
        </div>
      </div>
    </div>


    <div>
      <div className="d-flex tobd">
        <img src={Platelet} alt="" className='bd1' />
        <div className='con1'>
          <h2 className='title'>Platelet Donation</h2>
          <h4>What is it?</h4>
          <p className='tobd-con'>Platelets are tiny cells in your blood that form clots and stop bleeding. Platelets are most often used by cancer patients and others facing life-threatening illnesses and injuries.

            In a platelet donation, an apheresis machine collects your platelets along with some plasma, returning your red cells and most of the plasma back to you. A single donation of platelets can yield several transfusable units, whereas it takes about five whole blood donations to make up a single transfusable unit of platelets.</p>
          <h4>Who it helps</h4>
          <p className='tobd-con'>Platelets are a vital element of cancer treatments and organ transplant procedures, as well as other surgical procedures.</p>
          <h4>Time it takes</h4>
          <p className='tobd-con'>About 2.5-3 hours</p>
          <h4>Ideal blood types</h4>
          <p className='tobd-con'>A positive, A negative, B positive, O positive, AB positive and AB negative</p>
          <h4>Donation frequency</h4>
          <p className='tobd-con'>Every 7 days, up to 24 times/year</p>
          <button type="button" class="btn but2">Donate Now</button>
        </div>
      </div>
    </div>


    <div>
      <div className="d-flex tobd">
        <img src={Plasma} alt="" className='bd1' />
        <div className='con1'>
          <h2 className='title'>Plasma Donation</h2>
          <h4>What is it?</h4>
          <p className='tobd-con'>During an AB Elite donation, you give plasma, a part of your blood used to treat patients in emergency situations. AB plasma can be given to anyone regardless of their blood type. Plasma is collected through an automated process that separates plasma from other blood components, then safely and comfortably returns your red blood cells and platelets to you. AB Elite maximizes your donation and takes just a few minutes longer than donating blood.</p>
          <h4>Who it helps</h4>
          <p className='tobd-con'>AB Plasma is used in emergency and trauma situations to help stop bleeding. </p>
          <h4>Time it takes</h4>
          <p className='tobd-con'>About 1 hour and 15 minutes</p>
          <h4>Ideal blood types</h4>
          <p className='tobd-con'>AB positive, AB negative</p>
          <h4>Donation frequency</h4>
          <p className='tobd-con'>Every 28 days, up to 13 times/year</p>
          <button type="button" class="btn but2">Donate Now</button>
        </div>
      </div>
    </div>


    <div>
      <div className="d-flex tobd">
        <img src={PowerRed} alt="" className='bd1' />
        <div className='con1'>
          <h2 className='title'>Power Red Donation</h2>
          <h4>What is it?</h4>
          <p className='tobd-con'>Power Red is similar to a whole blood donation, except a special machine is used to allow you to safely donate two units of red blood cells during one donation while returning your plasma and platelets to you.</p>
          <h4>Who it helps</h4>
          <p className='tobd-con'>Red cells from a Power Red donation are typically given to trauma patients, newborns and emergency transfusions during birth, people with sickle cell anemia, and anyone suffering blood loss.</p>
          <h4>Time it takes</h4>
          <p className='tobd-con'>About 1.5 hours</p>
          <h4>Ideal blood types</h4>
          <p className='tobd-con'>O positive, O negative, A negative, and B negative</p>
          <h4>Donation frequency</h4>
          <p className='tobd-con'>Every 112 days, up to 3 times/year</p>
          <h4>Height/Weight requirements</h4>
          <p className='tobd-con'>Male donors: At least 5'1" tall and weigh at least 130 lbs.<br />
            Female donors: At least 5'5" tall and weigh at least 150 lbs.</p>
          <button type="button" class="btn but2">Donate Now</button>
        </div>
      </div>
    </div>
  </div>;
};
