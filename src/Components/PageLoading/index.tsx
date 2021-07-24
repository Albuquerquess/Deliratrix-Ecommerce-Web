import React from 'react';
import Loader from "react-loader-spinner";
// @types
import { LoadingProps } from '../../@types/PageLoading';
import DeliraStore from '../../Assets/Components/LoadPage/Delirastore';
// styles
import { LoadingContainer } from './styles';

const PageLoading: React.FC<LoadingProps> = ({children, disabled}) => {
  return <LoadingContainer disabled={disabled}>
     <div id="loading-wrapper">
     <Loader
        type="Hearts"
        color="#FF4848"
        height={100}
        width={100}
       />
    <DeliraStore />
     </div>
  </LoadingContainer>;
}

export default PageLoading;