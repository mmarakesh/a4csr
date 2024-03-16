import React from "react";
import vjestiList from "./vjestiList";
import { Link } from 'react-router-dom';
import "./Vjesti.css";

function Vjesti() {
  const firstThreeVjesti = vjestiList.slice(0, 3); // Get the first three items from vjestiList

  return (
    <div className="vjesti-all">
      {firstThreeVjesti.map((element) => {
        const { id, img, title, description, city, date, link } = element;
        return (
          <div>
          <div key={id} className="container-vjesti">
            <img src={img} width="300px" alt="img news" />
            <h3 className="vjesti-title">{title}</h3>
            <p className="vjesti-description">{description}</p>
            <button onClick={() => window.open(link)}>Pročitajte više</button>
            <p>{city}, {date}</p>
          </div>
          <Link to = "/vjesti" className="link">All Vjesti</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Vjesti;