import React from 'react';
import { Link } from 'react-router-dom';
// @types
import { ButtonProps } from '../../types/Button';
// styles
import { StyledLabel } from './styles';


const Button: React.FC<ButtonProps> = ({label, to, handleClicked, outline, type, disabled}) => {
  const isDisabled = disabled ? true : false
  return <StyledLabel outline={outline} disabled={isDisabled}>
    <button type={type || ''}>
      <Link to={(isDisabled ? '#' : to) || '#'} onClick={handleClicked}> 
        {label || 'Clique aqui'}
      </Link>
    </button>
  </StyledLabel>;
}

export default Button;