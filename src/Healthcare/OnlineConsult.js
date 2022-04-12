import React, { useState } from "react";
import "./OnlineConsult.css";
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

	const [EmailOfUser, setEmailOfUser] = useState();
	const [disease, setDisease] = useState();
	const [department, setDepartment] = useState();

	const navigate = useNavigate();

	const bookApp = () => {
		Axios.post("http://localhost:3001/bookAppointment", {
			department: department,
			emailofUser: EmailOfUser,
			disease: disease,
		}).then((response) => {
			console.log(response);
			const appBooked = response.data.appointmentBooked;
			if (appBooked) {
				alert("Your Appointment is booked successfully!!");
				navigate("/");
			} else {
				navigate("/failurOfBTB");
			}
		});
	};
	return (
		<div className="body">
			<div className="main-form1">
				<div className="head">Book Online Consultancy</div>
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
							setEmailOfUser(e.target.value);
						}}
					/>
				</div>
				<br />
				<div className="gender">
					<b>
						{" "}
						<label htmlFor="">Select Department</label>
					</b>
					<br />
					<div className="cat">
						<input
							type="radio"
							id="General"
							name="gender"
							value="General"
							onChange={(e) => {
								setDepartment(e.target.value);
							}}
						/>
						<label htmlFor="General">General</label>
						<br />
						<input
							type="radio"
							id="Dermatology"
							name="gender"
							value="Dermatology"
							onChange={(e) => {
								setDepartment(e.target.value);
							}}
						/>
						<label htmlFor="Dermatology">Dermatology</label>
						<br />
						<input
							type="radio"
							id="Gynecology"
							name="gender"
							value="Gynecology"
							onChange={(e) => {
								setDepartment(e.target.value);
							}}
						/>
						<label htmlFor="Gynecology">Gynecology</label>
					</div>
				</div>
				<br />
				<div className="user-det1">
					<div className="input notvis visible">
						<label htmlFor="Address">
							<h4>Describe Your Disease</h4>
						</label>
						<textarea
							name="message"
							rows={5}
							cols={70}
							required
							id="Disease"
							onChange={(e) => {
								setDisease(e.target.value);
							}}
						></textarea>
					</div>
				</div>
				<div className="button">
					<button onClick={bookApp}>Book Now</button>
				</div>
			</div>
		</div>
	);
}
