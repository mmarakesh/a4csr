import React from "react";
import vjestiList from "./vjestiList";


function Vjesti() {
  const firstThreeVjesti = vjestiList.filter((_, id)=>[2,5,8].includes(id)); // Get the first three items from vjestiList

  return (
    <div>
      {firstThreeVjesti.map((element) => {
        const { id, img, title, description, city, date, link } = element;
        return (
    
          <div key={id} className="container-vjesti">
            <img src={img} width="300px" alt="img news" />
            <h3>{title}</h3>
            <p>{description}</p>
            <button onClick={() => window.open(link)}>Pročitajte više</button>
            <p>{city}, {date}</p>
          </div>
          

        );
      })}
    </div>
  );
}

export default Vjesti;