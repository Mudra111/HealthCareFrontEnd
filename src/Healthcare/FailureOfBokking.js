import React from "react";
import { Link } from "react-router-dom";

export default function FailureOfBloodTestBooking() {
	return (
		<div
			style={{
				marginRight: "auto",
				marginLeft: "auto",
				width: "34vw",
				height: "80vh",
				paddingTop: "28vh",
			}}
		>
			<h1 style={{ textAlign: "center", fontSize: "80px" }}>&#9785;</h1>
			<h1>Sorry!! User Does Not Exist...</h1>
			<h4>
				For Registration click here <Link to="/registration">Register Now</Link>
			</h4>
		</div>
	);
}
