// import logo from './logo.svg';
import './App.css';
import { Header } from "./Healthcare/Header";
import { Home } from "./Healthcare/Home";
import { Footer } from "./Healthcare/Footer";
import { EligibilityRequ } from "./Healthcare/EligibilityRequ";
import DonateMoney from "./Healthcare/Donate_money";
import Gynecology from "./Healthcare/Gynecology";
import General from "./Healthcare/General_disease";
import Skin from "./Healthcare/SkinDisease";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/eligibilityrequ" element={<EligibilityRequ/>}/>
          <Route exact path="/donate_money" element={<DonateMoney/>}/>
          <Route exact path="/gynecology_department" element={<Gynecology/>}/>
          <Route exact path="/general_disease_dep" element={<General/>}/>
          <Route exact path="/skin_disease_dep" element={<Skin/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
