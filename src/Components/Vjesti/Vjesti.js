import ScrollToTopOnMount from "../ScrollToTop/ScrollToTopOnMount";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";
import medijaList from "./medijaList";
import './Vjesti.css';
import AddVijesti from "./AddVijesti";






function Vjesti() {
    const firstVideo = medijaList.filter((_, id)=>[0,1,2,3].includes(id)); /*видео с ютуба */
    const secondVideo = medijaList.filter((_, id)=>[4].includes(id)); /*сохраненные видео */
    const thirdVideo = medijaList.filter((_, id)=>[5,6].includes(id)); /*видео с ютуба */
    
    return(
        
        <div className="test-scroll">
        <ScrollToTopOnMount/>
        <AddVijesti/>
        <h1 className="medija-header"><span className='green-header'>Gostovanja</span></h1>
        <div className="medija-all">
            {firstVideo.map(element => {
                const {id, video, title, date} = element;
                return(
                    <>
                        <div key={id} className="medija-card">
                        <iframe className="video-news" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        <h2 className="medija-title">{title}</h2>
                        <p className="medija-date">{date}</p>
                        </div>
                        </>
                    
                )
            })}
            {secondVideo.map(element => {
                const {id, video, title, date} = element;
                return(
                    <>
                        <div key={id} className="medija-card">
                        <video controls className="video-news" src={video} type="video/mp4"></video>
                        <h2 className="medija-title">{title}</h2>
                        <p className="medija-date">{date}</p>
                        </div>
                        </>
                    
                )
            })}
            {thirdVideo.map(element => {
                const {id, video, title, date} = element;
                return(
                    <>
                        <div key={id} className="medija-card">
                        <iframe className="video-news" src={video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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