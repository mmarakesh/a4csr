// import vjestiList from "./vjestiList";
import "./Vjesti.css";
import { useState } from "react";
import TabInfoTwo from "../Tabs/TabInfoTwo";
import TabInfoOne from "../Tabs/TabInfoOne";
import Tabs from "../Tabs/Tabs";


function Vjesti() {
    // const [showText, setShowText] = useState(false)
    const [activeTab, setActiveTab] = useState(0)
    
    // return(
    //     <>

    //     <div className="vjesti-all">
    //         {vjestiList.map(element => {
    //             const {id, img, title, description, city, date, link, showMore} = element;
    //             const showTextClick = (element) => {
    //                 element.showMore = !element.showMore
    //                 setShowText(!showText)
    //             }
                return(
                    <>
                    <div>
                    <Tabs setActiveTab = { setActiveTab } />
                    { activeTab === 0 && <TabInfoOne/>}
                    { activeTab === 1 && <TabInfoTwo/>}
                    </div>

                        {/* <div key={id} className="vjesti-card" onClick={() => showTextClick(element)}>
                        <img src={img} width="440px" alt="img news"/>
                        <h3 className="vjesti-title">{title}</h3>
                        <p className="vjesti-description">{showMore ? description : description.substring(0, 220) + "..."}</p>
                        <p className="vjesti-show">{showMore ? "Sakriti" : "Pročitajte više"}</p> 
                        <p className="vjesti-par">{city}, {date}</p>
                        <button className="invisible-btn" onClick={() => window.open(link)}><a className="vjesti-link" href={showMore ? () => window.open(link) : link.substring(0, 0)}>{showMore ? "Ova vjest je na Instagramu " : ""}</a></button>
                        </div>
                        </>
                    
                )
            })}
        </div> */}
        </>
    )
}
export default Vjesti;