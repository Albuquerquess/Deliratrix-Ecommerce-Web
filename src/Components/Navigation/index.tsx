import React from 'react';
import { Link, useLocation } from 'react-router-dom'

// Styles
import { NavContainer } from './styles';

// components
import SearchInput from '../SearchInput'

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

  const location = useLocation();
  const currentLocation = location.pathname.split('/')[1]
  
  return <NavContainer showInputSearch={currentLocation !== 'search'}>
      <Sidebar isOpen={isOpen} handleClickFunction={setIsOpen} />
      <SidebarOpen clickFunction={setIsOpen} />

      <Link to='/' id="logo-container">
        <DeliraStore />
      </Link>

      <main>
        <ul>
          <li><Link to="/sobre" >Sobre</Link></li>
          <li><Link to="/explorar/produtos" >Produtos</Link></li>
          <li><Link to="/explorar/servicos" >Serviços</Link></li>
        </ul>
        
       <SearchInput value={search} setValue={setSearch} redirectTo={`/search`} />
        <Link to="#">
          <Cart />
        </Link>
      </main>
    </NavContainer>;
}

export default Navigation;