// import logo from './logo.svg';
import './App.css';
import { Header } from "./Healthcare/Header";
import { Home } from "./Healthcare/Home";
import { Footer } from "./Healthcare/Footer";
import { EligibilityRequ } from "./Healthcare/EligibilityRequ";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/eligibilityrequ" element={<EligibilityRequ/>}/>
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
