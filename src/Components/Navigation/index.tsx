import React from 'react';

// Styles
import { NavContainer } from './styles';

// React-Router-Dom
import { Link } from 'react-router-dom'

// Assets
import Cart from '../../Assets/Components/Navigation/Cart'
import DeliraStore from '../../Assets/Components/Navigation/Delirastore';
import Lupa from '../../Assets/Components/Navigation/Lupa'

const Navigation: React.FC = () => {
  return <NavContainer>
      <div id="logo-container">
        <DeliraStore />
      </div>

      <main>
        <ul>
          <li><Link to="#" >Sobre</Link></li>
          <li><Link to="#" >Produtos</Link></li>
          <li><Link to="#" >Serviços</Link></li>
        </ul>
        
        <label>
          <Lupa />
          <input id="nav-input" type="text" placeholder="Digite aqui para pesquisar" />
        </label>
        <Link to="#">
          <Cart />
        </Link>
      </main>
    </NavContainer>;
}

export default Navigation;