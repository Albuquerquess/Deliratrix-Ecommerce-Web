import React from 'react';
import { Link } from 'react-router-dom'

// Styles
import { FooterContainer, FooterCopy } from './styles';
import DeliraStore from '../../Assets/Components/Footer/Delirastore'

// Assets
import Instagram from '../../Assets/Components/Footer/Instagram'
import Twitter from '../../Assets/Components/Footer/Twitter'

const Footer: React.FC = () => {
  return <>

  <FooterContainer>
    <div id="wrapper">
      <section>
        <DeliraStore />
        <p id="footer-desc">A DeliraStore é uma loja fetichista livre de preconceitos. Aqui você encontra todos os tipos de conteúdos e serviços para você explorar o seu lado sexual.</p>
        <div>
          <a href="https://www.instagram.com/deliratrix/" target="_blank"><Instagram /></a>
          <a href="https://twitter.com/deliratrix" target="_blank"><Twitter /></a>
        </div>
      </section>
      <section>
        <div>
          <h2>Navegação</h2>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
          </ul>
        </div>

        <div>
          <h2>Catálogo</h2>
          <ul>
            <li><Link to="/explorar/Servicos">Serviços</Link></li>
            <li><Link to="/explorar/Produtos">Produtos</Link></li>
          </ul>
        </div>
      </section>
    </div>
</FooterContainer>
<FooterCopy>
      <div id="copy-wrapper">
        <span id="copy">2021 Copyright: <strong>Delirastore</strong></span>
        <section>
          <a href="http://www.google.com">Projeto: <strong>Jonathan Weslley</strong></a>
          <a href="http://www.google.com">Desenvolvimento: <strong>Gustavo Albuquerque</strong></a>
        </section>
      </div>
    </FooterCopy>
  </>
;
}

export default Footer;