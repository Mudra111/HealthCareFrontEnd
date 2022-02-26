import React from "react";
import logo from "./Logo.png";
import "./Header.css";
import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<div className="header sticky-top navbar">
			<header>
				<img className="logo" src={logo} alt="" width="30" height="24" />
				<nav className="nav-1">
					<ul className="links">
						<li>
							<Link to="/">Home</Link>
						</li>

						<li>
							<Link to="/">Laboratory Tests</Link>
						</li>

						<li className="dropdown">
							<Link
								className="dropdown-toggle"
								to="/"
								role="button"
								id="dropdownMenuLink"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Consulting Department
							</Link>

							<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
								<li>
									<Link className="dropdown-item" to="/general_disease_dep">
										General Disease
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/gynecology_department">
										Obstetrics and Gynecology
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/skin_disease_dep">
										Skin Disease
									</Link>
								</li>
							</ul>
						</li>

						<li className="dropdown">
							<Link
								className="dropdown-toggle"
								to="/"
								role="button"
								id="dropdownMenuLink"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								Blood Donation
							</Link>

							<ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
								<li className="dropdown-item">How to Donate</li>
								<li>
									<Link className="dropdown-item" to="/eligibilityrequ">
										Eligibility Requirements
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/typesofblood">
										Types of Blood Donations
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/">
										Learn about Blood
									</Link>
								</li>

								<hr />

								<li className="dropdown-item">How to Donate</li>
								<li>
									<Link className="dropdown-item" to="/donationpro">
										Donation Process Overview
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/whattodo1">
										What to do Before,During and After a Donation
									</Link>
								</li>
								<li>
									<Link className="dropdown-item" to="/">
										How Blood Donation Helps
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/donate_money">Money Donation</Link>
						</li>
						<li>
							<Link to="/">Feedback</Link>
						</li>

						<li>
							<button className="btn btn-outline-dark login" type="button">
								Log In
							</button>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};
