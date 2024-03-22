import partneriList from "./partneriList";
import "./Partneri.css";

function Partneri() {
    return (
        <div>
            <h1 className="partneri-header">Naši <span className='green-header'>partneri</span></h1>
            <div className="partneri-par">
            <p>Partnerstvo je ključni element našeg rada jer vjerujemo u snagu zajedničkog djelovanja i saradnje u ostvarivanju naših ciljeva. Kroz saradnju s partnerima iz različitih sektora, promovišemo društveno odgovorno poslovanje i zajedno gradimo održivije i prosperitetnije društvo.</p>
            <p>U potrazi smo za partnerima koji dijele našu viziju održivog razvoja i društveno odgovornog poslovanja. Ako vaša organizacija, institucija ili kompanija ima slične ciljeve i želi doprinijeti ostvarivanju pozitivnih promjena u društvu i ekonomiji, pozivamo vas da nas kontaktirajte.</p>
            </div>
        <div className="partneri-all-card">
            {partneriList.map(element => {
                const{id, image, link} = element;
                return(
                    <div key={id} className="partneri-card">
                    <a href={link} target="_blank" rel="noreferrer">
                    <img src={image} alt="partneri" width="200px"/>
                    </a>
                    </div>
                )
            })}
        </div>
        </div>
    )
}
  

export default Partneri;
