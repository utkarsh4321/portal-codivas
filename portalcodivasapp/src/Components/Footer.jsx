import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
    <footer>
        <img src="codivaspreto.png" width={110} alt="" />
        <p>© {currentYear} <Link to="/">Codivas</Link> </p>
        <div>
        <a href="#">Codivas</a>
        <a href="#">Sobre Nos</a>
        <a href="#">Blogs</a>
        </div>
    </footer>
);
    }
export default Footer;