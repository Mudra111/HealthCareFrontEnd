import React, { useState } from "react";
import "./Gynecology.css";
import "./SkinDisease.css";
import SkinSp1 from "./images/SkinSp1.jpg";
import SkinSp2 from "./images/SkinSp2.jpg";
import SkinSp3 from "./images/SkinSp3.png";

export default function Skin() {
  const [isShow1, setIsShow1] = useState(false);

  const changeClass1 = () => {
    setIsShow1(!isShow1);
  };

  const [isShow2, setIsShow2] = useState(false);

  const changeClass2 = () => {
    setIsShow2(!isShow2);
  };

  const [isShow3, setIsShow3] = useState(false);

  const changeClass3 = () => {
    setIsShow3(!isShow3);
  };

  const [isShow4, setIsShow4] = useState(false);

  const changeClass4 = () => {
    setIsShow4(!isShow4);
  };

  const [isShow5, setIsShow5] = useState(false);

  const changeClass5 = () => {
    setIsShow5(!isShow5);
  };

  const [isShow6, setIsShow6] = useState(false);

  const changeClass6 = () => {
    setIsShow6(!isShow6);
  };

  const [isShow7, setIsShow7] = useState(false);

  const changeClass7 = () => {
    setIsShow7(!isShow7);
  };

  const [isShow8, setIsShow8] = useState(false);

  const changeClass8 = () => {
    setIsShow8(!isShow8);
  };

  const [isShow9, setIsShow9] = useState(false);

  const changeClass9 = () => {
    setIsShow9(!isShow9);
  };

  const [isShow10, setIsShow10] = useState(false);

  const changeClass10 = () => {
    setIsShow10(!isShow10);
  };

  const [isShow11, setIsShow11] = useState(false);

  const changeClass11 = () => {
    setIsShow11(!isShow11);
  };

  const [isShow12, setIsShow12] = useState(false);

  const changeClass12 = () => {
    setIsShow12(!isShow12);
  };

  return (
    <div className="main_gyn">
      <div className="gynecology_depa">
        <div className="skin_heading_div">
          <h1 className="skin_heading">Dermatology Department</h1>
        </div>

        <div className="overview_skin">
          <div className="overviewCon_skin">
            <h2 className="ovrconheading_skin">Overview</h2>
            <hr />

            <p>
              People seeking answers about diseases of the skin, mucous
              membranes and nails, hair loss, and facial aging find the help
              they need at Mayo Clinic's widely respected Dermatology
              Department. Our skin specialists diagnose and treat hundreds of
              conditions, including rare and genetic disorders. They work
              closely with you to understand your dermatologic needs and find
              the right answers the first time.
            </p>
            <br />

            <p>
              Highly trained board-certified dermatologic surgeons and
              dermatologists offer a holistic approach and expert care, as part
              of a multispecialty group. Many people who come to us with skin
              problems also have related conditions, such as cancer or a
              disorder of the immune system.Our skin disease experts work with
              other specialists to provide the individualized care you need.
            </p>
            <br />

            <p>
              Having all this expertise in a single place means that your care
              is discussed among the team, test results are available quickly,
              and appointments are scheduled in coordination. What might take
              weeks or even months to accomplish elsewhere can typically be done
              in a matter of days at Mayo Clinic.
            </p>
            <br />

            <p>
              Our dermatologists and dermatopathology specialists also offer
              resources that complement the treatment you receive from your
              local doctor.
            </p>
            <br />

            <button className="ReqAppo_skin">Request an Appointment</button>
          </div>
        </div>

        <div className="gyn_specialists">
          <div className="Skin_sp_heading">
            <h2>Specialists</h2>
          </div>

          <div className="breakLine_skin"></div>

          <div className="Skin_sp_1">
            <div className="sp_name_head_1">
              <div className="sp_H">
                <div className="sp_Head1">
                  <h2>Dr.Sheetal Srinivas</h2>
                </div>
              </div>

              <div className="Skin_pic_det_main">
                <div className="doc_pic_con">
                  <img src={SkinSp1} alt="" className="doc_1" />
                  <table className="SkinTab">
                    <tr>
                      <td>
                        <b>Qualification</b>
                      </td>
                      <td> :</td>
                      <td> MBBS, MD (DVL)</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Experience</b>
                      </td>
                      <td> :</td>
                      <td> 7 year</td>
                    </tr>
                  </table>
                </div>

                <div className="doc_det_con">
                  <h4>
                    <span>&#10144;</span>Specialities
                  </h4>
                  <p>Dermatologist</p>
                  <h4>
                    <span>&#10144;</span>Education
                  </h4>
                  <p>
                    <b>MBBS</b>
                    <br />
                    Kempegowda institute of medical science Bangalore (KIMS)
                    2015
                    <br />
                    <b>MD</b>
                    <br />
                    M.S ramaiah medical college Bangalore 2018
                  </p>
                  <h4>
                    <span>&#10144;</span>About
                  </h4>
                  <p>
                    Working in Sheetal children and Derma clinic and Oliva
                    bangalore. Practising both clinical and cosmetic
                    dermatology.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="breakLine_skin"></div>

          <div className="Skin_sp_1">
            <div className="sp_name_head_2">
              <div className="sp_H">
                <div className="sp_Head1">
                  <h2>Dr.Debasmita Chakraborty</h2>
                </div>
              </div>

              <div className="Skin_pic_det_main">
                <div className="doc_pic_con">
                  <img src={SkinSp2} alt="" className="doc_1" />
                  <table className="SkinTab">
                    <tr>
                      <td>
                        <b>Qualification</b>
                      </td>
                      <td> :</td>
                      <td> MBBS, DDVL</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Experience</b>
                      </td>
                      <td> :</td>
                      <td> 10 year</td>
                    </tr>
                  </table>
                </div>

                <div className="doc_det_con">
                  <h4>
                    <span>&#10144;</span>Specialities
                  </h4>
                  <p>Dermatologist, Cosmetologist</p>
                  <h4>
                    <span>&#10144;</span>Education
                  </h4>
                  <p>
                    <b>MBBS</b>
                    <br />
                    Vaidehi institute of Medical Sciences and Research Center
                    <br />
                    <b>DDVL</b>
                    <br />
                    Deccan college of Medical Sciences
                  </p>
                  <h4>
                    <span>&#10144;</span>About
                  </h4>
                  <p>
                    Dr. Debasmita Chakraborty has done her Post graduation in
                    Dermatology, Venereology &amp; Leproscopy with experience of
                    7+ Years in the field of dermatology and cosmetic treatment
                    of skin, hair and nails. She is well experienced in
                    treatment of Acne, scars, pigmentation, anti aging, Botox,
                    fillers, laser treatment, hairfall and skin disorders like
                    vitiligo, psoriasis, infections, skin allergies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="breakLine_skin"></div>

          <div className="Skin_sp_1">
            <div className="sp_name_head_3">
              <div className="sp_H">
                <div className="sp_Head1">
                  <h2>Dr.Ashwini Tatawati</h2>
                </div>
              </div>

              <div className="Skin_pic_det_main">
                <div className="doc_pic_con">
                  <img src={SkinSp3} alt="" className="doc_1" />
                  <table className="SkinTab">
                    <tr>
                      <td>
                        <b>Qualification</b>
                      </td>
                      <td> :</td>
                      <td> MBBS, MD (DVL)</td>
                    </tr>
                    <tr>
                      <td>
                        <b>Experience</b>
                      </td>
                      <td> :</td>
                      <td> 9 year</td>
                    </tr>
                  </table>
                </div>

                <div className="doc_det_con">
                  <h4>
                    <span>&#10144;</span>Specialities
                  </h4>
                  <p>Dermatologist</p>
                  <h4>
                    <span>&#10144;</span>Education
                  </h4>
                  <p>
                    <b>MBBS</b>
                    <br />
                    RGUHS 2013
                    <br />
                    <b>MD (DVL)</b>
                    <br />
                    KLE Acadamy of higher eduation and research,Karnatala 2016
                  </p>
                  <h4>
                    <span>&#10144;</span>About
                  </h4>
                  <p>
                    Dr. ASHWINI TATAWATI IS A Dermatologist CONSULTANT on mfine
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="breakLine_skin"></div>
        </div>

        <section className="que">
          <div className="que-container">
            <div className="heading_que que-item">
              <h2>Frequently Asked Questions on Dermatologist</h2>
            </div>

            <div className="que-item" id="que1">
              <a onClick={changeClass1} className="que-link">
                Why should I visit a Dermatologist?
                <span className={`${isShow1 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow1 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow1 ? "ans1" : ""}`}>
                <hr />
                <p>
                  You may have to visit a dermatologist for any hair and skin
                  issues you may have, for example, Skin problems in teenagers
                  like fungal infection, acne, hair fall etc. You can choose to
                  consult a dermatologist as they help bust myths and provide
                  correct information regarding various skin diseases and answer
                  common questions related to skin and hair.
                </p>
              </div>
            </div>

            <div className="que-item" id="que2">
              <a onClick={changeClass2} className="que-link">
                Is it safe to go to a gynaecologist during Covid?
                <span className={`${isShow2 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow2 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow2 ? "ans2" : ""}`}>
                <hr />
                <p>
                  It's better to give them a call before visiting them. Ask your
                  gynaecologist if teleconsultation is possible.
                </p>
              </div>
            </div>

            <div className="que-item" id="que3">
              <a onClick={changeClass3} className="que-link">
                When should I see a gynaecologist?
                <span className={`${isShow3 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow3 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow3 ? "ans3" : ""}`}>
                <hr />
                <p>
                  Women should make their appointment once if they have
                  menstrual problems like delayed periods, too heavy bleeding,
                  pain during periods etc . Also, it's good to consult them if
                  you are trying to conceive, are pregnant or during menopause.
                </p>
              </div>
            </div>

            <div className="que-item" id="que4">
              <a onClick={changeClass4} className="que-link">
                Do gynaecologists judge you?
                <span className={`${isShow4 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow4 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow4 ? "ans4" : ""}`}>
                <hr />
                <p>
                  Gynaecologists will mostly want to help you and tell you
                  what's going on with your body.
                </p>
              </div>
            </div>

            <div className="que-item" id="que5">
              <a onClick={changeClass5} className="que-link">
                Is it okay to go to the gynaecologist on your period?
                <span className={`${isShow5 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow5 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow5 ? "ans5" : ""}`}>
                <hr />
                <p>
                  Going to the gynaecologist is okay during periods, especially
                  if it's related to irregularities in your periods. But some
                  choose not to,considering their comfort level, but there's no
                  need to otherwise.
                </p>
              </div>
            </div>

            <div className="que-item" id="que6">
              <a onClick={changeClass6} className="que-link">
                Can Covid cause gynaecological problems?
                <span className={`${isShow6 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow6 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow6 ? "ans6" : ""}`}>
                <hr />
                <p>
                  Covid, directly, does not cause any gynaecological problems.
                  However, some symptoms may be related to stress due to the
                  pandemic. Consult with your gynaecologist on the same.
                </p>
              </div>
            </div>

            <div className="que-item" id="que7">
              <a onClick={changeClass7} className="que-link">
                Should I cancel my gynaecologist appointment if I have my
                period?
                <span className={`${isShow7 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow7 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow7 ? "ans7" : ""}`}>
                <hr />
                <p>
                  Seeing a gynaecologist is okay during periods. Some choose not
                  to, considering their comfort levels, but otherwise, there's
                  no need to cancel.
                </p>
              </div>
            </div>

            <div className="que-item" id="que8">
              <a onClick={changeClass8} className="que-link">
                Is it normal to get wet at the ob-gyn?
                <span className={`${isShow8 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow8 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow8 ? "ans8" : ""}`}>
                <hr />
                <p>
                  There's nothing wrong with it; your body's natural response to
                  lubrication has nothing to do with the gynaecological
                  examination. Moreover, some women lubricate more than others,
                  and that's perfectly normal.
                </p>
              </div>
            </div>

            <div className="que-item" id="que9">
              <a onClick={changeClass9} className="que-link">
                What does a gynaecologist check?
                <span className={`${isShow9 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow9 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow9 ? "ans9" : ""}`}>
                <hr />
                <p>
                  Your doctor will typically check for abnormalities in your
                  blood pressure, heart rate, check for haemoglobin and record
                  your weight. They may also check your heart, lungs, chest and
                  thyroid glands for any abnormalities. During the breast
                  examination, your doctor will look for abnormal lumps or pain.
                  The internal examination helps the doctor check for
                  abnormalities in your reproductive organs, genital area,
                  cervix, ovaries and uterus. Finally, they will also do a pap
                  smear to ensure cells in your cervix are normal.
                </p>
              </div>
            </div>

            <div className="que-item" id="que10">
              <a onClick={changeClass10} className="que-link">
                Can a gynaecologist tell if you are a virgin?
                <span className={`${isShow10 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow10 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow10 ? "ans10" : ""}`}>
                <hr />
                <p>
                  Unless you tell them, your gynaecologist will not know if you
                  are sexually active. In general, a pelvic or a vaginal exam
                  cannot tell with certainty if a woman is sexually active or
                  not.
                </p>
              </div>
            </div>

            <div className="que-item" id="que11">
              <a onClick={changeClass11} className="que-link">
                Is it embarrassing to have a pelvic exam?
                <span className={`${isShow11 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow11 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow11 ? "ans11" : ""}`}>
                <hr />
                <p>
                  A pelvic exam is a simple, painless procedure, and it takes
                  only about five minutes. It's very normal to feel uneasy when
                  you don't know what to expect.
                </p>
              </div>
            </div>

            <div className="que-item" id="que12">
              <a onClick={changeClass12} className="que-link">
                Does a pap smear hurt?
                <span className={`${isShow12 ? "Add_hide" : "add"}`}>
                  &#11167;
                </span>
                <span className={`${isShow12 ? "Remove_show" : "remove"}`}>
                  &#11165;
                </span>
              </a>

              <div className={`answ ${isShow12 ? "ans12" : ""}`}>
                <hr />
                <p>
                  The pap smear may feel uncomfortable, but it's a procedure
                  that's over very quickly.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
