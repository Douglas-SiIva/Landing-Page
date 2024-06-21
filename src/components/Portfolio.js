import React from 'react';
import '../styles/Portfolio.css';

function Portfolio() {
    return (
        <section id="portfolio" className="portfolio">
            <div className="portfolio-content">
                <h2>O seu projeto é a nossa prioridade</h2>
                <div className="portfolio-grid">
                    {/* Item de portfólio 1 */}
                    <div className="portfolio-item">
                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80&h=400" alt="Projeto 1" />
                        <div className="portfolio-item-text">
                            <h3>Seu Sucesso é a Nossa Prioridade</h3>
                            <p>Entendemos que cada projeto é único e exige uma abordagem personalizada.</p>
                            <h4>Experiência e Expertise</h4>
                            <p>Equipe composta por especialistas certificados e talentosos.</p>
                            <h4>Foco em Resultados</h4>
                            <p>Acompanhamento contínuo para garantir o sucesso do seu projeto.</p>
                            <h4>Inovação e Criatividade</h4>
                            <p>Abordagem criativa para resolver problemas complexos.</p>
                        </div>
                    </div>
                    {/* Item de portfólio 2 */}
                    <div className="portfolio-item">
                        <div className="portfolio-item-text">
                            <h3>Você participa em todas as etapas, da concepção à entrega final</h3>
                            <h4>Step 1: Descoberta do produto</h4>
                            <p>A análise minuciosa durante esta fase mitiga os riscos, aumenta a eficiência do projeto e alinha as expectativas das partes interessadas, garantindo uma jornada de desenvolvimento estratégica e bem informada.</p>
                            <h4>Step 2: Planejar o Desenvolvimento</h4>
                            <p>Planejamos cada etapa do desenvolvimento com precisão. Estruturamos o projeto para maximizar a eficiência, reduzir riscos e garantir que todas as expectativas das partes interessadas sejam atendidas, resultando em um produto final de alta qualidade.</p>
                            <h4>Step 3: Entrega contínua</h4>
                            <p>Nós priorizamos entregas frequentes e iterativas. Mantemos um fluxo constante de atualizações, garantindo que você tenha acesso contínuo ao progresso do projeto e possa fornecer feedback regularmente. Isso nos permite adaptar-nos rapidamente às suas necessidades em constante evolução, assegurando que o resultado final atenda às suas expectativas e objetivos.</p>
                            <h4>Step 4: Qualidade</h4>
                            <p>Realizamos testes finais abrangentes para garantir que cada detalhe do projeto atenda aos mais altos padrões de qualidade. Nossa equipe verifica minuciosamente cada aspecto do sistema para identificar e corrigir qualquer problema antes da entrega final. Você pode confiar em nós para garantir que seu projeto esteja totalmente preparado para enfrentar qualquer desafio.</p>
                        </div>
                        <img src="https://images.unsplash.com/photo-1616198814651-e71f960c3180?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80&h=711" alt="Projeto 2" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Portfolio;
