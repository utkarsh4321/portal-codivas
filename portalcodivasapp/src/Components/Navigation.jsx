import logo from "../Assets/Images/codivas-light.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavLogo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 120px;
  padding: 2rem;
  margin-top: 1rem;
`;

const Img = styled.img`
  min-width: 180px;
`;

const Navigation = ({ links }) => {
  return (
    <nav className="navigation">
          <NavLogo>
      <Link to="/">
        <Img src={logo} alt="codivas logo" />
      </Link>
        </NavLogo>
      <ul className="nav-links">
        {links.map((link) => (
          <li>
            <Link to={link.path}>{link.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
