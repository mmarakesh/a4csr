import image01 from "../Projekti/image/IMG_3195.JPG"
import image02 from "../Projekti/image/IMG_3254.JPG"
import image04 from "../Projekti/image/IMG_0000.JPG"
import image05 from "../Projekti/image/IMG_3202.JPG"

import './Section.css'
import { Link } from "react-router-dom"

function Section() {
    
  
    return(
        <>
        <h1 className="section-header">Naši <span className='green-header'> vijesti</span></h1>
						<div className="section-all">
					
						
					<div className="section-left-card">
					<div>
                    <Link to = "/vjesti">
						<img className="img-left" loading="lazy" decoding="async" src={image04} alt=""/>							
                        </Link> 										
					</div>
				    </div>
						
			
										
						
						<div className="section-three-card">

						<div className="section-right-card">
							<div>
                            <Link to = "/vjesti">
								<img  className="img-right" loading="lazy" decoding="async" width="220" height="175" src={image05} alt=""/>								
                            </Link> 										
							</div>
							<div class="list-content">
							<h3 className="section-right-title"><Link className="section-right-link" to = "/vjesti">Edukativna radionica u saradnji sa Unijom mladih preduzetnika Crne Gore i Mtel digitalnom fabrikom</Link></h3>
							</div>
						</div>			
					
                    <div className="section-right-card">
							<div>
                            <Link to = "/vjesti">
								<img  className="img-right" loading="lazy" decoding="async" width="220" height="175" src={image02} alt=""/>								
                                </Link> 										
							</div>
							<div class="list-content">
							<h3 className="section-right-title"><Link className="section-right-link" to = "/vjesti">Predavanje u saradnji sa Društvom za preduzetništvo, menadžment i biznis Ekonomskog fakulteta UCG EMBA</Link></h3>
							</div>
						</div>	

                        
                    <div className="section-right-card">
							<div>
                            <Link to = "/vjesti">
								<img  className="img-right" loading="lazy" decoding="async" width="220" height="175" src={image01} alt=""/>								
                                </Link> 										
							</div>
							<div class="list-content">
							<h3 className="section-right-title"><Link className="section-right-link" to = "/vjesti">Projekat sa International school of Podgorica - UNITED KIDS INTERNATIONAL MONTENEGRO</Link></h3>
							</div>
						</div>	
					
							
			                </div>
		</div>
		</>
		
        
    )
}

export default Section;