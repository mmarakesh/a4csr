import "./Rekli.css"
import imageOne from "./image/slikaOne.png";
import imageTwo from "./image/slikaTwo.png";
import imageThree from "./image/slikaThree.png";

const Rekli = () => {
    return (  
        <div>
            <h1 className="rekli-header">Rekli <span className='green-header'> su o nama</span></h1>
        <div>
            <div className="rekli-all-card">
                <div className="rekli-card">
                    <div className="rekli-name">
                    <img src={imageTwo} alt="people" height="150px"/>
                    <div className="rekli-posao">
                    <h3>Janko Bulatović</h3>
                    <p><b>MBA University of Westminster and Chevening Alumni</b></p>
                    </div>
                    </div>
                    <p className="rekli-text">Izuzetno me raduje što u Crnoj Gori postoji organizacija kao što je Asocijacija za društveno odgovorno poslovanje. Zahvaljujući njima, imao sam priliku da održim predavanje o četvorodnevnoj radnoj nedjelji i njenom uticaju na produktivnost i ukupno zadovoljstvo zaposlenih, čime je ova NVO pokrenula temu rješavanja problema jedne od bolesti 21. vijeka. Njihov rad na ovim i sličnim projektima doprinosi boljem razumijevanju i primjeni principa društvene odgovornosti, što je od neprocjenjive važnosti za razvoj našeg društva.</p>
                </div>
            
                <div className="rekli-card">
                    <div className="rekli-name">
                    <img src={imageOne} alt="people" height="150px"/>
                    <div className="rekli-posao">
                    <h3>Nina Hajisabbagh</h3>
                    <p><b>UNITED KIDS INTERNATIONAL Montenegro </b></p>
                    </div>
                    </div>
                    <p className="rekli-text"><b>Pearson Coordinator High School Faculty Mentor iGCSE & iAL Business and Economics Teacher</b></p>
                    <p className="rekli-text">Saradnjom sa A4CSR, razvijamo znanje i kreativnost učenika o održivom razvoju, čineći obrazovanje inkuzivnim i inspirativnim.</p>
                </div>
            
                <div className="rekli-card">
                    <div className="rekli-name">
                    <img src={imageThree} alt="people" height="150px"/>
                    <div className="rekli-posao">
                    <h3>Uroš Bulatović</h3>
                    <p><b>Osnivač i predsjednik Unije mladih preduzetnika Crne Gore</b></p>
                    </div>
                    </div>
                    <p className="rekli-text">Kroz našu uspješnu saradnju sa Asocijacijom za društveno odgovorno poslovanje, naša organizacija je stekla dragocjeno iskustvo i znanje koje je unaprijedilo našu poslovnu praksu prema višim standardima društvene odgovornosti.</p>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default Rekli;