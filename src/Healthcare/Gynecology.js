import React, { useState } from "react";
import GynecImg from "./images/gynecology.jpeg";
import "./Gynecology.css";
import sp1Gyn from "./images/sp1Gyn.jpg";
import sp2Gyn from "./images/sp2Gyn.jpg";
import sp3Gyn from "./images/sp3Gyn.jpg";

export default function Gynecology() {
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
				<div className="gyn_heading_div">
					<h1 className="gyneco_heading">Obstetrics and Gynecology</h1>
				</div>
				<div className="overview_gyn">
					<img src={GynecImg} alt="" className="gynecologyImg" />
					<div className="overviewCon">
						<h2 className="ovrconheading">Overview</h2>
						<hr />
						<br />
						<p>
							When you come to the HealthCare Clinic Department of Obstetrics
							and Gynecology, you'll find support on your lifelong journey from
							adolescence to menopause and beyond. Its team-based approach
							includes you as a partner in care, healing, hope and solutions to
							complex problems.
						</p>
						<br />
						<br />
						<p>
							Your experience in the Department of Obstetrics and Gynecology is
							guided by a team of experts. You'll receive an individualized care
							plan based on your goals and a thorough evaluation using the
							latest diagnostic technology. The team may include doctors,
							surgeons, proceduralists, certified nurse midwives, physician
							assistants, nurse practitioners, sonographers, embryologists and a
							dedicated nursing team.
						</p>
						<button className="ReqAppo">Request an Appointment</button>
					</div>
				</div>
				<div className="gyn_specialists">
					<div className="gyn_sp_heading">
						<h2>Specialists</h2>
					</div>
					<div className="gyn_sp_1_main">
						<h2 className="sp_1_name">Dr. Divyesh Shukla</h2>
						<div className="forS_size">
							<p className="sp1n">
								(Consultant Gynaecological endoscopic surgeon)
							</p>
							<div className="gy_ImgCon">
								<img src={sp1Gyn} alt="" className="sp1Img" />
								<div className="sp_1_con">
									<table className="sp1Tab">
										<tr>
											<td>
												<b>Qualification</b>
											</td>
											<td>: </td>
											<td>
												MBBS. MD. Obstetrics & Gynaecology 1991. Diploma in
												advance Gynaecological endoscopic surgeries, University
												of Kiel, Kiel, Germany 2000
											</td>
										</tr>
										<tr>
											<td>
												<b>Current Position</b>
											</td>
											<td>: </td>
											<td>
												Director HealthCare Hospital, (FOGSI recognised & Karl
												Storz supported training center in Gynaecological
												endoscopy)
											</td>
										</tr>
									</table>
								</div>
							</div>
							<div className="sp1Qua">
								<h5 className="sp1quaHead">Teaching Experience</h5>
								<ul className="sp1quaDet">
									<li>Fourth year resident. (Jan-Dec 1991)</li>
									<li>
										Assistant Professor - P.S. Medical College, Karamsad.(
										1.1.92-30.8.93 )
									</li>
									<li>
										Assistant Professor - Government Medical College, Surat.
										(1.9.93-19.10.95)
									</li>
									<li>
										Assistant Professor - Medical College Baroda, Baroda.
										(20.10.95-13.9.03)
									</li>
									<li>
										Hon Associate Professor & Consultant Gynaecological
										endoscopic surgeon, P. S. Medical College, Karamsad. (From
										1.1.04 to 31.12.2007)
									</li>
								</ul>
								<h5 className="sp1quaHead">
									FOGSI (Federation of Obstetrics and Gynaecological Societies
									of India) affiliation-
								</h5>
								<ul className="sp1quaDet">
									<li>Secretary of Baroda OB/GYN society (96-97)</li>
									<li>President of Baroda OB/GYN society (98-99)</li>
									<li>
										Representative to FOGSI (2000,01, 02, 03,04,05,06,07,08,
										09,10, 11, 12)
									</li>
									<li>Member Endoscopic committee of FOGSI (2018)</li>
									<li>Member Endoscopic Committee of AOFOG (2017, 18)</li>
								</ul>
								<h5 className="sp1quaHead">Special Interest</h5>
								<ul className="sp1quaDet">
									<li>
										Ultrasonography, Endocrinology & infertility, High risk
										pregnancy management
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="breakLine"></div>
					<div className="gyn_sp_1_main">
						<h2 className="sp_1_name">Dr. Shilpi Shukla</h2>
						<div className="forS_size">
							<p className="sp1n">
								(Consultant Obstetrician & Gynaecologist & Infertility
								specialist)
							</p>
							<div className="gy_ImgCon">
								<img src={sp2Gyn} alt="" className="sp1Img" />
								<div className="sp_1_con">
									<table className="sp1Tab">
										<tr>
											<td>
												<b>Qualification</b>
											</td>
											<td>: </td>
											<td>MBBS. MD. Obstetrics & Gynaecology 1990.</td>
										</tr>
										<tr>
											<td>
												<b>Speciality</b>
											</td>
											<td>: </td>
											<td>Obstetrics & Gynaecology, IVF Specialist</td>
										</tr>
									</table>
								</div>
							</div>
							<div className="sp1Qua">
								<h5 className="sp1quaHead">
									Consultant Obstetrician & Gynaecologist & Infertility
									specialist at-
								</h5>
								<ul className="sp1quaDet">
									<li>
										Director-HealthCare Multispeciality hospital, a tertiary
										care centre in Gynaecology & Paediatrics.
									</li>
								</ul>
								<h5 className="sp1quaHead">Additional activities</h5>
								<ul className="sp1quaDet">
									<li>Conducted many diagnostic & surgical camps</li>
									<li>Addressed many social women & adolescent groups.</li>
									<li>Attended many conferences at state & national level</li>
									<li>Many TV talks on women related issues.</li>
									<li>Organized workshops & conferences</li>
									<li>
										Lectures on Laparoscopy & Hysteroscopy for trainees during
										training session.
									</li>
								</ul>
								<h5 className="sp1quaHead">Special interest in practice</h5>
								<ul className="sp1quaDet">
									<li>High risk obstetrics</li>
									<li>Infertility & IVF</li>
								</ul>
								<h5 className="sp1quaHead">Scientific papers presented-</h5>
								<ul className="sp1quaDet">
									<li>
										ISGE Dubai laparoscopic management of complication of 2nd
										trimester pregnancy complication, uterine & bladder
										perforation. May 2014
									</li>
									<li>
										Guest lecture on the topic of “Endometrial polyps, 1st Gyan
										Lap 2015, Vadodara.
									</li>
									<li>
										Guest Lecture on Safe practice in Hysteroscopic surgeries,
										ISGE Kenya Aug 2015
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="breakLine"></div>
					<div className="gyn_sp_1_main">
						<h2 className="sp_1_name">Dr. Parul Valia</h2>
						<div className="forS_size">
							<p className="sp1n">
								D.ch(C.P.S Bombay, April 1984), M.D.(Pediatrics)(Bombay
								University, October 1984)
							</p>
							<div className="gy_ImgCon">
								<img src={sp3Gyn} alt="" className="sp1Img" />
								<div className="sp_1_con">
									<table className="sp1Tab">
										<tr>
											<td>
												<b>Qualification</b>
											</td>
											<td>: </td>
											<td>M.D; D.Ch; PGD- DN</td>
										</tr>
										<tr>
											<td>
												<b>Speciality</b>
											</td>
											<td>: </td>
											<td>Paediatrics</td>
										</tr>
									</table>
								</div>
							</div>
							<div className="sp1Qua">
								<h5 className="sp1quaHead">Experience</h5>
								<ul className="sp1quaDet">
									<li>
										In private practice for 27 years, having NICU, PICU since 14
										years, having development centre since 13 years.
									</li>
								</ul>
								<h5 className="sp1quaHead">Speciality Interest</h5>
								<ul className="sp1quaDet">
									<li>Developmental Paediatric, Genetics.</li>
								</ul>
								<h5 className="sp1quaHead">Work Experience</h5>
								<ul className="sp1quaDet">
									<li>
										Held post as President & Secretary IAP Baroda, Secretary NNF
										Gujarat state branch, convenor at developmental meets.
									</li>
								</ul>
								<h5 className="sp1quaHead">Publications</h5>
								<ul className="sp1quaDet">
									<li>
										Papers in National & state conferences, lectures at state
										level & local level conferences
									</li>
								</ul>
								<h5 className="sp1quaHead">Associations and Memberships</h5>
								<ul className="sp1quaDet">
									<li>
										Life membership of IAP (National), IAP (Gujarat), NNF
										(National), NNF (Gujarat), AOP (Baroda), voluntary work at
										Arpan (NGO), Dhanvantari school for special children (NGO -
										Bhuj).
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="breakLine"></div>
				<section className="que">
					<div className="que-container">
						<div className="heading_que que-item">
							<h2>Frequently Asked Questions on Gynecologist Near Me</h2>
						</div>
						<div className="que-item" id="que1">
							<a onClick={changeClass1} className="que-link">
								What are some questions a gynaecologist asks?
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
									A gynaecologist may ask you questions about the following
									subjects:
									<ul>
										<li>
											Medical history of breast cancers or any other cancer in
											your family
										</li>
										<li>
											Sexuality: if you are sexually active/inactive, sexual
											partner/s
										</li>
										<li>
											Periods: how long the menstrual cycle typically lasts, how
											heavy or light menstrual flow was etc. Pain during
											periods, if any Contraceptives etc.
										</li>
									</ul>
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
