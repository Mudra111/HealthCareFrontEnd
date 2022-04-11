import React, { useState } from "react";
import "./BloodTestBook.css";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

export default function Userlogin() {
	const [box1, setBox1] = useState(" ");
	const [box2, setBox2] = useState(" ");
	const [box3, setBox3] = useState(" ");
	const [box4, setBox4] = useState(" ");
	const [box5, setBox5] = useState(" ");
	const [box6, setBox6] = useState(" ");
	const [box7, setBox7] = useState(" ");
	const [box8, setBox8] = useState(" ");
	const [box9, setBox9] = useState(" ");
	const [box10, setBox10] = useState(" ");
	const [box11, setBox11] = useState(" ");
	const Result = [];
	const Result2 = [];

	// const redirect = useNavigate();

	const [emailfortest, setEmailfortest] = useState();
	const navigate = useNavigate();
	const disBook = () => {
		Result.push(
			box1,
			box2,
			box3,
			box4,
			box5,
			box6,
			box7,
			box8,
			box9,
			box10,
			box11
		);
		// Result.push(box2);
		// Result.push(box3);
		// Result.push(box4);
		// Result.push(box5);
		// Result.push(box6);
		// Result.push(box7);
		// Result.push(box8);
		// Result.push(box9);
		// Result.push(box10);
		// Result.push(box11);
		Result.map((value) => {
			if (value !== " ") {
				Result2.push(value);
			}
		});
		console.log(Result);
		console.log(Result2);
		const arrayResult = Result2.toString();
		Axios.post("http://localhost:3001/bloodtest", {
			ResultTest: arrayResult,
			emailForTest: emailfortest,
		}).then((response) => {
			console.log(response);
			// const TestBloodBooked = response;

			// console.log(TestBloodBooked);
			const TestBloodBooked = response.data;
			// const TestNotBooked = response.data.resultFalse;
			console.log(TestBloodBooked);
			const abc = (TestBloodBooked) => {
				if (TestBloodBooked) {
					alert("Your Tests are booked successfully!!");
					// navigat("/labtest");
					// <Navigate to="/labtest" />;
					navigate("/labtest");
					// redirect("/typesofblood");
				} else {
					// if (TestNotBooked) {
					navigate("/failurOfBTB");
					// }
					// if (TestBloodNotBooked) {
					// navigat("/failurOfBTB");
					// redirect("/donate_money");
					// }
				}
			};
			abc(TestBloodBooked);
		});
	};

	// async function book() {
	// 	var dis = await disBook();
	// 	console.log(dis);
	// }

	return (
		<div className="body">
			<div className="main-form1">
				<div className="head">Book for Blood test</div>
				<br />
				<div className="input">
					<label>
						<b>USERNAME / EMAIL:</b>
					</label>
					<input
						style={{ width: "25vw", padding: "10px", marginLeft: "10px" }}
						// className="inpbox1"
						type="email"
						onChange={(e) => {
							setEmailfortest(e.target.value);
						}}
					/>
				</div>
				<div className="user-det1">
					<h2>Select Reports</h2>
					<br />
					<div className="input">
						<input
							type="checkbox"
							id="1test"
							className="inpbox1"
							onChange={(e) => {
								if (box1 === " ") {
									setBox1("CBC");
								} else {
									setBox1(" ");
								}
							}}
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
							onChange={(e) => {
								if (box2 === " ") {
									setBox2("BMP");
								} else {
									setBox2(" ");
								}
							}}
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
							onChange={(e) => {
								if (box3 === " ") {
									setBox3("CMP");
								} else {
									setBox3(" ");
								}
							}}
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
							onChange={(e) => {
								if (box4 === " ") {
									setBox4("Lipid panel");
								} else {
									setBox4(" ");
								}
							}}
						/>
						<label htmlFor="1test">Lipid panel</label>
					</div>
					<br />
					<div className="input">
						<input
							type="checkbox"
							id="1test"
							className="inpbox1"
							onChange={(e) => {
								if (box5 === " ") {
									setBox5("Thyroid pane4");
								} else {
									setBox5(" ");
								}
							}}
						/>
						<label htmlFor="1test">Thyroid panel</label>
					</div>
					<br />
					<div className="input">
						<input
							type="checkbox"
							id="1test"
							className="inpbox1"
							onChange={(e) => {
								if (box6 === " ") {
									setBox6("CK");
								} else {
									setBox6(" ");
								}
							}}
						/>
						<label htmlFor="1test">Creatine kinase (CK)</label>
					</div>
					<br />
					<div className="input">
						<input
							type="checkbox"
							id="1test"
							className="inpbox1"
							onChange={(e) => {
								if (box7 === " ") {
									setBox7("CK-MB");
								} else {
									setBox7(" ");
								}
							}}
						/>
						<label htmlFor="1test">Creatine kinase-MB (CK-MB)</label>
					</div>
					<br />
					<div className="input">
						<input
							type="checkbox"
							id="1test"
							className="inpbox1"
							onChange={(e) => {
								if (box8 === " ") {
									setBox8("STIs");
								} else {
									setBox8(" ");
								}
							}}
						/>
						<label htmlFor="1test">Sexually transmitted infections(STIs)</label>
					</div>
					<br />
					<div className="input">
						<input
							type="checkbox"
							id="1test"
							className="inpbox1"
							onChange={(e) => {
								if (box9 === " ") {
									setBox9("Coagulation");
								} else {
									setBox9(" ");
								}
							}}
						/>
						<label htmlFor="1test">Coagulation</label>
					</div>
					<br />
					<div className="input">
						<input
							type="checkbox"
							id="1test"
							className="inpbox1"
							onChange={(e) => {
								if (box10 === " ") {
									setBox10("DHEA");
								} else {
									setBox10(" ");
								}
							}}
						/>
						<label htmlFor="1test">dehydroepiandrosterone (DHEA)</label>
					</div>
					<br />
					<div className="input">
						<input
							type="checkbox"
							id="1test"
							className="inpbox1"
							onChange={(e) => {
								if (box11 === " ") {
									setBox11("CRP");
								} else {
									setBox11(" ");
								}
							}}
						/>
						<label htmlFor="1test">C-reactive protein (CRP)</label>
					</div>
				</div>
				<div className="button">
					<button onClick={disBook}>Book Now</button>
				</div>
			</div>	
		</div>
	);
}
