import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Copyright = styled.span`
  padding: 1rem 0 1rem 1rem;
  align-self: flex-end;
  color: $color-font;
`;


const Footers = styled.footer`
  display: flex;
  justify-content: space-between;
  position: sticky;
  bottom: 0;
  min-height: 144px;
  background-color: white;
  img {
    position: absolute;
    inset: 0;
    margin: auto;
    min-width: 180px;
  };
  ${Copyright} {
    padding: 1rem 0 1rem 1rem;
    align-self: flex-end;
    color: #202020;
  }
`;

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <Footers>
      <img src="logo.png" width={110} alt="" />
      <span>
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
