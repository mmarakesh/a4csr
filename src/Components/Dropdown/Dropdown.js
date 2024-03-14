import './Dropdown.css'
import { useState, useEffect, useRef } from "react";


const Dropdown = () =>{
    const [open, setOpen] = useState(false);

    let menuRef = useRef();

    useEffect(()=>{
        let handler = (e) =>{
            if(!menuRef.current.contains(e.target)){
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);

        return() =>{
            document.removeEventListener('mousedown', handler);
        }
    });
    return(  
        <div className="menu-container" ref={menuRef}>
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