import styled from 'styled-components';
//@types
import {LoadingProps} from '../../@types/PageLoading'

export const LoadingContainer = styled.div<LoadingProps>`
      display: ${props => props.disabled ? 'none' : 'block'};
      z-index: 9999;
      animation: FadeAnimation .2s ease-in .8s forwards;

      @keyframes FadeAnimation {
        0% {
          opacity: 1;
          visibility: visible;
        }

        100% {
          opacity: 0;
          visibility: hidden;
        }
      }
    
    div#loading-wrapper {
      position: fixed;
      top: 0;
      left: 0;
      
      width: 100%;
      height: 100%;
      
      background: var(--color-black);
      
      
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      & > svg {
        width: 25%;
        height: auto;
      }
    }
`;
