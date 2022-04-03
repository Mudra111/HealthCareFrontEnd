import React, { useState } from "react";
import "./ScansBook.css";

export default function Userlogin() {
	const [boxscan1, setBoxscan1] = useState();
	const [boxscan2, setBoxscan2] = useState();
	const [boxscan3, setBoxscan3] = useState();
	const [boxscan4, setBoxscan4] = useState();
	const [boxscan5, setBoxscan5] = useState();
	const [boxscan6, setBoxscan6] = useState();
	const [boxscan7, setBoxscan7] = useState();
	const [boxscan8, setBoxscan8] = useState();
	const [boxscan9, setBoxscan9] = useState();
	const [boxscan10, setBoxscan10] = useState();
	const [boxscan11, setBoxscan11] = useState();
	const [boxscan12, setBoxscan12] = useState();
	const [boxscan13, setBoxscan13] = useState();
	const [boxscan14, setBoxscan14] = useState();
	const [boxscan15, setBoxscan15] = useState();
	return (
		<div className="body">
			<div className="main-form1">
				<div className="head">Book Scans & X-Rays</div>
				<form action="#">
					<div className="user-det1">
						<h2>Select Reports</h2>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan1("MRI")}
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
								onChange={(e) => setBoxscan2("3Tesla MRI")}
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
								onChange={(e) => setBoxscan3("1.5 Tesla MRI")}
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
								onChange={(e) => setBoxscan4("MRI Cartigram")}
							/>
							<label htmlFor="1test">MRI Cartigram</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan5("Fetal MRI")}
							/>
							<label htmlFor="1test">Fetal MRI</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan6("Fetal ECHO")}
							/>
							<label htmlFor="1test">Fetal ECHO</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan7("CT Scan")}
							/>
							<label htmlFor="1test">CT Scan</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan8("3D / 4D Ultrasound")}
							/>
							<label htmlFor="1test">3D / 4D Ultrasound</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan9("Non invasive CT Angiography")}
							/>
							<label htmlFor="1test">Non invasive CT Angiography</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan10("CT Coronary Angiography")}
							/>
							<label htmlFor="1test">CT Coronary Angiography</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan11("Colour Doppler")}
							/>
							<label htmlFor="1test">Colour Doppler</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan12("Penile Doppler")}
							/>
							<label htmlFor="1test">Penile Doppler</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan13("Digital X-Ray")}
							/>
							<label htmlFor="1test">Digital X-Ray</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan14("Digital Mammography")}
							/>
							<label htmlFor="1test">Digital Mammography</label>
						</div>
						<br />
						<div className="input">
							<input
								type="checkbox"
								id="1test"
								className="inpbox1"
								onChange={(e) => setBoxscan15("Bone Densitometry (DEXA)")}
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
