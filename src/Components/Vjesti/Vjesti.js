// import vjestiList from "./vjestiList";
import "./Vjesti.css";
import { useState } from "react";
import TabInfoTwo from "../Tabs/TabInfoTwo";
import TabInfoOne from "../Tabs/TabInfoOne";
import Tabs from "../Tabs/Tabs";
import ScrollToTopOnMount from "../ScrollToTop/ScrollToTopOnMount";
import ScrollToTopButton from "../ScrollToTop/ScrollToTopButton";


function Vjesti() {
    const [activeTab, setActiveTab] = useState(0)
  
                return(
                    <>
                    <ScrollToTopOnMount/>
                    <div>
                    <Tabs setActiveTab = { setActiveTab } />
                    { activeTab === 0 && <TabInfoOne/>}
                    { activeTab === 1 && <TabInfoTwo/>}
                    </div>
                    
                    <ScrollToTopButton />
                
        </>
        
    )
}
export default Vjesti;