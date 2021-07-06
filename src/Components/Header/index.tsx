import React from 'react';

// Sstyles
import { HeaderContainer } from './styles';

// assets
import bannerUrl from '../../Assets/Components/Header/banner'

const Header: React.FC = () => {
  return <HeaderContainer>
      <img src={bannerUrl} alt="DELIRATRIX" srcSet="" />
  </HeaderContainer>
  ;
}

export default Header;