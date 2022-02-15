import React from 'react';
import './ER.css';
import Weight from "./images/Weight.jpg";

export const EligibilityRequ = () => {
  return <div style={{width:"100%",}}>
    <h1 className='center'>Are You Eligible?</h1>
    <div className='criterias'>

      <div className="row">
        <div className="box b2 ig1">
          <h2 className='cri'>Age</h2>
          <p className='content'>
            Donor should be in the age group of 18 to 65 years.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="box b1 ig2">
          <h2 className='cri'>Weight</h2>
          <p className='content'>
            The Donor Should not be less than 45 Kilograms.
          </p>
        </div>
        <div className="box b3 ig3">
          <h2 className='cri'>Pulse</h2>
          <p className='content'>
            Temperature and Pulse of the donor shall be normal.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="box b2 ig4">
          <h2 className='cri'>Blood Pressure</h2>
          <p className='content'>
            The systolic and diastolic blood pressures are within normal limits.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="box b1 ig5">
          <h2 className='cri'>Child Birth</h2>
          <p className='content'>
            Should have delivered 1 year ago and stopped lactation.
          </p>
        </div>
        <div className="box b3 ig6">
          <h2 className='cri'>Haemoglobin</h2>
          <p className='content'>
            Haemoglobin should not be less than 12.5 grams.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="box b2 ig7">
          <h2 className='cri'>Malaria</h2>
          <p className='content'>
            Should Not have been treated for malaria in last 3 months or 3 years if residing in endemic areas
          </p>
        </div>
      </div>

      <div className="row">
        <div className="box b1 ig8">
          <h2 className='cri'>Immunization and Vaccination</h2>
          <p className='content'>
            Should NOT have had shots for any of the following - Cholera, Typhoid, Diptheria, Tetanus, Plague, Gammaglobulin in last 15 days; Rabies vaccination in last 1 year.
          </p>
        </div>
        <div className="box b3 ig9">
          <h2 className='cri'>Scars/Skin Puncture</h2>
          <p className='content'>
            Arms and Forearms should be free from Skin punctures or Scars which are indicative of Intravenous drug use or frequent blood donations.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="box b2 ig10">
          <h2 className='cri'>Cancer</h2>
          <p className='content'>
            Should NOT have any forms of cancer
          </p>
        </div>
      </div>

      <div className="row">
        <div className="box b1 ig11">
          <h2 className='cri'>Tattoo/Acupunture</h2>
          <p className='content'>
            Should NOT have had any in last 12 months .

          </p>
        </div>
        <div className="box b3 ig12">
          <h2 className='cri'>Infection</h2>
          <p className='content'>
            Should NOT have Hepatitis B, C, Tuberculosis, Leprosy, HIV.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="box b2 ig13">
          <h2 className='cri'> Heart Disease</h2>
          <p className='content'>
            Should NOT have any Heart diseases..
          </p>
        </div>
      </div>

      <div className="row">
        <div className="box b1 ig14">
          <h2 className='cri'>Dentist</h2>
          <p className='content'>
            YES if whitening or impression. YES the day after a filling (restoration), cleaning or orthodontics. YES 3 days after an extraction, surgery, root canal, crown, root planing, gum autograft or implant.
          </p>
        </div>
        <div className="box b3 ig15">
          <h2 className='cri'>Other Disease</h2>
          <p className='content'>
            Should NOT have Epilepsy, Asthma on Steroids, Bleeding disorders, Thalassemia, Sickle Cell Anemia, Polycythemia Vera.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="box b2 ig16" style={{ marginBottom: '5rem', }}>
          <h2 className='cri'>Medication</h2>
          <p className='content'>
            Certain medications may pose a risk to the donor or recipient, and if you're taking them you will not be able to give blood.
          </p>
        </div>
      </div>

      <div className="bloodDon row b2">
    <button type="button" class="btn but1">Make An Appoinment</button>
    </div>

    </div>
    
  </div>;
};