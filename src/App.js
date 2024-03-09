import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from './image/logo.png';
import './App.css';
import Onama from "./Components/Onama/Onama";

function App() {
  return <Router>
    <div className="nav">
    <div className="nav-left">
      <img src={logo} alt="logo" width="400px"/>
    </div>
    <nav className="nav-right">
      <Link to = "/o nama" className="link first-link">O nama</Link>
      <Link to = "/partneri" className="link">Partneri</Link>
      <Link to = "/vjesti" className="link">Vjesti</Link>
      <Link to = "/projekti" className="link">Projekti</Link>
      <Link to = "/kontakt" className="link kontakt">Kontakt</Link>
    </nav>
    </div>
    <Onama/>
  </Router>
}
export default App;
