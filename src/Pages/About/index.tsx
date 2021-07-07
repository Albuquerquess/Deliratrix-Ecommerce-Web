import React from 'react';

import { AboutContainer } from './styles';

// assets
import bannerUrl from '../../Assets/Components/About/banner'

// Components
import Search from '../../Components/Search'

const About: React.FC = () => {
  const [search, setSearch] = React.useState('')
  return <AboutContainer>
    <Search value={search} setValue={setSearch} onlyMobile redirectTo={`/search/${search}`}/>
    <div id="about-wrapper">
    <h1>Sobre a DeliraStore</h1>
    <section>
      <img src={bannerUrl} alt="DeliraTrix" id="about-banner"/>
      <p id="about-desc">A DeliraStore foi desenvolvida para suprir uma certa carência na demanda fetichista. Pensei em uma maneira de atender os mais variados fetiches e comecei a produzir conteúdo para um público muito específico, público que ninguém atendia. Em passos curtos e sem tabús, conquistei clientes de diferentes partes do mundo. <br /><br />Atualmente, com o perfil verificado por diversas plataformas pornográficas, conto com um alcance superior a 2 milhões de visualizações mensais. Realizo todo tipo de fetiche, posso te satisfazer da forma que preferir. Te convido a percorrer essa jornada comigo! Sinta-se em casa!</p>
    </section>
    </div>
  </AboutContainer>;
}

export default About;