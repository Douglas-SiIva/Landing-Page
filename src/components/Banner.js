// Banner.js
import React from 'react';
import '../styles/Banner.css';

function Banner() {
    return (
        <section className="banner">
            <div className="banner-content">
                <h1>Transforme suas ideias em realidade digital</h1>
                <p>Transforme suas ideias em realidade digital</p>
                <a href="#about" className="btn">Quero um orçamento</a>
                <img src={process.env.PUBLIC_URL + 'astronauta.png'} alt="logo" />
                <h6 className='simbol'> {'</>'} Somos especialistas em desenvolvimento de sites, sistemas e aplicativos Android e iOS!</h6>
            </div>
        </section>
    );
}

export default Banner;
