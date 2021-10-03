import logo from '../images/codivas-light.png';
import { Link } from "react-router-dom";

const Navigation = ({links}) => {
    return (
        <nav className="navigation">
            <Link to="/" className="nav-logo">
                <img src={logo} alt="codivas logo"/>
            </Link>
            <ul className="nav-links">
                {links.map(link => (
                    <li>
                        <Link to={link.path}>{link.text}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;