import TabItem from "./TabItem";

const Tabs = ({ setActiveTab }) => {
    return ( 
<div>
    {
        ['Vjesti', '/ Medija'].map((tab, index) => (
            <TabItem
            key={index}
            tab={tab}
            index={index}
            setActiveTab={setActiveTab}/>
        ))
    }
</div>
    );
}
 
export default Tabs;