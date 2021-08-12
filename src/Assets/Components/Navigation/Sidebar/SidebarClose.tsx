import React from 'react';

import { SidebarButtonProps } from '../../../../types/Navigation'

const SidebarClose: React.FC<SidebarButtonProps> = ({ clickFunction }) => {
  
  return <svg onClick={() => clickFunction(false)}
  id="drag_handle_black_24dp" xmlns="http://www.w3.org/2000/svg" width="24.897" height="24.897" viewBox="0 0 24.897 24.897">
  <path id="Caminho_519" data-name="Caminho 519" d="M0,0H24.9V24.9H0Z" fill="none"/>
  <rect id="Retângulo_671" data-name="Retângulo 671" width="17" height="2" transform="translate(7.094 5.731) rotate(45)" fill="#fff"/>
  <rect id="Retângulo_672" data-name="Retângulo 672" width="17" height="2" transform="translate(5.68 17.752) rotate(-45)" fill="#fff"/>
</svg>

}

export default SidebarClose;