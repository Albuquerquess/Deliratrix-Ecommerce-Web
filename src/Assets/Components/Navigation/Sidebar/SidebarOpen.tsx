import React from 'react';

// @types
import { SidebarButtonProps } from '../../../../types/Navigation'

const SidebarOpen: React.FC<SidebarButtonProps> = ({clickFunction}) => {
  return <svg onClick={() => clickFunction(true)}
    id="sidebar-open" xmlns="http://www.w3.org/2000/svg" width="24.897" height="24.897" viewBox="0 0 24.897 24.897">
  <path id="Caminho_519" data-name="Caminho 519" d="M0,0H24.9V24.9H0Z" fill="none"/>
  <rect id="Retângulo_671" data-name="Retângulo 671" width="17" height="2" transform="translate(3.897 9)" fill="#fff"/>
  <rect id="Retângulo_672" data-name="Retângulo 672" width="17" height="2" transform="translate(3.897 13)" fill="#fff"/>
</svg>;
}

export default SidebarOpen;


