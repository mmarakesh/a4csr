import Misija from "../Misija/Misija";
import Onama from "../Onama/Onama";
import Documentacija from "../PoslovnaDok/Documentacija";
import Projekti from "../Projekti/Projekti";
import ThreeVjesti from "../Vjesti/ThreeVjesti";
import { Link } from 'react-router-dom';

const Home = () => {
    return ( 
        <div>
<Onama/>
<Misija/>
<Documentacija/>
<Projekti/>
<div>
<ThreeVjesti/>
<Link to = "/vjesti" className="link">All Vjesti</Link>
</div>
        </div>
    );
}

export default Home;