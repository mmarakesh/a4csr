import "./Projekti.css";
import { useState } from "react";
import ScrollToTopOnMount from "../ScrollToTop/ScrollToTopOnMount";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
import projektiList from "./projektiList";

function Projekti() {
const [showText, setShowText] = useState(false)


    
    return(
        <div className="projekti-container">
        <div className="test-scroll">
        <ScrollToTopOnMount/>
        <div className="vjesti-all">
            
          
            {projektiList.map(element => {
                const {id, img, title, description, city, date, link, showMore} = element;
                const showTextClick = (element) => {
                    element.showMore = !element.showMore
                    setShowText(!showText)
                }
                return(
                    <>
                        <div key={id} className="vjesti-card" onClick={() => showTextClick(element)}>
                        <img className="img-news" src={img} alt="img news"/>
                        <h3 className="vjesti-title">{title}</h3>
                        <p className="vjesti-description">{showMore ? description : description.substring(0, 220) + "..."}</p>
                        <p className="vjesti-show">{showMore ? "Sakriti" : "Pročitajte više"}</p> 
                        <p className="vjesti-par">{city}, {date}</p>
                        <button className="invisible-btn" onClick={() => window.open(link)}><a className="vjesti-link" href={showMore ? () => window.open(link) : link.substring(0, 0)}>{showMore ? "Ova vjest je na Instagramu " : ""}</a></button>
                        </div>
                        </>
                    
                )
                
            })}
            
        </div>
        <ScrollToTopButton />
        </div>
    </div>
) 
}

export default Projekti;