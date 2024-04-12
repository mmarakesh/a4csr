import Misija from "../Misija/Misija";
import Onama from "../Onama/Onama";
import Partneri from "../Partneri/Partneri";
import Rekli from "../Rekli/Rekli";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
import ThreeVjesti from "../Vjesti/ThreeVjesti";
import { Link } from 'react-router-dom';
import Video from "../Video/Video";


const Home = () => {

    return ( 
    <div className="nav-container">
<Onama/>
<div>
<ThreeVjesti/>
<Link to = "/vjesti" className="allVjesti-btn">Svi vijesti  »</Link> 
</div>
<Misija/>
<Rekli/>
<Video/>
<Link to = "/projekti" className="allVjesti-btnTwo">Saznaj više »</Link> 
<section id="partneri"><Partneri/></section>
<ScrollToTopButton/>
</div>
    );
}

export default Home;