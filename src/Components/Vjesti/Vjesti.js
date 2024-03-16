import vjestiList from "./vjestiList";
import "./Vjesti.css";


function Vjesti() {
    return(
        <div className="vjesti-all">
            {vjestiList.map(element => {
                const {id, img, title, description, city, date, link} = element
                return(
                    
                        <div key={id} className="vjesti-card">
                        <img src={img} width="440px" alt="img news"/>
                        <h3 className="vjesti-title">{title}</h3>
                        <p className="vjesti-description">{description}</p>
                        <button className="vjesti-btn" onClick={() => window.open(link)}>Pročitajte više</button>
                        <p className="vjesti-par">{city}, {date}</p>
                        </div>
                    
                )
            })}
        </div>
    )
}
export default Vjesti;