import React from 'react';
// @types
import { BoxProps } from '../../@types/Box';
// styles
import { BoxContainer } from './styles';



const Box: React.FC<BoxProps> = ({title, children}) => {
  return <BoxContainer>
    <h1>{title}</h1>
    <main className="box-container">
        {children}
    </main>
  </BoxContainer>;
}

export default Box;