import React, { useState } from "react";
import {Navigate, useNavigate} from "react-router-dom"
import Axios from "axios";
import "./Registration.css";

export default function Registration() {
	const [fname, setFName] = useState("");
	const [lname, setLName] = useState("");
	const [mobile, setMobile] = useState("");
	const [email, setEmail] = useState("");
	const [address, setAddress] = useState("");
	const [birth, setBirth] = useState("");
	const [blood, setBlood] = useState("");
	const [pass, setPass] = useState("");
	const [conpass, setConpass] = useState("");
	const [gender, setGender] = useState("");
  const navigat = useNavigate();

	const register = () => {
		Axios.post("http://localhost:3001/register", {
			FirstName: fname,
			LastName: lname,
			MobileNo: mobile,
			Email: email,
			Address: address,
			BirthDate: birth,
			BldGrp: blood,
			Pass: pass,
			ConPass: conpass,
			Gender: gender,
		}).then((response) => {
			console.log(response);
      if(response.data.isRegistered){
        navigat('/login');
      }
      if(response.data.isRegister){
        Navigate(-1);
      }

		});
	};

	return (
		<div className="body">
			<div className="main-form">
				<div className="head">Registration</div>
				<form action="#">
					<div className="user-det">
						<div className="input">
							<label htmlFor="F_Name">First Name</label>
							<input
								type="text"
								placeholder="Enter First Name"
								required
								id="F_Name"
								onChange={(e) => {
									setFName(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label htmlFor="L_Name">Last Name</label>
							<input
								type="text"
								placeholder="Enter Last Name"
								required
								id="L_Name"
								onChange={(e) => {
									setLName(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label htmlFor="Mobile">Mobile Number</label>
							<input
								type="text"
								placeholder="Enter Mobile Number"
								required
								id="Mobile"
								onChange={(e) => {
									setMobile(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label htmlFor="Email">EMail ID</label>
							<input
								type="text"
								placeholder="Enter EMail ID"
								required
								id="Email"
								onChange={(e) => {
									setEmail(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label htmlFor="Address">Address</label>
							<input
								type="text"
								placeholder="Enter Your Address"
								required
								id="Address"
								onChange={(e) => {
									setAddress(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label htmlFor="Date">Birth Date</label>
							<input
								type="date"
								placeholder="Select Birth Date"
								required
								id="Date"
								onChange={(e) => {
									setBirth(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label htmlFor="BG">Blood Grp</label>
							<select
								name=""
								id="BG"
								required
								onChange={(e) => {
									setBlood(e.target.value);
								}}
							>
								<option value="A+">A+</option>
								<option value="A-">A-</option>
								<option value="B+">B+</option>
								<option value="B-">B-</option>
								<option value="AB+">AB+</option>
								<option value="AB-">AB-</option>
								<option value="O+">O+</option>
								<option value="O-">O-</option>
							</select>
						</div>
						<div className="input">
							<label htmlFor="Pass">Password</label>
							<input
								type="password"
								placeholder="Enter Your Password"
								required
								id="Pass"
								onChange={(e) => {
									setPass(e.target.value);
								}}
							/>
						</div>
						<div className="input">
							<label htmlFor="ConPass">Conform Password</label>
							<input
								type="password"
								placeholder="Conform Your Password"
								required
								id="ConPass"
								onChange={(e) => {
									setConpass(e.target.value);
								}}
							/>
						</div>
						<div className="gender">
							<label htmlFor="">Gender</label>
							<br />
							<div className="cat">
								<input
									type="radio"
									id="Male"
									name="gender"
									value="Male"
									onChange={(e) => {
										setGender(e.target.value);
									}}
								/>
								<label htmlFor="Male">Male</label>
								<br />
								<input
									type="radio"
									id="Female"
									name="gender"
									value="Female"
									onChange={(e) => {
										setGender(e.target.value);
									}}
								/>
								<label htmlFor="Female">Female</label>
								<br />
								<input
									type="radio"
									id="Other"
									name="gender"
									value="Other"
									onChange={(e) => {
										setGender(e.target.value);
									}}
								/>
								<label htmlFor="Other">Other</label>
							</div>
						</div>
					</div>

					<div className="button">
						<button onClick={register}>Register</button>
					</div>
				</form>
			</div>
		</div>
	);
}
