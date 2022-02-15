// import logo from './logo.svg';
import './App.css';
import { Header } from "./Healthcare/Header";
import { Home } from "./Healthcare/Home";
import { Footer } from "./Healthcare/Footer";
import { EligibilityRequ } from "./Healthcare/EligibilityRequ";
import { TypesOfBlood } from "./Healthcare/TypesOfBlood";
import { DonationPro } from "./Healthcare/DonationPro";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { WhatToDo1 } from './Healthcare/WhatToDo1';
import { Help } from './Healthcare/Help';
import { Help1 } from './Healthcare/Help1';
import { Help2 } from './Healthcare/Help2';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/eligibilityrequ" element={<EligibilityRequ/>}/>
          <Route exact path="/typesofblood" element={<TypesOfBlood/>}/>
          <Route exact path="/donationpro" element={<DonationPro/>}/>
          <Route exact path="/whattodo1" element={<WhatToDo1/>}/>
          {/* <Route exact path="/help2" element={<Help2/>}/> */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
