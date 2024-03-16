import React from "react";
import vjestiList from "./vjestiList";
import "./Vjesti.css";


function Vjesti() {
  const firstThreeVjesti = vjestiList.filter((_, id)=>[2,4,7].includes(id)); // Get the first three items from vjestiList

  return (
    <div className="vjesti-all">
      {firstThreeVjesti.map((element) => {
        const { id, img, title } = element;
        return (
    
          <div key={id} className="vjesti-card">
            <div className="three-vjesti-img">
            <img src={img} width="440px" alt="img news" />
            </div>
            <h3 className="vjesti-title">{title}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Vjesti;