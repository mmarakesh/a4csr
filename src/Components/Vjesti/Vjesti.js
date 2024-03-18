import vjestiList from "./vjestiList";
import "./Vjesti.css";
import { useState } from "react";


function Vjesti() {
    const [showMore, setShowMore] = useState(false);

    return(
        <div className="vjesti-all">
            {vjestiList.map(element => {
                const {id, img, title, description, city, date, link} = element
                return(
                        <div key={id} className="vjesti-card" onClick={() => setShowMore(!showMore)}>
                        <img src={img} width="440px" alt="img news"/>
                        <h3 className="vjesti-title">{title}</h3>
                        <p className="vjesti-description">{showMore ? description : description.substring(0, 220) + "..."}</p>
                        {/* <button className="vjesti-btn" onClick={() => window.open(link)}>Pročitajte više</button> */}
                        <p className="vjesti-show">{showMore ? "Sakriti" : "Pročitajte više"}</p> 
                        <p className="vjesti-par">{city}, {date}</p>
                        <a className="vjesti-link" href={showMore ? link : link.substring(0, 0)}>{showMore ? "Ova vest je na Instagramu " : ""}</a>
                        </div>
                    
                )
            })}
        </div>
    )
}
export default Vjesti;