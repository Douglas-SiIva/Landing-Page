/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-left">
                    <p><strong>OrientMe</strong></p>
                    <p>
                        <a href="#" className="footer-link">Termos</a> · <a href="#" className="footer-link">Política de privacidade</a>
                    </p>
                    <p className="footer-text">&copy; Todos os direitos reservados a OrientMe - CNPJ: 00.000.000/0000-00</p>
                </div>
                <div className="footer-right">
                    <div className="social-icons">
                        <a href=""><img src={process.env.PUBLIC_URL + '/icons8-whatsapp-32.png'} alt="WhatsApp" className="social-icon" /></a>
                        <a href="#"><img src={process.env.PUBLIC_URL + '/icons8-instagram-50.png'} alt="Instagram" className="social-icon" /></a>
                        <a href=""><img src={process.env.PUBLIC_URL + '/icons8-facebook-novo-24.png'} alt="Facebook" className="social-icon" /></a>
                        <a href="#"><img src={process.env.PUBLIC_URL + '/icons8-linkedin-24.png'} alt="LinkedIn" className="social-icon" /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
