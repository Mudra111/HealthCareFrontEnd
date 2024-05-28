import React, { useState } from "react";
import "./Gynecology.css";
import "./General.css";
import sp1Gen from "./images/general-sp1.png";
import sp2Gen from "./images/general-sp2.png";
import sp3Gen from "./images/general-sp3.png";
import { Link } from "react-router-dom";

export default function General() {
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
				<div className="gen_heading_div">
					<h1 className="gen_heading">General Disease</h1>
				</div>

				<div className="overview_gen">
					{/*<img src={GynecImg} alt="" className="gynecologyImg" />*/}
					<div className="overviewCon_gen">
						<h2 className="ovrconheading_gen">Overview</h2>
						<hr />
						<br />
						<p>
							When you come to the HealthCare Clinic Department of General
							Disease, you'll find support for your acute illnesses.
						</p>
						<br />
						<br />
						<p>
							Our General physicians are trained to provide general healthcare
							services to people of all ages, including adults, children,
							adolescents and children. General physicians are knowledgeable in
							all branches of medicine, but if someone needs specialized care,
							they will refer you to a specialist doctor who'd provide you with
							the care you need.
						</p>
						<Link to="/online_consult">
							{" "}
							<button className="ReqAppo_gen">Request an Appointment</button>
						</Link>
					</div>
				</div>

				<div className="gen_specialists">
					<div className="gen_sp_heading">
						<h2>Specialists</h2>
					</div>
					<div className="gen_sp_1_main">
						<div>
							<div className="doctors_gen">
								<h2 className="sp_1_name_gen">Dr. Aman Kumar</h2>
								<div className="forS_size_gen">
									<p className="sp1n_gen">(General Physician)</p>
									<div className="gen_ImgCon">
										<img src={sp1Gen} alt="" className="sp1Imggen" />
										<div className="sp_1_congen">
											<table className="sp1Tabgen">
												<tr>
													<td className="tdatagen">
														<b>Qualification</b>
													</td>
													<td>: </td>
													<td>MBBS, MD</td>
												</tr>
												<tr>
													<td className="tdatagen">
														<b>Experience</b>
													</td>
													<td>: </td>
													<td>29 years +</td>
												</tr>
											</table>
										</div>
									</div>

									<div className="sp1Quagen">
										<h5 className="sp1quaHead_gen">Work Experience</h5>
										<ul className="sp1quaDet_gen">
											<li>
												Practising Medicine for the last 29 yrs. Trained &
												Worked under Eminent Teachers like Prof. Dr.A.M.Selvaraj
												& Prof. S.M.Saleem
											</li>
											<li>
												1997- 2004 - Cheif Medical Officer at St. Antony's
												Hospital, Madhavaram, Chennai.
											</li>
											<li>
												2004 to till date - Cheif Medical Officer at Bharath
												Heavy Electricals Ltd. Corporate Office Dispensary,
												Teynampet, Chennai.
											</li>
											<li>
												2006 to Till date - Consultant Physician at Apollo Heart
												Centre, Chennai
											</li>
										</ul>
										<h5 className="sp1quaHead_gen">Awards And Achievements</h5>
										<ul className="sp1quaDet_gen">
											<li>
												Life time Achievement Award from LION'S CLUB - Periamet,
												Chennai, Tamil Nadu.
											</li>
										</ul>
										<h5 className="sp1quaHead_gen">Professional Memberships</h5>
										<ul className="sp1quaDet_gen">
											<li>MBBS- Madras Medical College, Chennai- 1989</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/*<div className='breakLine'></div>*/}

					<div className="gen_sp_1_main">
						<div>
							<div className="doctors_gen">
								<h2 className="sp_1_name_gen">Dr. Chandrasekar Chandilya</h2>
								<div className="forS_size_gen">
									<p className="sp1n_gen">(General Physician)</p>
									<div className="gen_ImgCon">
										<img src={sp2Gen} alt="" className="sp1Imggen" />

										<div className="sp_1_congen">
											<table className="sp1Tabgen">
												<tr>
													<td>
														<b>Qualification</b>
													</td>
													<td>: </td>
													<td>MD (Internal Medicine); FRCP</td>
												</tr>
												<tr>
													<td>
														<b>Experience</b>
													</td>
													<td>: </td>
													<td>29 years +</td>
												</tr>
											</table>
										</div>
									</div>

									<div className="sp1Quagen">
										<h5 className="sp1quaHead_gen">Work Experience</h5>
										<ul className="sp1quaDet_gen">
											<li>Working in Apollo Hospitals since last Assignment</li>
										</ul>
										<h5 className="sp1quaHead_gen">Awards And Achievements</h5>
										<ul className="sp1quaDet_gen">
											<li>
												Former Head of the Department of Internal Medicine,
												Apollo Hospitals, Chennai
											</li>
											<li>
												Chief Physician-Apollo Hospitals, Colombo (SRILANKA)
												from 2002-2007
											</li>
											<li>Personal physician to Governor of Tamilnadu,</li>
											<li>
												President of Srilanka top Industrialists, Film
												fraternity & Dignitaries & Ambassador's
											</li>
										</ul>
										<h5 className="sp1quaHead_gen">Professional Memberships</h5>
										<ul className="sp1quaDet_gen">
											<li>
												Elected Fellow of the college of Independent Medical
												practitioners, Madras in March 1981.
											</li>
											<li>
												Life Member, Association of Physicians of India (API)
											</li>
											<li>
												Life Member, Indian Society of Critical Care Medicine.
											</li>
											<li>Fellow of Royal College of Physicians (Glasgow)</li>
											<li>
												Fellow of the college of Independent practitioners.
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/*<div className='breakLine'></div>*/}

					<div className="gen_sp_1_main">
						<div>
							<div className="doctors_gen">
								<h2 className="sp_1_name_gen">Dr. Arup Sahu</h2>
								<div className="forS_size_gen">
									<p className="sp1n_gen">(General Physician)</p>
									<div className="gen_ImgCon">
										<img src={sp3Gen} alt="" className="sp1Imggen" />
										<div className="sp_1_congen">
											<table className="sp1Tabgen">
												<tr>
													<td>
														<b>Qualification</b>
													</td>
													<td>: </td>
													<td>MD (Med)</td>
												</tr>
												<tr>
													<td>
														<b>Experience</b>
													</td>
													<td>: </td>
													<td>19 years +</td>
												</tr>
											</table>
										</div>
									</div>

									<div className="sp1Quagen">
										<h5 className="sp1quaHead_gen">Work Experience</h5>
										<ul className="sp1quaDet_gen">
											<li>Suraksha Hospital, Kolkata 2002</li>
											<li>Working in Apollo Hospitals since last Assignment</li>
										</ul>
										<h5 className="sp1quaHead_gen">Awards And Achievements</h5>
										<ul className="sp1quaDet_gen">
											<li>
												National Scholarshop, National Science Talent
												Scholarship, National Science Extempore talk award(3rs,
												W.B)
											</li>
										</ul>
										<h5 className="sp1quaHead_gen">Professional Memberships</h5>
										<ul className="sp1quaDet_gen">
											<li>Life member, Association of Physicians of India</li>
											<li>
												Executive committee member of 41st indian society of
												haematology and transfusion medicine{" "}
											</li>
											<li>Executive committee member - ISCCM </li>
											<li>MNAMS - Awarded by National Board of examination</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="breakLine_gen"></div>

				<section className="que_gen">
					<div className="que-containergen">
						<div className="heading_queGen que-item_gen">
							<h2>Frequently Asked Questions on General Physician Near Me</h2>
						</div>
						<div className="que-item_gen" id="que1">
							<a onClick={changeClass1} className="que-link_gen">
								What does a General Physician treat?
								<span className={`${isShow1 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow1 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow1 ? "ans1gen" : ""}`}>
								<p>
									<hr />A General Physician would treat acute
									non-life-threatening diseases such as:
									<ul>
										<li>Cough & cold</li>
										<li>Flu</li>
										<li>Fever</li>
										<li>Headaches</li>
										<li>Wounds and infections</li>
										<li>Dehydration</li>
										<li>
											Tropical diseases such as malaria, cholera, dengue,
											typhoid
										</li>
										<li>Asthma</li>
										<li>Migraines etc.</li>
									</ul>
									<div>
										Apart from providing preventive healthcare services like
										vaccinations and health assessments/checkups, General
										Physicians are also trained to identify health conditions
										that require surgical intervention or expert care; in such
										cases, they'd refer you to a specialist doctor or surgeon
										who can provide you with specialized care.
									</div>
								</p>
							</div>
						</div>

						<div className="que-item_gen" id="que2">
							<a onClick={changeClass2} className="que-link_gen">
								What does General Medicine include?
								<span className={`${isShow2 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow2 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow2 ? "ans2gen" : ""}`}>
								<p>
									<hr />
									General Medicine deals with all acute non-life-threatening
									diseases, early detection/prevention and referral to
									specialized doctors for patients with life-threatening health
									conditions. Their primary treatment does not involve surgery.
								</p>
							</div>
						</div>

						<div className="que-item_gen" id="que3">
							<a onClick={changeClass3} className="que-link_gen">
								Why should you visit a General Physician?
								<span className={`${isShow3 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow3 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow3 ? "ans3gen" : ""}`}>
								<p>
									<hr />A General Physician is a primary health care provider
									who specializes in treating a little bit of every disease or
									health condition. With a GP, you can discuss various health
									concerns, such as managing blood pressure, diabetes, fever,
									headache, pains, diarrhoea, vomiting etc. Visiting a GP can
									save you loads of money in the long term as it reduces your
									overall chance of acquiring life-threatening diseases.
									Furthermore, a GP would also guide you to the right specialist
									doctor if you need to see one, thereby saving you time, energy
									and money.
								</p>
							</div>
						</div>

						<div className="que-item_gen" id="que4">
							<a onClick={changeClass4} className="que-link_gen">
								When should you visit a General Physician?
								<span className={`${isShow4 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow4 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow4 ? "ans4gen" : ""}`}>
								<p>
									<hr />
									Visiting a General Physician is the first step towards
									understanding and diagnosing your health condition. A GP will
									give you the best advice and suggestions regarding your health
									condition. You should visit a General Physician if you have a
									temperature, cough, cold, infection, pain, diarrhoea,
									vomiting, or feeling weak or lethargic.
								</p>
							</div>
						</div>

						<div className="que-item_gen" id="que5">
							<a onClick={changeClass5} className="que-link_gen">
								What is the difference between a general practitioner and a
								physician?
								<span className={`${isShow5 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow5 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow5 ? "ans5gen" : ""}`}>
								<p>
									<hr />A General Physician is otherwise also known as a General
									Practitioner.
								</p>
							</div>
						</div>

						<div className="que-item_gen" id="que6">
							<a onClick={changeClass6} className="que-link_gen">
								Is a physician higher than a doctor?
								<span className={`${isShow6 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow6 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow6 ? "ans6gen" : ""}`}>
								<p>
									<hr />
									Although a doctor is otherwise also called a physician, it is
									important to differentiate physicians from doctors providing
									homeopathic, ayurvedic care or those practicing Unani
									medicine. Most physicians/doctors providing allopathic
									medicine possess a primary MBBS qualification.
								</p>
							</div>
						</div>

						<div className="que-item_gen" id="que7">
							<a onClick={changeClass7} className="que-link_gen">
								What things must be considered to find the best general
								physician in the city?
								<span className={`${isShow7 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow7 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow7 ? "ans7gen" : ""}`}>
								<p>
									<hr />
									Before finding the best General Physician, you need to
									consider the following factors:
									<ul>
										<li>Educational qualification</li>
										<li>Work experience </li>
										<li>Gender</li>
										<li>Consulting hours</li>
										<li>Ratings & review</li>
										<li>Consultation fee</li>
										<li>Review from patients, friends or family members etc</li>
									</ul>
								</p>
							</div>
						</div>

						<div className="que-item_gen" id="que8">
							<a onClick={changeClass8} className="que-link_gen">
								Can a General Practitioner perform surgery?
								<span className={`${isShow8 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow8 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow8 ? "ans8gen" : ""}`}>
								<p>
									<hr />
									General Physicians treat a wide range of every disease or
									health condition. They may prescribe medications or refer you
									to specialist doctors if the need arises. They may perform
									small operations but not major surgeries.
								</p>
							</div>
						</div>

						<div className="que-item_gen" id="que9">
							<a onClick={changeClass9} className="que-link_gen">
								Which doctor is best for a girl?
								<span className={`${isShow9 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow9 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow9 ? "ans9gen" : ""}`}>
								<p>
									<hr />
									There are no hard and fast rules as to who's the best doctor.
									But here are some useful suggestions for women depending on
									the health problems:
									<ul>
										<li>General Physician</li>
										<li>
											Gynaecologists who provide care pertaining to women's
											health.
										</li>
									</ul>
								</p>
							</div>
						</div>

						<div className="que-item_gen" id="que10">
							<a onClick={changeClass10} className="que-link_gen">
								Can a woman be a doctor?
								<span className={`${isShow10 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow10 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow10 ? "ans10gen" : ""}`}>
								<p>
									<hr />
									Yes. They are equally competent to any other doctor. There is
									a scarcity of women doctors who must be encouraged to take up
									medicine as their profession.
								</p>
							</div>
						</div>

						<div className="que-item_gen" id="que11">
							<a onClick={changeClass11} className="que-link_gen">
								Do primary care doctors do pap smears?
								<span className={`${isShow11 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow11 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow11 ? "ans11gen" : ""}`}>
								<p>
									<hr />
									Yes. Many physicians, especially those in the primary health
									care sectors do pap smears and perform breast examinations.
									But some may also refer you to a gynaecologist.
								</p>
							</div>
						</div>

						<div className="que-item_gen" id="que12">
							<a onClick={changeClass12} className="que-link_gen">
								Is a doctor obligated to see a patient?
								<span className={`${isShow12 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow12 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answ_gen ${isShow12 ? "ans12gen" : ""}`}>
								<p>
									<hr />
									Once a doctor-patient relationship is established and the
									treatment started, doctors do have a legal and moral
									obligation to adhere to a standard of reasonable care.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
