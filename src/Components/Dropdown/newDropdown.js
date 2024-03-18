import Dropdown from 'react-bootstrap/Dropdown';
import './Dropdown.css'
import {Link } from "react-router-dom";

function NewDropdown() {
    return ( 
    <Dropdown>
        <Dropdown.Toggle variant="none" className ='link' id="dropdown-basic">
            O nama
    </Dropdown.Toggle>
    
    <Dropdown.Menu>
    <Link to = "/tim"><Dropdown.Item href="#/action-1">Tim</Dropdown.Item></Link>
        <Dropdown.Item href="#/action-2">Poslovna documentacija</Dropdown.Item>
    </Dropdown.Menu>
    
    </Dropdown>
);
}

export default NewDropdown;