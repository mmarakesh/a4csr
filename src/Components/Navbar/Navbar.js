import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from '../../image/logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import newDropdown from "../Dropdown/newDropdown";
import Vjesti from "../Vjesti/Vjesti";
import Home from "../Home/Home";





const Navbar = () => {
    return <Router>
    <div className="nav">
    <div className="nav-left">
      <img className="logo" src={logo} alt="logo"/>
    </div>
    
    <nav className="nav-right">
      <Link to = "/" className="link">{newDropdown()}</Link>
      <Link to = "/partneri" className="link">Partneri</Link>
      <Link to = "/vjesti" className="link">Vjesti</Link>
      <Link to = "/projekti" className="link">Projekti</Link>
      <Link to = "/kontakt" className="kontakt">Kontakt</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/vjesti" element={<Vjesti/>}/>
    </Routes>
    </div>
  </Router>;
}
 
export default Navbar;