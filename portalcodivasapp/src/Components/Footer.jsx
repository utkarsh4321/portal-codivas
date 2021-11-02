import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../Assets/Images/codivas-dark.png"

const Copyright = styled.span`
  padding: 1rem 0 1rem 1rem;
  align-self: flex-end;
  color: $color-font;
`;

const Footers = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  position: sticky;
  bottom: 0;
  background-color: white;
  padding: 1rem 2rem;
  img {
    position: absolute;
    inset: 0;
    margin: auto;
    min-width: 180px;
  }
  ${Copyright} {
    padding: 1rem 1rem 1rem 1rem;
    align-self: flex-end;
    color: #202020;
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Footers>
      <img src={logo} width={110} alt="Logo Codivas" />
      <span className="footer-links">
        © {currentYear} <Link to="/">Codivas</Link>{" "}
      </span>
      <ul className="footer-links">
        <li>
          <Link to="/">Codivas</Link>
        </li>
        <li>
          <a href="https://codivas.com.br" target="_blank" rel="noreferrer">
            SobreNos
          </a>
        </li>
        <li>
          <a
            href="https://blog.codivas.com.br"
            target="_blank"
            rel="noreferrer"
          >
            Blogs
          </a>
        </li>
      </ul>
    </Footers>
  );
}
export default Footer;
