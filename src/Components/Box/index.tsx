import React from 'react';

// @types
import { BoxProps } from '../../@types/Box';

import { BoxContainer } from './styles';

const Box: React.FC<BoxProps> = ({title, children}) => {
  return <BoxContainer>
    <h1>{title}</h1>
    <main>
        {children}
    </main>
  </BoxContainer>;
}

export default Box;