import "./AddVijesti.css";
import { useState } from "react";
import vijestiList from "./vijestiList.js";


function AddVijesti() {
const [showText, setShowText] = useState(false)


    
    return(
        <div className="add-projekti-container">
        <div className="add-vjesti-all">
            
            {vijestiList.map(element => {
                const {id, img, title, description, city, date, link, showMore} = element;
                const showTextClick = (element) => {
                    element.showMore = !element.showMore
                    setShowText(!showText)
                }
                return(
                    <>
                        <div key={id} className="add-vjesti-card" onClick={() => showTextClick(element)}>
                        <img className="add-img-news" src={img} alt="img news"/>
                        <h3 className="add-vjesti-title">{title}</h3>
                        <p className="vjesti-description">{showMore ? description : description.substring(0, 220) + "..."}</p>
                        <p className="vjesti-show">{showMore ? "Sakriti" : "Pročitajte više"}</p> 
                        <p className="vjesti-par">{city}, {date}</p>
                        <button className="invisible-btn" onClick={() => window.open(link)}><a className="vjesti-link" href={showMore ? () => window.open(link) : link.substring(0, 0)}>{showMore ? "Ova vjest je na Instagramu " : ""}</a></button>
                        </div>
                        </>
                    
                )
                
            })}
            
        </div>
    </div>
) 
}

export default AddVijesti;