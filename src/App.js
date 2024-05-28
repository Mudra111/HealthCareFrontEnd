import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./Healthcare/Header";
import { Home } from "./Healthcare/Home";
import { Footer } from "./Healthcare/Footer";
import { EligibilityRequ } from "./Healthcare/EligibilityRequ";
import { TypesOfBlood } from "./Healthcare/TypesOfBlood";
import { DonationPro } from "./Healthcare/DonationPro";
import DonateMoney from "./Healthcare/Donate_money";
import Gynecology from "./Healthcare/Gynecology";
import General from "./Healthcare/General_disease";
import Skin from "./Healthcare/SkinDisease";
import Registration from "./Healthcare/Registration";
import Userlogin from "./Healthcare/Userlogin";
import Bloodbooktest from "./Healthcare/BloodTestBook";
import ScansBook from "./Healthcare/ScansBook";
import Feedback from "./Healthcare/Feedback";
import FailureOfBT from "./Healthcare/FailureOfBokking";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WhatToDo1 } from "./Healthcare/WhatToDo1";
import LabTest from "./Healthcare/Labtest";
import BloodConform from "./Healthcare/BloodConform";
import OnlineConsult from "./Healthcare/OnlineConsult";

export default function App() {
	return (
		<div>
			<Router>
				<Header />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/eligibilityrequ" element={<EligibilityRequ />} />
					<Route exact path="/typesofblood" element={<TypesOfBlood />} />
					<Route exact path="/donationpro" element={<DonationPro />} />
					<Route exact path="/whattodo1" element={<WhatToDo1 />} />
					<Route exact path="/labtest" element={<LabTest />} />
					<Route exact path="/donate_money" element={<DonateMoney />} />
					<Route exact path="/gynecology_department" element={<Gynecology />} />
					<Route exact path="/general_disease_dep" element={<General />} />
					<Route exact path="/skin_disease_dep" element={<Skin />} />
					<Route exact path="/registration" element={<Registration />} />
					<Route exact path="/login" element={<Userlogin />} />
					<Route exact path="/bloodtest_booking" element={<Bloodbooktest />} />
					<Route exact path="/scans_booking" element={<ScansBook />} />
					<Route exact path="/feedback" element={<Feedback />} />
					<Route exact path="/failurOfBTB" element={<FailureOfBT />} />
					<Route exact path="/bloodconform" element={<BloodConform />} />
					<Route exact path="/online_consult" element={<OnlineConsult />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}
