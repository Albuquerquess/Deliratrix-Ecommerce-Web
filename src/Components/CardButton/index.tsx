import React from 'react';
import { Link } from 'react-router-dom';

// Styles
import { CardButtonContainer } from './styles';

// @types
import { CardButtonProps } from '../../types/Card'

// Assets 
import Arrow from '../../Assets/Components/CardButton/Arrow';

const CardButton: React.FC<CardButtonProps> = ({label, to}) => {
  return <CardButtonContainer>
      <Link to={to || '#'}>
        <span>{label}</span>
        <Arrow />
      </Link>
  </CardButtonContainer>;
}

export default CardButton;