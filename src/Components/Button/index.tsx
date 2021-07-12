import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from '../../@types/Button';

import { StyledLabel } from './styles';

const Button: React.FC<ButtonProps> = ({label, to, handleClicked, outline, type}) => {
  return <StyledLabel outline={outline}>
    <button type={type || ''}>
      <Link to={to || '#'} onClick={handleClicked}> 
        {label || 'Clique aqui'}
      </Link>
    </button>
  </StyledLabel>;
}

export default Button;