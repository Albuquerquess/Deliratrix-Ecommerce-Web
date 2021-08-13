import React from 'react';
import { useHistory } from 'react-router-dom'

// styles
import { SearchContainer } from './styles';

// assets
import Lupa from '../../Assets/Components/Navigation/Lupa'

// @types
import { SearchProps } from '../../types/Search';

const SearchInput: React.FC<SearchProps> = ({ onlyMobile, value, setValue, redirectTo }) => {
  const location = useHistory()

  function handleKeyPress(e: React.KeyboardEvent<HTMLLabelElement>) {
   if (redirectTo && redirectTo !== '') {
     const key = e.key
      
      if (key === 'Enter')
      location.push(`${redirectTo}/${value}`)
   }
  }

  return <SearchContainer id="search-input" onlyMobile={onlyMobile} onKeyPressCapture={handleKeyPress}>
            <Lupa />
          <input id="nav-input" type="text" placeholder="Pesquisar" value={value} onChange={(e) => setValue(e.target.value)}/>
  </SearchContainer>;
}

export default SearchInput;