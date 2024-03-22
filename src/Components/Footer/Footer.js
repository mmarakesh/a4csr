import logo from './imgLogo/logo.png';
import {Link } from "react-router-dom";
import { Instagram } from './Instagram';
import { LinkedIn } from './LinkedIn';
import { Facebook } from './Facebook';
import { Youtube } from './Youtube';
import './Footer.css';

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
            {/* <a className='footer-portfolio' href="https://portfolio-project-me.glitch.me/" target="_blank" rel="noreferrer">Created by Marina Makarova 2024</a> */}
        </div>
        <div className='socialMedia'>
            <Facebook/>
            <Instagram/>
            <LinkedIn/>
            <Youtube/>
        </div>
    </div>
    )

}
export default Footer;