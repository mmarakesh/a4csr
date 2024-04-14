import Misija from "../Misija/Misija";
import Onama from "../Onama/Onama";
import Partneri from "../Partneri/Partneri";
import Rekli from "../Rekli/Rekli";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
import { Link } from 'react-router-dom';
import Video from "../Video/Video";
import Section from "../Vjesti/Section";


const Home = () => {

    return ( 
    <div className="nav-container">
<Onama/>
<Section/>
<Misija/>
<Rekli/>
<Video/>
<Link to = "/projekti" className="allVjesti-btnTwo"><button className='kontakt-form-project'>Saznaj više »</button></Link> 
<section id="partneri"><Partneri/></section>
<ScrollToTopButton/>
</div>
    );
}

export default Home;