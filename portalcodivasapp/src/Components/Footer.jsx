import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
    <footer className="footer">
        <img src="logo.png" width={110} alt="" />
        <span className="copyright">© {currentYear} <Link to="/">Codivas</Link> </span>
        <ul className="footer-links">
            <li>
                <Link to="/">Codivas</Link>
            </li>
            <li>
                <a href="https://codivas.com.br" target="_blank" rel="noreferrer">SobreNos</a>
            </li>
            <li>
                <a href="https://blog.codivas.com.br" target="_blank" rel="noreferrer">Blogs</a>
            </li>
        </ul>
    </footer>
);
    }
export default Footer;