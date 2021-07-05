import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { SidebarContainer } from './styles';

// Assets
import SidebarClose from '../../Assets/Components/Navigation/Sidebar/SidebarClose'

// @types
import { SidebarProps } from '../../@types/Navigation'

const Sidebar: React.FC<SidebarProps> = ({ isOpen, handleClickFunction }) => {
    
  return <SidebarContainer isOpen={isOpen} >
      <div className="wrapper">
          <nav><SidebarClose clickFunction={handleClickFunction}/></nav>
          <ul>
              <li><Link to="#">Sobre</Link></li>
              <li><Link to="#">Serviços</Link></li>
              <li><Link to="#">Produtos</Link></li>
              <li><Link to="#">Página inicial</Link></li>
          </ul>
      </div>
  </SidebarContainer>;
}

export default Sidebar;