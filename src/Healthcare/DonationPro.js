import React from "react";
import "./DP.css";
import Registration from "./images/Registration.jpg";
import HealthHistory from "./images/HealthHistory.jpg";
import YourDonation from "./images/YourDonation.jpg";
import ThankYou from "./images/ThankYou.jpg";

export const DonationPro = () => {
  return (
    <div>
      <h1 className="bdp">The Blood Donation Process</h1>
      <h5 className="desc">
        The blood donation process from the time you arrive until the time you
        leave takes about an hour. The donation itself is only about 8-10
        minutes on average.
      </h5>

      <div className="bg">
        <h1 className="title1">Registration</h1>
        <div className="dpo">
          <img src={Registration} alt="" className="bd2" />
          <div className="con1">
            <ul className="con2">
              <li>We’ll sign you in and go over basic eligibility.</li>
              <li>
                You’ll be asked to show ID, such as your driver’s license.
              </li>
              <li>You’ll read some information about donating blood.</li>
              <li>
                We’ll ask you for your complete address.Your address needs to be
                complete (including PO Box, street/apartment number) and the
                place where you will receive your mail 8 weeks from donation.
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="bg bg1">
        <h1 className="title1">Health History</h1>
        <div className="dpo">
          <img
            src={HealthHistory}
            alt=""
            className="bd2"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          />
          <div className="con1">
            <ul className="con2">
              <li>
                You’ll answer a few questions about your health history and
                places you’ve traveled, during a private and confidential
                interview.
              </li>
              <li>
                You’ll tell us about any prescription and/or over the counter
                medications that may be in your system.
              </li>
              <li>
                We’ll check your temperature, pulse, blood pressure and
                hemoglobin level.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <div className="bg">
        <h1 className="title1">Your Donation</h1>
        <div className="dpo">
          <img
            src={YourDonation}
            alt=""
            className="bd2"
            style={{ width: "40%" }}
          />
          <div className="con1">
            <ul className="con2 lh">
              <li>
                If you’re donating whole blood, we’ll cleanse an area on your
                arm and insert a brand new sterile needle for the blood draw.
                (This feels like a quick pinch and is over in seconds.)
              </li>
              <li>
                Other types of donations, such as platelets, are made using an
                apheresis machine which will be connected to both arms.
              </li>
              <li>
                A whole blood donation takes about 8-10 minutes, during which
                you’ll be seated comfortably or lying down.
              </li>
              <li>
                When approximately a pint of whole blood has been collected, the
                donation is complete and a staff person will place a bandage on
                your arm.
              </li>
              <li>
                {" "}
                For platelets, the apheresis machine will collect a small amount
                of blood, remove the platelets, and return the rest of the blood
                through your other arm; this cycle will be repeated several
                times over about 2 hours.{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr />

      <div className="bg bg1" style={{ marginBottom: "2rem" }}>
        <h1 className="title1">Refreshment And Recovery</h1>
        <div className="dpo">
          <img
            src={ThankYou}
            alt=""
            className="bd2"
            style={{ marginTop: "1rem", marginBottom: "1rem" }}
          />
          <div className="con1">
            <ul className="con2">
              <li>
                After donating blood, you’ll have a snack and something to drink
                in the refreshment area.
              </li>
              <li>
                You’ll leave after 10-15 minutes and continue your normal
                routine.
              </li>
              <li>
                Enjoy the feeling of accomplishment knowing you are helping to
                save lives.
              </li>
              <li>
                Take a selfie, or simply share your good deed with friends. It
                may inspire them to become blood donors.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
