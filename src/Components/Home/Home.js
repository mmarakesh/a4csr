import Misija from "../Misija/Misija";
import Onama from "../Onama/Onama";
import Partneri from "../Partneri/Partneri";
import Documentacija from "../PoslovnaDok/Documentacija";
import Projekti from "../Projekti/Projekti";
import Rekli from "../Rekli/Rekli";
import ThreeVjesti from "../Vjesti/ThreeVjesti";
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div>
<Onama/>
<div>
<ThreeVjesti/>
<Link to = "/vjesti" className="allVjesti-btn">Sve vjesti  🡒</Link>
</div>
<Misija/>
<Rekli/>
<Documentacija/>
<Projekti/>
<Partneri/>

</div>
    );
}

export default Home;