import logo from '../images/codivas-light.png';

const Navigation = () => {
    return (
        <nav className="navigation">
            <a href="/" className="nav-logo">
            <img src={logo} alt="codivas logo"/>
            </a>
        </nav>
    )
}

export default Navigation;