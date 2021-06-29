import React from 'react';

import { CommonContainer } from './styles';

const Container: React.FC = ({children}) => {
  return <CommonContainer>
      {children}
  </CommonContainer>;
}

export default Container;