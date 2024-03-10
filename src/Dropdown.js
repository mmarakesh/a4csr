import { useState } from "react";
const Dropdown = () =>{
    const [open, setOpen] = useState(false);
    return(  
        <div >
            <div className="menu-trigger" onClick={()=>{setOpen(!open)}}>
                <p>O nama</p>
            </div>

            <div className={`dropdown-menu ${open? 'active': 'inactive'}`}>
                <ul>
                    <DropdownItem text ={"Tim"}/>
                    <DropdownItem text ={"Poslovna dokumentacija"}/>
                </ul>
            </div>
        </div>     
    );
}

function DropdownItem(props){
    return(
        <li className="dropdownItem">
            <p>{props.text}</p>
        </li>
    );
}
export default Dropdown;