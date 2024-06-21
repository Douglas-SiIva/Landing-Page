import React from 'react';
import '../styles/Testimonials.css';

function Testimonials() {
    return (
        <section id="testimonials" className="testimonials">
            <div className="testimonials-content">
                <h2>Tire o seu projeto do papel</h2>
                <div className="testimonial-items">
                    <div className="testimonial-item">
                        <p><strong>Validade a sua ideia no mercado</strong></p>
                        <p>Construa o seu MVP conosco e valide a sua ideia no mercado.</p>
                    </div>
                    <div className="testimonial-item">
                        <p><strong>Projetos ágeis</strong></p>
                        <p>Desenvolvemos saas e micro saas, invista em software como serviço.</p>
                    </div>
                    <div className="testimonial-item">
                        <p><strong>Desenvolvedores sob demanda</strong></p>
                        <p>Receba nossos profissionais em sua equipe.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
