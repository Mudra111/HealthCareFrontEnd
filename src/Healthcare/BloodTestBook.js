import React, { useState } from "react";
import "./BloodTestBook.css";
import { Link } from "react-router-dom";

export default function Userlogin() {
	const [box1, setBox1] = useState();
	const [box2, setBox2] = useState();
	const [box3, setBox3] = useState();
	const [box4, setBox4] = useState();
	const [box5, setBox5] = useState();
	const [box6, setBox6] = useState();
	const [box7, setBox7] = useState();
	const [box8, setBox8] = useState();
	const [box9, setBox9] = useState();
	const [box10, setBox10] = useState();
	const [box11, setBox11] = useState();
	return (
		<div className="body">
			<div className="main-form1">
				<div className="head">Book for Blood test</div>
				<form action="#">
					<div className="user-det1">
						<h2>Select Reports</h2>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBox1("CBC")}
							/>
							<label htmlFor="1test">Complete blood count(CBC)</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								value="BMP"
								onChange={(e) => setBox2("BMP")}
							/>
							<label htmlFor="1test">Basic metabolic panel(BMP)</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								value="CMP"
								onChange={(e) => setBox3("CMP")}
							/>
							<label htmlFor="1test">Comprehensive metabolic panel(CMP)</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								value="Lipid panel"
								onChange={(e) => setBox4("Lipid panel")}
							/>
							<label htmlFor="1test">Lipid panel</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBox5("Thyroid panel")}
							/>
							<label htmlFor="1test">Thyroid panel</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBox6("CK")}
							/>
							<label htmlFor="1test">Creatine kinase (CK)</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBox7("CK-MB")}
							/>
							<label htmlFor="1test">Creatine kinase-MB (CK-MB)</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBox8("STIs")}
							/>
							<label htmlFor="1test">
								Sexually transmitted infections(STIs)
							</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBox9("Coagulation")}
							/>
							<label htmlFor="1test">Coagulation</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBox10("DHEA")}
							/>
							<label htmlFor="1test">dehydroepiandrosterone (DHEA)</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBox11("CRP")}
							/>
							<label htmlFor="1test">C-reactive protein (CRP)</label>
						</div>
					</div>

					<div className="button">
						<button>Book Now</button>
					</div>
				</form>
			</div>
		</div>
	);
}
