import React, { useState } from "react";
import "./BloodConform.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Axios from "axios";

export default function BloodConform() {
	const [disTextarea, setDisTextarea] = useState(false);

	const display = () => {
		setDisTextarea(!disTextarea);
	};
	const notDisplay = () => {
		setDisTextarea(false);
	};

	// for backend
	const [question, setQuestion] = useState();
	const [BDiesease, setBDiesease] = useState();


	const [emailfordonation, setEmailfordonation] = useState();
	const navigate = useNavigate();
	const donateBlood = () => {
		Axios.post("http://localhost:3001/blooddonation", {
			Question: question,
			BloodDieasea: BDiesease,
			emailfordonation: emailfordonation,
		}).then((response) => {
			console.log(response);
			const BloodDonationBooked = response.data.blooddonationbook;
			if (BloodDonationBooked) {
				alert("Your Tests are booked successfully!!");
				navigate("/whattodo1");
			} else {
				navigate("/failurOfBTB");
			}
		});
	};

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
						type="email"
						onChange={(e) => {
							setEmailfordonation(e.target.value);
						}}
					/>
				</div>
				<div className="user-det1">
					<div className="gender">
						<label htmlFor="">
							<h4> Do yo have any disease?</h4>
						</label>
						<br />
						<div className="cat">
							<input
								type="radio"
								id="Male"
								name="question"
								value="Yes"
								onChange={(e) => {
									setQuestion(e.target.value);
								}}
							/>
							<label htmlFor="Yes">Yes</label>
							<br />
							<input
								type="radio"
								id="Female"
								name="question"
								value="No"
								onChange={(e) => {
									setQuestion(e.target.value);
								}}
							/>
							<label htmlFor="No">No</label>
						</div>
					</div>
				</div>
				<div className="button">
					<button onClick={donateBlood}>Book Now</button>
				</div>
			</div>
		</div>
	);
}
