import ScrollToTopOnMount from "../ScrollToTop/ScrollToTopOnMount";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
import medijaList from "./medijaList";
import './Vjesti.css';


function Vjesti() {
    
    return(
        
        <div className="test-scroll">
        <ScrollToTopOnMount/>
        <div className="medija-all">
            {medijaList.map(element => {
                const {id, video, title, date} = element;
                return(
                    <>
                        <div key={id} className="medija-card">
                        <iframe className="video-news" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                        <h2 className="medija-title">{title}</h2>
                        <p className="medija-date">{date}</p>
                        </div>
                        </>
                    
                )
            })}
        </div>
        <ScrollToTopButton />
        </div>
    )
}
export default Vjesti;