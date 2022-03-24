import React, { useState } from "react";
import Com1 from "./images/Depression.png";
import Com2 from "./images/Diabetes.png";
import Com3 from "./images/COVID.png";
import Com4 from "./images/Fever.png";
import Com5 from "./images/Cough.png";
import Com6 from "./images/Acidity.png";
import Com7 from "./images/Piles.png";
import Com8 from "./images/Headache.png";
import Com9 from "./images/Constipation.png";
import "./CommonSympt.css";

export default function CommonSympt() {
	const [comn1, setComn1] = useState(true);
	const [comn2, setComn2] = useState(false);
	const [comn3, setComn3] = useState(false);
	const [comn4, setComn4] = useState(false);
	const [comn5, setComn5] = useState(false);
	const [comn6, setComn6] = useState(false);
	const [comn7, setComn7] = useState(false);
	const [comn8, setComn8] = useState(false);
	const [comn9, setComn9] = useState(false);

	const ShowCon1 = () => {
		setComn1(true);
		setComn2(false);
		setComn3(false);
		setComn4(false);
		setComn5(false);
		setComn6(false);
		setComn7(false);
		setComn8(false);
		setComn9(false);
	};

	const ShowCon2 = () => {
		setComn2(true);
		setComn1(false);
		setComn3(false);
		setComn4(false);
		setComn5(false);
		setComn6(false);
		setComn7(false);
		setComn8(false);
		setComn9(false);
	};

	const ShowCon3 = () => {
		setComn2(false);
		setComn1(false);
		setComn3(true);
		setComn4(false);
		setComn5(false);
		setComn6(false);
		setComn7(false);
		setComn8(false);
		setComn9(false);
	};

	const ShowCon4 = () => {
		setComn2(false);
		setComn1(false);
		setComn3(false);
		setComn4(true);
		setComn5(false);
		setComn6(false);
		setComn7(false);
		setComn8(false);
		setComn9(false);
	};

	const ShowCon5 = () => {
		setComn2(false);
		setComn1(false);
		setComn3(false);
		setComn4(false);
		setComn5(true);
		setComn6(false);
		setComn7(false);
		setComn8(false);
		setComn9(false);
	};

	const ShowCon6 = () => {
		setComn2(false);
		setComn1(false);
		setComn3(false);
		setComn4(false);
		setComn5(false);
		setComn6(true);
		setComn7(false);
		setComn8(false);
		setComn9(false);
	};

	const ShowCon7 = () => {
		setComn2(false);
		setComn1(false);
		setComn3(false);
		setComn4(false);
		setComn5(false);
		setComn6(false);
		setComn7(true);
		setComn8(false);
		setComn9(false);
	};

	const ShowCon8 = () => {
		setComn2(false);
		setComn1(false);
		setComn3(false);
		setComn4(false);
		setComn5(false);
		setComn6(false);
		setComn7(false);
		setComn8(true);
		setComn9(false);
	};

	const ShowCon9 = () => {
		setComn2(false);
		setComn1(false);
		setComn3(false);
		setComn4(false);
		setComn5(false);
		setComn6(false);
		setComn7(false);
		setComn8(false);
		setComn9(true);
	};

	return (
		<div>
			<div className="ComnSymMain">
				<div className="ComnSymImgConMain">
					<div>
						<button className="commonbtn">
							<img src={Com1} className="comnimg1" onClick={ShowCon1} />
						</button>
						<button className="commonbtn">
							<img src={Com2} className="comnimg2" onClick={ShowCon2} />
						</button>
						<button className="commonbtn">
							<img src={Com3} className="comnimg3" onClick={ShowCon3} />
						</button>
					</div>
					<div>
						<button className="commonbtn">
							<img src={Com4} className="comnimg4" onClick={ShowCon4} />
						</button>
						<button className="commonbtn">
							<img src={Com5} className="comnimg5" onClick={ShowCon5} />
						</button>
						<button className="commonbtn">
							<img src={Com6} className="comnimg6" onClick={ShowCon6} />
						</button>
					</div>
					<div>
						<button className="commonbtn">
							<img src={Com7} className="comnimg7" onClick={ShowCon7} />
						</button>
						<button className="commonbtn">
							<img src={Com8} className="comnimg8" onClick={ShowCon8} />
						</button>
						<button className="commonbtn">
							<img src={Com9} className="comnimg9" onClick={ShowCon9} />
						</button>
					</div>
				</div>
				<div className="commonContent">
					<div className={`CommonContent1 ${comn1 ? "" : "Comn1NotDis"}`}>
						<div className="Confor1">
							<h1>Depression</h1>
							<img src={Com1} className="comnimg1 contentimg1" />
							<h2>Overview</h2>
							<p className="con1font">
								Depression is a mood disorder that causes a persistent feeling
								of sadness and loss of interest. Also called major depressive
								disorder or clinical depression, it affects how you feel, think
								and behave and can lead to a variety of emotional and physical
								problems. You may have trouble doing normal day-to-day
								activities, and sometimes you may feel as if life isn't worth
								living.
							</p>
							<h2>Symptoms</h2>
							<ul className="con1font">
								<li>
									Feelings of sadness, tearfulness, emptiness or hopelessness
								</li>
								<li>
									Angry outbursts, irritability or frustration, even over small
									matters
								</li>
								<li>
									Sleep disturbances, including insomnia or sleeping too much
								</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent2 ${comn2 ? "" : "Comn2NotDis"}`}>
						<div className="Confor2">
							<h1>Diabetes</h1>
							<img src={Com2} className="comnimg2 contentimg2" />
							<h2>Overview</h2>
							<p className="con2font">
								Depression is a mood disorder that causes a persistent feeling
								of sadness and loss of interest. Also called major depressive
								disorder or clinical depression, it affects how you feel, think
								and behave and can lead to a variety of emotional and physical
								problems. You may have trouble doing normal day-to-day
								activities, and sometimes you may feel as if life isn't worth
								living.
							</p>
							<h2>Symptoms</h2>
							<ul className="con2font">
								<li>
									Feelings of sadness, tearfulness, emptiness or hopelessness
								</li>
								<li>
									Angry outbursts, irritability or frustration, even over small
									matters
								</li>
								<li>
									Sleep disturbances, including insomnia or sleeping too much
								</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent3 ${comn3 ? "" : "Comn3NotDis"}`}>
						<div className="Confor3">
							<h1>COVID</h1>
							<img src={Com3} className="comnimg3 contentimg3" />
							<h2>Overview</h2>
							<p className="con3font">
								Depression is a mood disorder that causes a persistent feeling
								of sadness and loss of interest. Also called major depressive
								disorder or clinical depression, it affects how you feel, think
								and behave and can lead to a variety of emotional and physical
								problems. You may have trouble doing normal day-to-day
								activities, and sometimes you may feel as if life isn't worth
								living.
							</p>
							<h2>Symptoms</h2>
							<ul className="con3font">
								<li>
									Feelings of sadness, tearfulness, emptiness or hopelessness
								</li>
								<li>
									Angry outbursts, irritability or frustration, even over small
									matters
								</li>
								<li>
									Sleep disturbances, including insomnia or sleeping too much
								</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent4 ${comn4 ? "" : "Comn4NotDis"}`}>
						<div className="Confor4">
							<h1>Fever</h1>
							<img src={Com4} className="comnimg4 contentimg4" />
							<h2>Overview</h2>
							<p className="con4font">
								Depression is a mood disorder that causes a persistent feeling
								of sadness and loss of interest. Also called major depressive
								disorder or clinical depression, it affects how you feel, think
								and behave and can lead to a variety of emotional and physical
								problems. You may have trouble doing normal day-to-day
								activities, and sometimes you may feel as if life isn't worth
								living.
							</p>
							<h2>Symptoms</h2>
							<ul className="con4font">
								<li>
									Feelings of sadness, tearfulness, emptiness or hopelessness
								</li>
								<li>
									Angry outbursts, irritability or frustration, even over small
									matters
								</li>
								<li>
									Sleep disturbances, including insomnia or sleeping too much
								</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent5 ${comn5 ? "" : "Comn5NotDis"}`}>
						<div className="Confor5">
							<h1>Cough</h1>
							<img src={Com5} className="comnimg5 contentimg5" />
							<h2>Overview</h2>
							<p className="con5font">
								Depression is a mood disorder that causes a persistent feeling
								of sadness and loss of interest. Also called major depressive
								disorder or clinical depression, it affects how you feel, think
								and behave and can lead to a variety of emotional and physical
								problems. You may have trouble doing normal day-to-day
								activities, and sometimes you may feel as if life isn't worth
								living.
							</p>
							<h2>Symptoms</h2>
							<ul className="con5font">
								<li>
									Feelings of sadness, tearfulness, emptiness or hopelessness
								</li>
								<li>
									Angry outbursts, irritability or frustration, even over small
									matters
								</li>
								<li>
									Sleep disturbances, including insomnia or sleeping too much
								</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent6 ${comn6 ? "" : "Comn6NotDis"}`}>
						<div className="Confor6">
							<h1>Acidity</h1>
							<img src={Com6} className="comnimg6 contentimg6" />
							<h2>Overview</h2>
							<p className="con6font">
								Depression is a mood disorder that causes a persistent feeling
								of sadness and loss of interest. Also called major depressive
								disorder or clinical depression, it affects how you feel, think
								and behave and can lead to a variety of emotional and physical
								problems. You may have trouble doing normal day-to-day
								activities, and sometimes you may feel as if life isn't worth
								living.
							</p>
							<h2>Symptoms</h2>
							<ul className="con6font">
								<li>
									Feelings of sadness, tearfulness, emptiness or hopelessness
								</li>
								<li>
									Angry outbursts, irritability or frustration, even over small
									matters
								</li>
								<li>
									Sleep disturbances, including insomnia or sleeping too much
								</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent7 ${comn7 ? "" : "Comn7NotDis"}`}>
						<div className="Confor7">
							<h1>Piles</h1>
							<img src={Com7} className="comnimg7 contentimg7" />
							<h2>Overview</h2>
							<p className="con7font">
								Depression is a mood disorder that causes a persistent feeling
								of sadness and loss of interest. Also called major depressive
								disorder or clinical depression, it affects how you feel, think
								and behave and can lead to a variety of emotional and physical
								problems. You may have trouble doing normal day-to-day
								activities, and sometimes you may feel as if life isn't worth
								living.
							</p>
							<h2>Symptoms</h2>
							<ul className="con7font">
								<li>
									Feelings of sadness, tearfulness, emptiness or hopelessness
								</li>
								<li>
									Angry outbursts, irritability or frustration, even over small
									matters
								</li>
								<li>
									Sleep disturbances, including insomnia or sleeping too much
								</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent8 ${comn8 ? "" : "Comn8NotDis"}`}>
						<div className="Confor8">
							<h1>Headache</h1>
							<img src={Com8} className="comnimg8 contentimg8" />
							<h2>Overview</h2>
							<p className="con8font">
								Depression is a mood disorder that causes a persistent feeling
								of sadness and loss of interest. Also called major depressive
								disorder or clinical depression, it affects how you feel, think
								and behave and can lead to a variety of emotional and physical
								problems. You may have trouble doing normal day-to-day
								activities, and sometimes you may feel as if life isn't worth
								living.
							</p>
							<h2>Symptoms</h2>
							<ul className="con8font">
								<li>
									Feelings of sadness, tearfulness, emptiness or hopelessness
								</li>
								<li>
									Angry outbursts, irritability or frustration, even over small
									matters
								</li>
								<li>
									Sleep disturbances, including insomnia or sleeping too much
								</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent9 ${comn9 ? "" : "Comn9NotDis"}`}>
						<div className="Confor9">
							<h1>Constipation</h1>
							<img src={Com9} className="comnimg9 contentimg9" />
							<h2>Overview</h2>
							<p className="con9font">
								Chronic constipation is infrequent bowel movements or difficult
								passage of stools that persists for several weeks or longer.
								<br />
								Though occasional constipation is very common, some people
								experience chronic constipation that can interfere with their
								ability to go about their daily tasks. Chronic constipation may
								also cause people to strain excessively in order to have a bowel
								movement.
							</p>
							<h2>Symptoms</h2>
							<ul className="con9font">
								<li>
									Feelings of sadness, tearfulness, emptiness or hopelessness
								</li>
								<li>
									Angry outbursts, irritability or frustration, even over small
									matters
								</li>
								<li>
									Sleep disturbances, including insomnia or sleeping too much
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
