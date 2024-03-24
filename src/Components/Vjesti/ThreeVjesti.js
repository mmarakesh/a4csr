import React, { useState } from "react";
import vjestiList from "./vjestiList";
import "./Vjesti.css";


function ThreeVjesti() {
  const firstThreeVjesti = vjestiList.filter((_, id)=>[2,4,7].includes(id)); // Get the first three items from vjestiList
  const [showText, setShowText] = useState(false);
  const showTextClick = (element) => {
    element.showMore = !element.showMore
    setShowText(!showText)
}
  return (
    <>
      <h1 className="vjesti-header">Naši <span className='green-header'> vjesti</span></h1>
    <div className="vjesti-three-all">
      {firstThreeVjesti.map((element) => {
        const { id, img, title, description, showMore } = element;
        return (
    
          <div key={id} className="vjesti-three-card" onClick={() => showTextClick(element)}>
            <img className="img-three-vjesti" src={img} width="440px" alt="img news" />
            <h3 className="three-vjesti-title">{title}</h3>
            <p className="vjesti-description">{showMore ? description : description.substring(0, 0)}</p>
          </div>
        );
      })}
    </div>
    </>
  );
}

export default ThreeVjesti;