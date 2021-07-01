import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from '../../@types/Button';

import { StyledLabel } from './styles';

const Button: React.FC<ButtonProps> = ({label, to, handleCLicked}) => {
  return <StyledLabel>
      <Link to={to || '#'} >
          <button onClick={handleCLicked}>
        {label || 'Clique aqui'}
        </button>
      </Link>
  </StyledLabel>;
}

export default Button;