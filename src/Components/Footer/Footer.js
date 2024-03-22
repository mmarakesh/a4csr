import logo from './imgLogo/logo.png';
import {Link } from "react-router-dom";
import './Footer.css';
import SocialMedia from './SocialMedia';

function Footer() {

    return (
    <div className='footerBox'>
        <div>
            <a href="mailto: a4csr@gmail.com" className='footer-par-email'>
            a4csr@gmail.com
            </a>

            <p className='footer-par-adress'>
             Podgorica, Montenegro</p>
            
            <a href='tel:+493022440550' className='footer-par-phone'>
            +493-022-440-550
            </a>
        </div>
        <div className='creator'>
            <Link to = "/"><img className="logoFoot" src={logo} alt="logo"/></Link>
            <p>Created by Marina Makarova 2024</p>
        </div>
        <div className='socialMedia'>
            <SocialMedia/>
        </div>
    </div>
    
    )
}
export default Footer;