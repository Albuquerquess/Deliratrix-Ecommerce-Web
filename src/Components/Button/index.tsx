import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from '../../@types/Button';

import { StyledLabel } from './styles';

const Button: React.FC<ButtonProps> = ({label, to, handleClicked}) => {
  return <StyledLabel>
      <Link to={to || '#'} onClick={handleClicked}> 
        {label || 'Clique aqui'}
      </Link>
  </StyledLabel>;
}

export default Button;