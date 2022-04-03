import React from "react";
import "./Feedback.css";

export default function Feedback() {
	return (
		<div className="FeedbackMain">
			<div class="feedbackcontainer">
				<h1> Give your feedback</h1>
				<div class="feedbackbox">
					<i class="fas fa-users"></i>
					<input type="text" name="text" id="text" placeholder="Full name" />
				</div>
				<div class="feedbackbox">
					<i class="fas fa-envelope"></i>
					<input
						type="email"
						name="email"
						id="email"
						placeholder="Email address"
					/>
				</div>
				<div class="feedbackdbox">
					<textarea
						cols="70"
						rows="5"
						placeholder="Enter your opinions.... "
					></textarea>
				</div>
				<button class="feedbackbtn ">Submit</button>
			</div>
		</div>
	);
}
