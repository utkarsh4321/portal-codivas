import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
    <footer className="footer">
        <img src="logo.png" width={110} alt="" />
        <span className="copyright">© {currentYear} <Link to="/">Codivas</Link> </span>
        <ul className="footer-links">
            <li>Codivas</li>
            <li>Sobre Nos</li>
            <li>Blogs</li>
        </ul>
    </footer>
);
    }
export default Footer;