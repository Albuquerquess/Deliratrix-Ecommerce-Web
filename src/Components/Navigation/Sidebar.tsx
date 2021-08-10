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
              <li onClick={() =>handleClickFunction(false)} ><Link to="/sobre">Sobre</Link></li>
              <li onClick={() =>handleClickFunction(false)} ><Link to="/explorar/Produtos">Produtos</Link></li>
              <li onClick={() =>handleClickFunction(false)} ><Link to="/explorar/Serviços">Serviços</Link></li>
              <li onClick={() =>handleClickFunction(false)} ><Link to="/">Página inicial</Link></li>
          </ul>
      </div>
  </SidebarContainer>;
}

export default Sidebar;