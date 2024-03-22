import logo from '../../image/logo.png';
import './Footer.css';
import SocialMedia from './SocialMedia';

function Footer() {

    return (
    <div className='footer'>
        <div>
            <p className='footer-par-email'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16"> <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" fill="black"></path> </svg>    
            <span> a4csr@gmail.com</span></p>
            <p className='footer-par-adress'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope" viewBox="0 0 32 32">
	        <path d="M16 18a5 5 0 1 1 5-5a5.006 5.006 0 0 1-5 5m0-8a3 3 0 1 0 3 3a3.003 3.003 0 0 0-3-3" fill="black"></path>
	        <path d="m16 30l-8.436-9.949a35.076 35.076 0 0 1-.348-.451A10.889 10.889 0 0 1 5 13a11 11 0 0 1 22 0a10.884 10.884 0 0 1-2.215 6.597l-.001.003s-.3.394-.345.447ZM8.813 18.395s.233.308.286.374L16 26.908l6.91-8.15c.044-.055.278-.365.279-.366A8.901 8.901 0 0 0 25 13a9 9 0 1 0-18 0a8.905 8.905 0 0 0 1.813 5.395" fill="black"></path>
            </svg>    
             Podgorica, Montenegro</p>
            <p className='footer-par-phone'>
            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 256">
	        <path d="m222.37 158.46l-47.11-21.11l-.13-.06a16 16 0 0 0-15.17 1.4a8.12 8.12 0 0 0-.75.56L134.87 160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16 16 0 0 0 1.32-15.06v-.12L97.54 33.64a16 16 0 0 0-16.62-9.52A56.26 56.26 0 0 0 32 80c0 79.4 64.6 144 144 144a56.26 56.26 0 0 0 55.88-48.92a16 16 0 0 0-9.51-16.62M176 208A128.14 128.14 0 0 1 48 80a40.2 40.2 0 0 1 34.87-40a.61.61 0 0 0 0 .12l21 47l-20.67 24.74a6.13 6.13 0 0 0-.57.77a16 16 0 0 0-1 15.7c9.06 18.53 27.73 37.06 46.46 46.11a16 16 0 0 0 15.75-1.14a8.44 8.44 0 0 0 .74-.56L168.89 152l47 21.05h.11A40.21 40.21 0 0 1 176 208" fill="black"></path>
            </svg>
            <span>+493-022-440-550</span>
            </p>
        </div>
        {/* <div>
            <Link to = "/"><img className="logoFoot" src={logo} alt="logo"/></Link>    
        </div> */}
        <div className='creator'>
            <img className="logoFoot" src={logo} alt="logo"/>
            <p>Created by <a className="portfolio" href="https://portfolio-makarova-developer.netlify.app/" target="_blank" rel="noreferrer">Marina Makarova</a> 2024</p>
        </div>
        <div className='socialMedia'>
            <SocialMedia/>
        </div>
    </div>
    
    )
}
export default Footer;
