import logo from '../../image/logo.png';
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
            <Link to = "/"><img className="logoFoot" src={logo} alt="logo"/></Link>    
        </div>
        <div className='creator'>
            <p>Created by Marina Makarova 2024</p>
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