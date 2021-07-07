import React from 'react';
import { Link } from 'react-router-dom'

// Styles
import { NavContainer } from './styles';

// components
import Search from '../Search'

// Assets
import Cart from '../../Assets/Components/Navigation/Cart'
import DeliraStore from '../../Assets/Components/Navigation/Delirastore';

// Sidebar
  // Assets
import SidebarOpen from '../../Assets/Components/Navigation/Sidebar/SidebarOpen'
  // Components
import Sidebar from './Sidebar'

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [search, setSearch] = React.useState('')
  
  return <NavContainer>
      <Sidebar isOpen={isOpen} handleClickFunction={setIsOpen} />
      <SidebarOpen clickFunction={setIsOpen} />

      <div id="logo-container">
        <DeliraStore />
      </div>

      <main>
        <ul>
          <li><Link to="#" >Sobre</Link></li>
          <li><Link to="#" >Produtos</Link></li>
          <li><Link to="#" >Serviços</Link></li>
        </ul>
        
       <Search value={search} setValue={setSearch} redirectTo={`/search`}/>
        <Link to="#">
          <Cart />
        </Link>
      </main>
    </NavContainer>;
}

export default Navigation;