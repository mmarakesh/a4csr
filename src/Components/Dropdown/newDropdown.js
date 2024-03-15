import Dropdown from 'react-bootstrap/Dropdown';
import './Dropdown.css'

function newDropdown() {
    return (
    <Dropdown>
        <Dropdown.Toggle variant="none" className ='link' id="dropdown-basic">
            O nama
    </Dropdown.Toggle>

    <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Tim</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Poslovna documentacija</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
    </Dropdown.Menu>
    </Dropdown>
);
}

export default newDropdown;