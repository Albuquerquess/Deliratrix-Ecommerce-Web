import React from 'react';
import Loader from 'react-loader-spinner'
import {LoadingProps} from '../../@types/Loading'

const Loading: React.FC<LoadingProps> = ({display}) => {
  return  <Loader
  visible={display}
  type="Hearts"
  color="#FF4848"
  height={100}
  width={100}
 />
}

export default Loading;