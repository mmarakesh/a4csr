import vjestiList from "./vjestiList";
import "./Vjesti.css";


function Vjesti() {
    return(
        <div>
            {vjestiList.map(element => {
                const {id, img, title, description, city, date, link} = element
                return(
                    <div>
                        <div key={id} className="container-vjesti">
                        <img src={img} width="300px" alt="img news"/>
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <button onClick={() => window.open(link)}>Pročitajte više</button>
                        <p>{city}, {date}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
export default Vjesti;