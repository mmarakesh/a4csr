import Misija from "../Misija/Misija";
import Onama from "../Onama/Onama";
import Partneri from "../Partneri/Partneri";
import Projekti from "../Projekti/Projekti";
import Rekli from "../Rekli/Rekli";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
import ThreeVjesti from "../Vjesti/ThreeVjesti";
import { Link } from 'react-router-dom';


const Home = () => {

    return ( 
    <div className="nav-container">
<Onama/>
<div>
<ThreeVjesti/>
<Link to = "/vjesti" className="allVjesti-btn">Sve vjesti  »</Link> 
</div>
<Misija/>
<Rekli/>
<section id="projekti"><Projekti/></section>
<section id="partneri"><Partneri/></section>
<ScrollToTopButton/>
</div>
    );
}

export default Home;