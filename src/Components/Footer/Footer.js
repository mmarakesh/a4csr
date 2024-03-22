import logo from '../../image/logo.png';
import {Link } from "react-router-dom";
import './Footer.css';
import SocialMedia from './SocialMedia';

function Footer() {

    return (
    <div className='footerBox'>
        <div>
        <Link to = "/"><img className="logoFoot" src={logo} alt="logo"/></Link>  
        </div>
        <div className='creator'>
            <p>Created by Marina Makarova 2024</p>
        </div>
        <div className='socialMedia'>
            <SocialMedia/>
        </div>
    </div>
    
    )
}
export default Footer;