import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import logo from '../../logo/logo.png';
import "bootstrap/dist/css/bootstrap.min.css";
import NewDropdown from "../Dropdown/newDropdown";
import Vjesti from "../Vjesti/Vjesti";
import Home from "../Home/Home";
import Kontakt from "../Kontakt/Kontakt";
import Tim from "../Tim/Tim";
import Documentacija from "../PoslovnaDok/Documentacija";
import ScrollToTopOnMount from "../ScrollToTop/ScrollToTopOnMount";
import { HashLink } from 'react-router-hash-link';
import Publikacije from "../Publikacije/Publikacije";
import Projekti from "../Projekti/Projekti";
import { NavLink } from "react-router-dom";





const Navbar = () => {

    return <Router>
    <ScrollToTopOnMount /> 
    <div className="nav-container">
    <div className="nav">
    <div className="nav-left">
    <Link to = "/"><img className="logo" src={logo} alt="logo"/></Link>
    </div>
    
    <nav className="nav-right">
      <NavLink to = "/" className="link" activeClassName="active">{NewDropdown()}</NavLink>
      <HashLink to = "/#partneri" className="link" activeClassName="active">Partneri</HashLink>
      <NavLink to = "/vjesti" className="link" activeClassName="active">Vijesti</NavLink>
      <NavLink to = "/projekti" className="link" activeClassName="active">Projekti</NavLink>
      <NavLink to = "/publikacije" className="link" activeClassName="active">Publikacije</NavLink>
      <Link to = "/kontakt" className="kontakt">Kontakt</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/vjesti" element={<Vjesti/>}/>
      <Route path="/projekti" element={<Projekti/>}/>
      <Route path="/kontakt" element={<Kontakt/>}/>
      <Route path="/publikacije" element={<Publikacije/>}/>
      
    </Routes>
    
    </div>

    <Routes>
      <Route path="/tim" element={<Tim/>}/>
      <Route path="/doc" element={<Documentacija/>}/>
    </Routes>

    </div>
  </Router>;
  
}
export default Navbar;