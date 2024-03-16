import Misija from "../Misija/Misija";
import Onama from "../Onama/Onama";
import Documentacija from "../PoslovnaDok/Documentacija";
import Projekti from "../Projekti/Projekti";

const Home = () => {
    return ( 
        <div>
<Onama/>
<Misija/>
<Documentacija/>
<Projekti/>
        </div>
    );
}

export default Home;