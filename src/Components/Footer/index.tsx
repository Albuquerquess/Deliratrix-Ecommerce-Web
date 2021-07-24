import React from 'react';

// Styles
import { FooterContainer, FooterCopy } from './styles';
import DeliraStore from '../../Assets/Components/Footer/Delirastore'

// Assets
import Facebook from '../../Assets/Components/Footer/Facebook'
import Instagram from '../../Assets/Components/Footer/Instagram'
import Twitter from '../../Assets/Components/Footer/Twitter'

const Footer: React.FC = () => {
  return <>

  <FooterContainer>
    <div id="wrapper">
      <section>
        <DeliraStore />
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata</p>
        <div>
          <Instagram />
          <Twitter />
          <Facebook />
        </div>
      </section>
      <section>
        <div>
          <h2>Navegação</h2>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
          </ul>
        </div>

        <div>
          <h2>Catálogo</h2>
          <ul>
            <li>Serviços</li>
            <li>Produtos</li>
          </ul>
        </div>
      </section>
    </div>
</FooterContainer>
<FooterCopy>
      <div id="copy-wrapper">
        <span>2021 Copyright: <strong>Delirastore</strong></span>
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