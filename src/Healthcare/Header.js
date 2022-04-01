import React from "react";
import logo from "./images/healthcareLogo.png";
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
							<Link to="/labtest">Laboratory Tests</Link>
						</li>

						{/*<li>
            <Link to="/login">Laboratory Tests</Link>
          </li>
  */}
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
								<li className="dropdown-item">
									<Link  to="/general_disease_dep">
										General Disease
									</Link>
								</li>
								<li className="dropdown-item">
									<Link  to="/gynecology_department">
										Obstetrics and Gynecology
									</Link>
								</li>
								<li className="dropdown-item">
									<Link  to="/skin_disease_dep">
										Dermatology
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
								<li className="dropdown-item">
									<Link  to="/eligibilityrequ">
										Eligibility Requirements
									</Link>
								</li>
								<li  className="dropdown-item">
									<Link to="/typesofblood">
										Types of Blood Donations
									</Link>
								</li>

								<li className="dropdown-item">
									<Link  to="/donationpro">
										Donation Process Overview
									</Link>
								</li>
								<li className="dropdown-item">
									<Link  to="/whattodo1">
										What to do Before,During and After a Donation
									</Link>
								</li>
							</ul>
						</li>
						<li>
							<Link to="/donate_money">Money Donation</Link>
						</li>
						<li>
							<Link to="/feedback">Feedback</Link>
						</li>
						{/*<li>
							<Link to="/registration">
								<button className="btn btn-outline-dark login" type="button">
									Registration
								</button>
							</Link>
</li>*/}
						<li>
							<Link to="/login">
								<button className="btn btn-outline-dark login" type="button">
									Log In
								</button>
							</Link>
						</li>
					</ul>
				</nav>
			</header>
		</div>
	);
};
