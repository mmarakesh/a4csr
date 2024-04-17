import Dropdown from 'react-bootstrap/Dropdown';
import './Dropdown.css'
import {Link } from "react-router-dom";

function NewDropdown() {
    return ( 
    <Dropdown>
        <Dropdown.Toggle variant="none" className ='link' id="dropdown-basic" activeClassName="active">
            O nama
    </Dropdown.Toggle>
    
    <Dropdown.Menu className='dropdown-menu-style'>
    <Link className='tim-style' to = "/tim"><Dropdown.Item href="#/action-1">Tim</Dropdown.Item></Link>
    <Link className='tim-style' to = "/doc"><Dropdown.Item href="#/action-2">Poslovna dokumentacija</Dropdown.Item></Link>
    </Dropdown.Menu>
    
    </Dropdown>
);
}

export default NewDropdown;