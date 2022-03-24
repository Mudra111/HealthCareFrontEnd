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
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { WhatToDo1 } from "./Healthcare/WhatToDo1";

import LabTest from "./Healthcare/Labtest";
// import { Help } from './Healthcare/Help';
// import { Help1 } from './Healthcare/Help1';
// import { Help2 } from './Healthcare/Help2';
import React, { useEffect, useState } from "react";
import Axios from "axios";

function App() {
	return (
		<>
			<Router>
				<Header />

				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/eligibilityrequ" element={<EligibilityRequ />} />
					<Route exact path="/typesofblood" element={<TypesOfBlood />} />
					<Route exact path="/donationpro" element={<DonationPro />} />
					<Route exact path="/whattodo1" element={<WhatToDo1 />} />
					<Route exact path="/labtest" element={<LabTest />} />
					{/* <Route exact path="/help2" element={<Help2/>}/> */}
					<Route exact path="/donate_money" element={<DonateMoney />} />
					<Route exact path="/gynecology_department" element={<Gynecology />} />
					<Route exact path="/general_disease_dep" element={<General />} />
					<Route exact path="/skin_disease_dep" element={<Skin />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
