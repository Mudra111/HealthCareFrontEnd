import React from "react";
import Appoinment from "./images/Appoinment.png";
import Diet from "./images/Diet.png";
import Rest from "./images/Rest.jpg";
import ML from "./images/Medication-List.jpg";
import Snack from "./images/snack.jpg";
import Deed from "./images/Deed.webp";
import Liquid from "./images/Liquids.jpg";
import "./WTD1.css";

export const WhatToDo1 = () => {
	return (
		<div className="main-bg">
			<h1 className="title2">Befor Your Donation</h1>
			<div className="main-cont">
				<div className="card1">
					<div className="box1">
						<div className="imgBx">
							<img src={Appoinment} alt="" />
						</div>
						<div className="conBx">
							<div>
								<h2>Make an Appointment</h2>
								<p>
									Select a donation type and find a convenient time that works
									best for you.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="card1">
					<div className="box1">
						<div className="imgBx">
							<img src={Diet} alt="" />
						</div>
						<div className="conBx">
							<div>
								<h2>Get the Dish on Nutrition</h2>
								<p>
									Have iron-rich foods, such as red meat, fish, poultry, beans,
									spinach, iron-fortified cereals or raisins.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="card1">
					<div className="box1">
						<div className="imgBx">
							<img src={Rest} alt="" />
						</div>
						<div className="conBx">
							<div>
								<h2>Be Well Rested and Hydrate</h2>
								<p>
									Get a good night's sleep the night before your donation, eat
									healthy foods and drink extra liquids.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="tips">
				<h2>Additional tips before donating:</h2>
				<ul>
					<li>
						Donating Platelets? Don't take aspirin for 2 days before your
						appointment.
					</li>
					<li>
						Ask a friend to donate at the same time . You can support each other
						and do twice as much good!
					</li>
				</ul>
			</div>

			<hr />

			<h1 className="title2">On the Day of Your Donation</h1>
			<div className="main-cont">
				<div className="card1">
					<div className="box1">
						<div className="imgBx">
							<img src={ML} alt="" />
						</div>
						<div className="conBx">
							<div>
								<h2>Medication List</h2>
								<p>
									We'll need to know about all prescription and over-the-counter
									medications you're taking.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="tips">
				<h2>Additional tips for the day of your donation:</h2>
				<ul>
					<li>
						Drink an extra 16 oz. of water (or other nonalcoholic drink) before
						your appointment.
					</li>
					<li>
						Eat a healthy meal, avoiding fatty foods like hamburgers, fries or
						ice cream.
					</li>
					<li>
						Wear a shirt with sleeves that you can roll up above your elbows.
					</li>
					<li>
						Let us know if you have a preferred arm or particular vein that has
						been used successfully in the past to draw blood.
					</li>
					<li>
						Relax, listen to music, talk to other donors or read while you
						donate.
					</li>
				</ul>
			</div>

			<hr />

			<h1 className="title2">After Your Donation</h1>
			<div className="main-cont">
				<div className="card1">
					<div className="box1">
						<div className="imgBx">
							<img src={Snack} alt="" />
						</div>
						<div className="conBx">
							<div>
								<h2>Enjoy a Snack</h2>
								<p>
									Relax for a few minutes in our refreshment & recovery area —
									have some cookies or other snacks — you’ve earned it!
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="card1">
					<div className="box1">
						<div className="imgBx">
							<img src={Deed} alt="" />
						</div>
						<div className="conBx">
							<div>
								<h2>Tell Others About Your Good Deed</h2>
								<p>
									The gratification of giving blood is a feeling you'll want to
									share.
								</p>
							</div>
						</div>
					</div>
				</div>

				<div className="card1">
					<div className="box1">
						<div className="imgBx">
							<img src={Liquid} alt="" />
						</div>
						<div className="conBx">
							<div>
								<h2>Drink Extra Liquids</h2>
								<p>
									Drink an extra four (8 oz.) glasses of liquids and avoid
									alcohol over the next 24 hours.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="tips">
				<h2>Additional tips for after your donation:</h2>
				<ul>
					<li>
						Keep the strip bandage on for the next several hours; to avoid a
						skin rash, clean the area around the bandage with soap and water.
					</li>
					<li>
						Don’t do any heavy lifting or vigorous exercise for the rest of the
						day.
					</li>
					<li>
						If the needle site starts to bleed, apply pressure and raise your
						arm straight up for 5-10 minutes or until bleeding stops.
					</li>
					<li>
						Call us at 1-866-236-3276 to report any additional health
						information that you forgot to tell us, if you have any problems or
						if you needed medical care after giving blood.
					</li>
					<li>
						If you experience dizziness or lightheadedness, stop what you’re
						doing and sit down or lie down until you feel better; avoid
						performing any activity where fainting may lead to injury for at
						least 24 hours.
					</li>
					<li>Keep eating iron-rich foods.</li>
					<li>
						If you donate frequently, be sure to take multivitamins with iron to
						ensure you continue to replenish your iron stores before your next
						donation.
					</li>
				</ul>
			</div>
		</div>
	);
};
