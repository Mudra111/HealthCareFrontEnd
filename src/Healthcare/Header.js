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
							Consulting Department
							<ul className="dropmenu border">
								<li>
									<Link to="/general_disease_dep">General Disease</Link>
								</li>
								<li>
									<Link to="/gynecology_department">
										Obstetrics & Gynecology
									</Link>
								</li>
								<li>
									<Link to="/skin_disease_dep">Skin Disease</Link>
								</li>
							</ul>
						</li>
						<li>
							Blood Donation
							<ul className="dropmenu d-flex">
								<li>
									How to Donate
									<ul className="sub-menu">
										<li className="sub-menuItem">
											<Link to="/eligibilityrequ">
												Eligibility Requirements
											</Link>
										</li>
										<li className="sub-menuItem">
											<Link to="/">Types of Blood Donations</Link>
										</li>
										<li className="sub-menuItem">
											<Link to="/">Lean about Blood</Link>
										</li>
									</ul>
								</li>
								<li>
									Blood donation Process
									<ul className="sub-menu">
										<li className="sub-menuItem">
											<Link to="/">Eligibility Requirements</Link>
										</li>
										<li className="sub-menuItem">
											<Link to="/">Types of Blood Donations</Link>
										</li>
										<li className="sub-menuItem">
											<Link to="/">Lean about Blood</Link>
										</li>
									</ul>
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
