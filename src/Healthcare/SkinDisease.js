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

				<section className="queskin">
					<div className="que-container">
						<div className="heading_que que-itemskin">
							<h2>Frequently Asked Questions on Dermatologist</h2>
						</div>

						<div className="que-itemskin" id="que1">
							<a onClick={changeClass1} className="que-link">
								Why should I visit a Dermatologist?
								<span className={`${isShow1 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow1 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answskin ${isShow1 ? "ans1skin" : ""}`}>
								<p>
									<hr />
									You may have to visit a dermatologist for any hair and skin
									issues you may have, for example, Skin problems in teenagers
									like fungal infection, acne, hair fall etc. You can choose to
									consult a dermatologist as they help bust myths and provide
									correct information regarding various skin diseases and answer
									common questions related to skin and hair.
								</p>
							</div>
						</div>

						<div className="que-itemskin" id="que2">
							<a onClick={changeClass2} className="que-link">
								What are the common problems that a dermatologist treats?
								<span className={`${isShow2 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow2 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answskin ${isShow2 ? "ans2skin" : ""}`}>
								<p>
									<hr />
									The most common problems dermatologists treat are:
									<ul>
										<li>Pimples</li>
										<li>Psoriasis</li>
										<li>Rashes</li>
										<li>Bacterial infections</li>
										<li>Cosmetic procedures like skin peeling</li>
										<li>Hives</li>
										<li>Sunburn</li>
										<li>Itchy skin</li>
										<li>Cold Sores</li>
										<li>Skin cancer</li>
										<li>Warts</li>
										<li>Fungal infections</li>
										<li>Dermatitis</li>
										<li>Hand dermatitis</li>
										<li>Atopic eczema</li>
										<li>Hair fall</li>
									</ul>
									Acne in women can also be due to PCOS. If you have other
									symptoms of PCOS it is recommended to consult a gynaecologist.
								</p>
							</div>
						</div>

						<div className="que-itemskin" id="que3">
							<a onClick={changeClass3} className="que-link">
								Is it safe to consult online?
								<span className={`${isShow3 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow3 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answskin ${isShow3 ? "ans3skin" : ""}`}>
								<p>
									<hr />
									Yes! Your skin specialist online consultation will be
									absolutely safe and secure with MFine. All the information you
									share with your dermatologist will be private. We also ensure
									100% confidentiality during your treatment.
								</p>
							</div>
						</div>

						<div className="que-itemskin" id="que4">
							<a onClick={changeClass4} className="que-link">
								Does a dermatologist treat skin problems in kids?
								<span className={`${isShow4 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow4 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answskin ${isShow4 ? "ans4skin" : ""}`}>
								<p>
									<hr />
									Yes, a dermatologist does treat skin problems in children. If
									your child has conditions like eczema, psoriasis, acne, warts
									or diaper dermatitis (diaper rash), it is advisable to consult
									a skin doctor and get it treated.
								</p>
							</div>
						</div>

						<div className="que-itemskin" id="que5">
							<a onClick={changeClass5} className="que-link">
								Is it necessary to get dermatological treatments?
								<span className={`${isShow5 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow5 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answskin ${isShow5 ? "ans5skin" : ""}`}>
								<p>
									<hr />
									Yes, it is of utmost importance to take care of dermatological
									conditions as they can reflect your overall health. Skin and
									hair, not only have aesthetic appeal but also protect our
									internal organs from getting harmed. Hence, it is essential to
									take care of the skin you live in.
								</p>
							</div>
						</div>

						<div className="que-itemskin" id="que6">
							<a onClick={changeClass6} className="que-link">
								Which doctor should I consult for hair loss?
								<span className={`${isShow6 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow6 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answskin ${isShow6 ? "ans6skin" : ""}`}>
								<p>
									<hr />A dermatologist can treat both skin and hair. You can
									consult a dermatologist for problems such as hair loss.
								</p>
							</div>
						</div>

						<div className="que-itemskin" id="que7">
							<a onClick={changeClass7} className="que-link">
								What is the best vitamin for hair loss?
								<span className={`${isShow7 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow7 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answskin ${isShow7 ? "ans7skin" : ""}`}>
								<p>
									<hr />
									The 5 Best Vitamins for Hair Loss Prevention, Based on
									Research
									<ol>
										<li>Biotin.</li>
										<li>Iron.</li>
										<li>Vitamin C.</li>
										<li>Vitamin D.</li>
										<li>Zinc.</li>
									</ol>
								</p>
							</div>
						</div>

						<div className="que-itemskin" id="que8">
							<a onClick={changeClass8} className="que-link">
								What is the difference between a cosmetologist & a
								dermatologist?
								<span className={`${isShow8 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow8 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answskin ${isShow8 ? "ans8skin" : ""}`}>
								<p>
									<hr />A dermatologist specializes in diagnosing and treating
									all skin-related issues. They prescribe surgical or
									non-surgical treatment for skin diseases. On the other hand,
									cosmetology involves the study of skin, hair and nails.
									Cosmetologists specialize in beauty treatments for the skin,
									nails and hair including hairstyling, hairdressing and nail
									treatments.
								</p>
							</div>
						</div>

						<div className="que-itemskin" id="que9">
							<a onClick={changeClass9} className="que-link">
								Is sun protection required?
								<span className={`${isShow9 ? "Add_hide" : "add"}`}>
									&#11167;
								</span>
								<span className={`${isShow9 ? "Remove_show" : "remove"}`}>
									&#11165;
								</span>
							</a>

							<div className={`answskin ${isShow9 ? "ans9skin" : ""}`}>
								<p>
									<hr />
									Sun protection is essential to reduce the burden of skin
									cancer and other signs of photodamage.
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
