import React, { useState } from "react";
import Axios from "axios";
import "./login.css";

export default function Login() {
	const [fname, setFName] = useState();
	const [lname, setLName] = useState();
	const [age, setAge] = useState();

	const [user, setUser] = useState([]);

	const add = () => {
		Axios.post("http://localhost:3001/create", {
			Fn: fname,
			Ln: lname,
			Age: age,
		}).then(() => {
			console.log("success");
		});
	};

	const getUser = () => {
		Axios.get("http://localhost:3001/show_user").then((response) => {
			console.log(response);
			setUser(response);
		});
	};

	return (
		<div>
			<form>
				<label>name</label>
				<input
					type="text"
					onChange={(event) => {
						setFName(event.target.value);
					}}
				/>
				<label>name</label>
				<input
					type=" text"
					onChange={(event) => {
						setLName(event.target.value);
					}}
				/>
				<label>age</label>
				<input
					type="number"
					onChange={(event) => {
						setAge(event.target.value);
					}}
				/>
				<button onClick={add}>Add data</button>
			</form>

			<div className="show">
				<button onClick={getUser}>Show data</button>
			</div>
		</div>
	);
}
