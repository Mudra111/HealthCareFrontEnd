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
								Diabetes mellitus refers to a group of diseases that affect how
								your body uses blood sugar (glucose). Glucose is vital to your
								health because it's an important source of energy for the cells
								that make up your muscles and tissues. It's also your brain's
								main source of fuel.
							</p>
							<h2>Symptoms</h2>
							<ul className="con2font">
								<li>Increased thirst</li>
								<li>Frequent urination</li>
								<li>Extreme hunger</li>
								<li>Unexplained weight loss</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent3 ${comn3 ? "" : "Comn3NotDis"}`}>
						<div className="Confor3">
							<h1>COVID</h1>
							<img src={Com3} className="comnimg3 contentimg3" />
							<h2>Overview</h2>
							<p className="con3font">
								Coronaviruses are a family of viruses that can cause illnesses
								such as the common cold, severe acute respiratory syndrome
								(SARS) and Middle East respiratory syndrome (MERS). In 2019, a
								new coronavirus was identified as the cause of a disease
								outbreak that originated in China.
							</p>
							<h2>Symptoms</h2>
							<ul className="con3font">
								<li>Fever</li>
								<li>Cough</li>
								<li>Tiredness</li>
								<li>Shortness of breath or difficulty breathing</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent4 ${comn4 ? "" : "Comn4NotDis"}`}>
						<div className="Confor4">
							<h1>Fever</h1>
							<img src={Com4} className="comnimg4 contentimg4" />
							<h2>Overview</h2>
							<p className="con4font">
								A fever is a temporary increase in your body temperature, often
								due to an illness. Having a fever is a sign that something out
								of the ordinary is going on in your body.Fevers generally go
								away within a few days. A number of over-the-counter medications
								lower a fever, but sometimes it's better left untreated. Fever
								seems to play a key role in helping your body fight off a number
								of infections.
							</p>
							<h2>Symptoms</h2>
							<ul className="con4font">
								<li>Sweating</li>
								<li>Chills and shivering</li>
								<li>Headache</li>
								<li>Muscle aches</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent5 ${comn5 ? "" : "Comn5NotDis"}`}>
						<div className="Confor5">
							<h1>Common cold</h1>
							<img src={Com5} className="comnimg5 contentimg5" />
							<h2>Overview</h2>
							<p className="con5font">
								The common cold is a viral infection of your nose and throat
								(upper respiratory tract). It's usually harmless, although it
								might not feel that way. Many types of viruses can cause a
								common cold.
							</p>
							<h2>Symptoms</h2>
							<ul className="con5font">
								<li>Runny or stuffy nose</li>
								<li>Sore throat</li>
								<li>Cough</li>
								<li>Congestion</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent6 ${comn6 ? "" : "Comn6NotDis"}`}>
						<div className="Confor6">
							<h1>Acidity</h1>
							<img src={Com6} className="comnimg6 contentimg6" />
							<h2>Overview</h2>
							<p className="con6font">
								Acidity is described in terms of the pH value of a substance.
								The pH value ranges from 0 to 14 and is an indication of the
								acidity or basicity of an aqueous solution. A value of zero
								indicates highly acidic, a value of 7 indicates neutrality and a
								pH of 14 signifies highly basic or alkaline. Water has a pH
								value of 7.Acidity in the stomach is the result of excess
								gastric acid production that may cause heartburn and other
								problems.
							</p>
							<h2>Symptoms</h2>
							<ul className="con6font">
								<li>Burning sensation in the stomach</li>
								<li>Pain in the upper abdominal area</li>
								<li>Sour taste in mouth</li>
								<li>
									Excessive belching and sometimes sour sensation during
									belching
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
								Piles are swollen veins in your anus and lower rectum, similar
								to varicose veins. Hemorrhoids can develop inside the rectum
								(internal hemorrhoids) or under the skin around the anus
								(external hemorrhoids).
							</p>
							<h2>Symptoms</h2>
							<ul className="con7font">
								<li>Itching or irritation in your anal region</li>
								<li>Pain or discomfort</li>
								<li>Swelling around your anus</li>
							</ul>
						</div>
					</div>
					<div className={`CommonContent8 ${comn8 ? "" : "Comn8NotDis"}`}>
						<div className="Confor8">
							<h1>Migraine</h1>
							<img src={Com8} className="comnimg8 contentimg8" />
							<h2>Overview</h2>
							<p className="con8font">
								A migraine is a headache that can cause severe throbbing pain or
								a pulsing sensation, usually on one side of the head. It's often
								accompanied by nausea, vomiting, and extreme sensitivity to
								light and sound. Migraine attacks can last for hours to days,
								and the pain can be so severe that it interferes with your daily
								activities.
							</p>
							<h2>Symptoms</h2>
							<ul className="con8font">
								<li>Constipation</li>
								<li>Mood changes, from depression to euphoria</li>
								<li>Food cravings</li>
								<li>Neck stiffness</li>
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
								<li>Passing fewer than three stools a week</li>
								<li>Having lumpy or hard stools</li>
								<li>Straining to have bowel movements</li>
								<li>
									Feeling as though you can't completely empty the stool from
									your rectum
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
