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





const Navbar = () => {

    return <Router>
    <ScrollToTopOnMount /> 
    <div className="nav-container">
    <div className="nav">
    <div className="nav-left">
    <Link to = "/"><img className="logo" src={logo} alt="logo"/></Link>
    </div>
    
    <nav className="nav-right">
      <Link to = "/" className="link">{NewDropdown()}</Link>
      <HashLink to = "/#partneri" className="link">Partneri</HashLink>
      <Link to = "/vjesti" className="link">Vijesti</Link>
      <HashLink to = "/#projekti" className="link">Projekti</HashLink>
      <Link to = "/publikacije" className="link">Publikacije</Link>
      <Link to = "/kontakt" className="kontakt">Kontakt</Link>
    </nav>

    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/vjesti" element={<Vjesti/>}/>
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