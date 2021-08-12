import styled from 'styled-components';
import breakpoints from '../../Assets/styles/breakpoints';

import { StylesHeaderProps } from '../../types/Header'

export const HeaderContainer = styled.header<StylesHeaderProps>`
    margin: 3rem 0;
    width: 100%;
    height: 80vh;
  div {
    width: 100%;
    height: 100%;
    
    background-color: var(--color-gray-2);
    background: url(${props => props.banner});
    background-position: center center;
    background-repeat: no-repeat;
    background-size: contain;

  }

  @media (max-width: ${breakpoints.tablet}) {
    height: 25vh;
      img {
          width: 100%;
          height: auto;
      }
  }
`;
