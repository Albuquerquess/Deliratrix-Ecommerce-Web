import React from 'react';

// Styles
import { LabelInput } from './styles';

// Types
import { InputProps } from '../../../types/Form'

const Input: React.FC<InputProps> = ({type}) => {
  return <LabelInput>
      <input type={type || 'text'} />
  </LabelInput>;
}

export default Input;