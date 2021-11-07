import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const MobileNavigation = ({links}) => {
    return (
    <Dropdown id="burger-menu">
        <Dropdown.Toggle id="burger-dropdown">
            <FontAwesomeIcon icon={["fa", "bars"]} />
        </Dropdown.Toggle>

        <Dropdown.Menu>
            {links.map(link => (
                <Dropdown.Item className="burger-link">
                    <Link to={link.path} key={Math.random().toString(16)}>
                        {link.text}
                    </Link>
                </Dropdown.Item>
            ))}
        </Dropdown.Menu>
    </Dropdown>
    )
}

export default MobileNavigation;