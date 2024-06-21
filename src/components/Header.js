// Header.js
import React from 'react';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <img src={process.env.PUBLIC_URL + 'logo192.png'} alt="Logo" style={{ width: '100px', height: 'auto', marginLeft: '150px' }}/>
            <nav className="nav">
                <ul className="nav-list">
                    <li><a href="#about">Sobre</a></li>
                    <li><a href="#services">Serviços</a></li>
                    <li><a href="#portfolio">Portfólio</a></li>
                    <li><a href="#testimonials">Depoimentos</a></li>
                    <li><a href="#contact">Contato</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
