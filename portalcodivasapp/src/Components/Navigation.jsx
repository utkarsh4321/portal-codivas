import logo from '../images/codivas-light.png';
import { Link } from "react-router-dom";

const Navigation = ({children}) => {
    return (
        <nav className="navigation">
            <Link to="/" className="nav-logo">
                <img src={logo} alt="codivas logo"/>
            </Link>
            <ul className="nav-links">
                {children}
            </ul>
        </nav>
    )
}

export default Navigation;