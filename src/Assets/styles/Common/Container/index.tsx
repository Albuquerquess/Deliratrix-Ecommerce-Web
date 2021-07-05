import React from 'react';

import { CommonContainer, CommonWrapper } from './styles';

const Container: React.FC = ({children}) => {
  return <CommonContainer>
    <CommonWrapper>
      {children}
    </CommonWrapper>
  </CommonContainer>;
}

export default Container;