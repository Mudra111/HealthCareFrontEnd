import React, { useState } from "react";
import "./ScansBook.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Userlogin() {
	const [boxscan1, setBoxscan1] = useState(" ");
	const [boxscan2, setBoxscan2] = useState(" ");
	const [boxscan3, setBoxscan3] = useState(" ");
	const [boxscan4, setBoxscan4] = useState(" ");
	const [boxscan5, setBoxscan5] = useState(" ");
	const [boxscan6, setBoxscan6] = useState(" ");
	const [boxscan7, setBoxscan7] = useState(" ");
	const [boxscan8, setBoxscan8] = useState(" ");
	const [boxscan9, setBoxscan9] = useState(" ");
	const [boxscan10, setBoxscan10] = useState(" ");
	const [boxscan11, setBoxscan11] = useState(" ");
	const [boxscan12, setBoxscan12] = useState(" ");
	const [boxscan13, setBoxscan13] = useState(" ");
	const [boxscan14, setBoxscan14] = useState(" ");
	const [boxscan15, setBoxscan15] = useState(" ");

	return (
		<div className="body">
			<div className="main-form1">
				<div className="head">Book Scans & X-Rays</div>
				<br />
				<div className="input">
					<label>
						<b>USERNAME / EMAIL:</b>
					</label>
					<input
						style={{ width: "25vw", padding: "10px", marginLeft: "10px" }}
						// className="inpbox1"
						type="email"
						// onChange={(e) => {
						// 	setScanEmailfortest(e.target.value);
						// }}
					/>
				</div>
				<form action="#">
					<div className="user-det1">
						<h2>Select Reports</h2>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan1 === " ") {
										setBoxscan1("MRI");
									} else {
										setBoxscan1(" ");
									}
								}}
							/>
							<label htmlFor="1test">MRI</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								value="BMP"
								onChange={(e) => {
									if (boxscan2 === " ") {
										setBoxscan2("3Tesla MRI");
									} else {
										setBoxscan2(" ");
									}
								}}
							/>
							<label htmlFor="1test">3Tesla MRI</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								value="CMP"
								onChange={(e) => {
									if (boxscan3 === " ") {
										setBoxscan3("1.5 Tesla MRI");
									} else {
										setBoxscan3(" ");
									}
								}}
							/>
							<label htmlFor="1test">1.5 Tesla MRI</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								value="Lipid panel"
								onChange={(e) => {
									if (boxscan4 === " ") {
										setBoxscan4("MRI Cartigram");
									} else {
										setBoxscan4(" ");
									}
								}}
							/>
							<label htmlFor="1test">MRI Cartigram</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan5 === " ") {
										setBoxscan5("Fetal MRI");
									} else {
										setBoxscan5(" ");
									}
								}}
							/>
							<label htmlFor="1test">Fetal MRI</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan6 === " ") {
										setBoxscan6("Fetal ECHO");
									} else {
										setBoxscan6(" ");
									}
								}}
							/>
							<label htmlFor="1test">Fetal ECHO</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan7 === " ") {
										setBoxscan7("CT Scan");
									} else {
										setBoxscan7(" ");
									}
								}}
							/>
							<label htmlFor="1test">CT Scan</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan8 === " ") {
										setBoxscan8("3D / 4D Ultrasound");
									} else {
										setBoxscan8(" ");
									}
								}}
							/>
							<label htmlFor="1test">3D / 4D Ultrasound</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan9 === " ") {
										setBoxscan9("Non invasive CT Angiography");
									} else {
										setBoxscan9(" ");
									}
								}}
							/>
							<label htmlFor="1test">Non invasive CT Angiography</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan10 === " ") {
										setBoxscan10("CT Coronary Angiography");
									} else {
										setBoxscan10(" ");
									}
								}}
							/>
							<label htmlFor="1test">CT Coronary Angiography</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan11 === " ") {
										setBoxscan11("Colour Doppler");
									} else {
										setBoxscan11(" ");
									}
								}}
							/>
							<label htmlFor="1test">Colour Doppler</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan12 === " ") {
										setBoxscan12("Penile Doppler");
									} else {
										setBoxscan12(" ");
									}
								}}
							/>
							<label htmlFor="1test">Penile Doppler</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan13 === " ") {
										setBoxscan13("Digital X-Ray");
									} else {
										setBoxscan13(" ");
									}
								}}
							/>
							<label htmlFor="1test">Digital X-Ray</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan14 === " ") {
										setBoxscan14("Digital Mammography");
									} else {
										setBoxscan14(" ");
									}
								}}
							/>
							<label htmlFor="1test">Digital Mammography</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => {
									if (boxscan15 === " ") {
										setBoxscan15("DEXA");
									} else {
										setBoxscan15(" ");
									}
								}}
							/>
							<label htmlFor="1test">Bone Densitometry (DEXA)</label>
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
