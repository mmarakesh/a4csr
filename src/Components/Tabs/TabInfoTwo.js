import medijaList from "../Vjesti/medijaList";
import '../Vjesti/VjestiMedia.css'


const TabInfoTwo = () => {

    return ( 
        <div className="medija-all">
            {medijaList.map(element => {
                const {id, video, title, date} = element;
                return(
                    <>
                        <div key={id} className="medija-card">
                        <iframe className="video-news" width="700" height="350" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
                        <h2 className="medija-title">{title}</h2>
                        <p className="medija-date">{date}</p>
                        </div>
                        </>
                    
                )
            })}
        </div>
     );
}
 
export default TabInfoTwo;