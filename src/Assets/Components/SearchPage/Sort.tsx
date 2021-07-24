import React from 'react';

// @types
import { SortProps } from '../../../@types/searchPage'


const Sort: React.FC<SortProps> = ( {clickFunction} ) => {
  return  <svg id="sort-icon" onClick={clickFunction} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#fff">
      <path d="M0 0h24v24H0V0z" fill="none"/>
  <path d="M3 18h6v-2H3v2zM3 6v2h18V6H3zm0 7h12v-2H3v2z"/>
  </svg>;
}

export default Sort;