import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from '../../image/logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import NewDropdown from "../Dropdown/newDropdown";
import Vjesti from "../Vjesti/Vjesti";
import Home from "../Home/Home";
import Kontakt from "../Kontakt/Kontakt";
import Tim from "../Tim/Tim";





const Navbar = () => {
    return <Router>
    <div className="nav-container">
    <div className="nav">
    <div className="nav-left">
      <img className="logo" src={logo} alt="logo"/>
    </div>
    
    <nav className="nav-right">
      <Link to = "/" className="link">{NewDropdown()}</Link>
      <Link to = "/partneri" className="link">Partneri</Link>
      <Link to = "/vjesti" className="link">Vjesti</Link>
      <Link to = "/projekti" className="link">Projekti</Link>
      <Link to = "/kontakt" className="kontakt">Kontakt</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/vjesti" element={<Vjesti/>}/>
      <Route path="/kontakt" element={<Kontakt/>}/>
    </Routes>
    </div>

    <Routes>
      <Route path="/tim" element={<Tim/>}/>
    </Routes>
    
    </div>
  </Router>;
}
 
export default Navbar;