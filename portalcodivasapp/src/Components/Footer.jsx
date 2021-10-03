import React from "react";

function Footer(){
    const currentYear = new Date().getFullYear();
    return (
    <footer>
        <img src="logo.png" width={110} alt="" />
        <p>© {currentYear} <span>Codivas</span> </p>
        <div>
        <a href="#">Codivas</a>
        <a href="#">Sobre Nos</a>
        <a href="#">Blogs</a>
        </div>
    </footer>
);
    }
export default Footer;