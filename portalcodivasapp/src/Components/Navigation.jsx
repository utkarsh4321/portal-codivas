import logo from '../images/codivas-light.png';

const Navigation = ({children}) => {
    return (
        <nav className="navigation">
            <a href="/" className="nav-logo">
            <img src={logo} alt="codivas logo"/>
            </a>
            <ul className="nav-links">
                {children}
            </ul>
        </nav>
    )
}

export default Navigation;