import React from 'react';

// Sstyles
import { HeaderContainer } from './styles';

// assets
import bannerUrl from '../../Assets/Components/Header/banner'

const Header: React.FC = () => {
  return <HeaderContainer banner={bannerUrl}>
      <div  />
  </HeaderContainer>
  ;
}

export default Header;