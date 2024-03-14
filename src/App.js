import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import logo from './image/logo.png';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Onama from "./Components/Onama/Onama";
import Dropdown from "./Components/Dropdown/Dropdown";
import Misija from "./Components/Misija/Misija";
import Projekti from "./Components/Projekti/Projekti";


function App() {
  
  return <Router>
    <div className="nav">
    <div className="nav-left">
      <img className="logo" src={logo} alt="logo"/>
    </div>
    
    <nav className="nav-right">
      <Link to = "/o nama" className="link"><Dropdown/></Link>
      <Link to = "/partneri" className="link">Partneri</Link>
      <Link to = "/vjesti" className="link">Vjesti</Link>
      <Link to = "/projekti" className="link">Projekti</Link>
      <Link to = "/kontakt" className="link kontakt">Kontakt</Link>
    </nav>
    </div>
    <Onama/>
    <Misija/>
    <Projekti/>
    
    
  </Router>
}
export default App;
