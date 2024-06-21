// Services.js
import React from 'react';
import '../styles/Services.css';

function Services() {
    return (
        <section id="services" className="services">
            <div className="services-content">
                <div className="service-item">
                    <h3>Desenvolvimento Web</h3>
                    <p>Desenvolvemos sites institucionais, lojas virtuais e sistemas web personalizados</p>
                </div>
                <div className="service-item">
                    <h3>Desenvolvimento Mobile</h3>
                    <p>Desenvolvemos aplicativos IOS e Android.Progressive Web Apps(PWAs) e Apliativos Híbridos</p>
                </div>
                <div className='service-item'>
                    <h3>Design e Experiência do Usúario</h3>
                    <p>Desenvolvemos design de interface (UI), experiencia do usuário (UX), prototipagem e testes de usabilidade</p>
                </div>
                <div className='service-item'>
                    <h3>Consultoria</h3>
                    <p>Transforme desafios em oportunidades com nossa consultoria personalizada. Estratégias sob medida para impulsionar seu negócio digital</p>
                </div>
            </div>
        </section>
    );
}

export default Services;
